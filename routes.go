package main

import (
	"log"
	"net/http"
	"os"
	"path/filepath"
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

// index route
func index(res http.ResponseWriter, req *http.Request, ps httprouter.Params) {
	attr := attributes{Title: "Donuts"}
	renderTemplate(res, "index", &attr)
}

// render a template given a model
func renderTemplate(w http.ResponseWriter, tmpl string, p interface{}) {
	err := temp.ExecuteTemplate(w, tmpl, p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	log.Println("GET " + tmpl)
}
