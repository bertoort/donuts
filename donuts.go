package main

import (
	"math/rand"
	"time"
)

// Donut to be sent in json
type Donut struct {
	ID     int    `json:"id"`
	Flavor string `json:"flavor"`
}

// unique donut ID
var id int

// donut flavors index
var flavors = [3]string{"sprinkles", "chocolate", "glazed"}

func generateBoard(rows int) [][]Donut {
	if rows == 0 {
		rows = 3
	}
	board := [][]Donut{}
	for i := 0; i < rows; i++ {
		board = append(board, randomRow())
	}
	return board
}

func randomDonut() Donut {
	randomNum := rand.New(rand.NewSource(time.Now().UnixNano())).Intn(3)
	id = id + 1
	return Donut{ID: id, Flavor: flavors[randomNum]}
}

func randomRow() []Donut {
	randomNum := rand.New(rand.NewSource(time.Now().UnixNano())).Intn(9)
	row := make([]Donut, 0)
	for i := 0; i < randomNum+1; i++ {
		row = append(row, randomDonut())
	}
	return row
}
