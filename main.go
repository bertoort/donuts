package main

import (
	"log"
	"net/http"

	"github.com/julienschmidt/httprouter"
)

func main() {
	port := "8080"
	router := httprouter.New()
	router.ServeFiles("/public/*filepath", http.Dir("public"))
	router.GET("/", index)
	router.GET("/random-board", randomBoard)
	router.POST("/best-move", bestMove)
	log.Printf("Running on port: %v", port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}
