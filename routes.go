package main

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strconv"
	"strings"
	"text/template"

	"github.com/julienschmidt/httprouter"
)

var temp = template.New("")

func init() {
	filepath.Walk("views", func(path string, info os.FileInfo, err error) error {
		if strings.HasSuffix(path, ".html") {
			temp.ParseFiles(path)
		}
		return nil
	})
}

// attributes to render a page
type attributes struct {
	Title string
	Name  string
}

// index route will render the main page
func index(res http.ResponseWriter, req *http.Request, ps httprouter.Params) {
	attr := attributes{Title: "Donuts"}
	renderTemplate(res, "index", &attr)
}

// bestMove route will check the game and provide the best next move
func bestMove(res http.ResponseWriter, req *http.Request, ps httprouter.Params) {
	defer req.Body.Close()
	body, _ := ioutil.ReadAll(req.Body)
	var board [][]Donut
	if err := json.Unmarshal(body, &board); err != nil {
		panic(err)
	}
	res.Header().Set("Content-Type", "application/json; charset=UTF-8")
	res.WriteHeader(http.StatusOK)
	var response = struct {
		Valid bool `json:"valid"`
		Over  bool `json:"over"`
	}{Valid: true, Over: false}
	if err := json.NewEncoder(res).Encode(response); err != nil {
		panic(err)
	}
}

// randomBoard route will respond with a random board json
func randomBoard(res http.ResponseWriter, req *http.Request, ps httprouter.Params) {
	rows, _ := strconv.Atoi(req.FormValue("rows"))
	randomBoard := generateBoard(rows)
	res.Header().Set("Content-Type", "application/json; charset=UTF-8")
	res.WriteHeader(http.StatusOK)
	if err := json.NewEncoder(res).Encode(randomBoard); err != nil {
		panic(err)
	}
}

// render a template given a model
func renderTemplate(w http.ResponseWriter, tmpl string, p interface{}) {
	err := temp.ExecuteTemplate(w, tmpl, p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	log.Println("GET " + tmpl)
}
