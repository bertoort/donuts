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

// delayed response time in seconds
var sleepTime = time.Millisecond * 1500

// donut flavors index
var flavors = [3]string{"sprinkles", "chocolate", "glazed"}

// bestMove finds the best move for an array
func bestMove(b [3]int) [3]int {
	for i := 0; i < 3; i++ {
		if b[i] != 0 {
			b[i] = b[i] - 1
			break
		}
	}
	return b
}

// solve finds the best move for a board
func solve(b [][]Donut) [][]Donut {
	time.Sleep(sleepTime)
	board := formatBoard(b)
	solution := bestMove(board)
	return formatSolution(b, solution)
}

// formatSolution will match the size of the board to an array
func formatSolution(b [][]Donut, s [3]int) [][]Donut {
	for i := 0; i < 3; i++ {
		for len(b[i]) > s[i] {
			b[i] = b[i][:len(b[i])-1]
		}
	}
	return b
}

// formatBoard will simplify a board to an array
func formatBoard(b [][]Donut) (board [3]int) {
	for i := 0; i < 3; i++ {
		board[i] = len(b[i])
	}
	return
}

// generateBoard will return a random board in size and donuts
func generateBoard(rows int) [][]Donut {
	if rows == 0 {
		rows = 3
	}
	board := [][]Donut{}
	for i := 0; i < rows; i++ {
		board = append(board, randomRow())
	}
	// delay the response to show beautiful loading donut
	time.Sleep(sleepTime)
	return board
}

// randomDonut will return a random flavored Donut with an increasing id
func randomDonut() Donut {
	randomNum := rand.New(rand.NewSource(time.Now().UnixNano())).Intn(3)
	id = id + 1
	return Donut{ID: id, Flavor: flavors[randomNum]}
}

// randomRow will return a random length row with random flavored donuts
func randomRow() []Donut {
	randomNum := rand.New(rand.NewSource(time.Now().UnixNano())).Intn(9)
	var row []Donut
	for i := 0; i < randomNum+1; i++ {
		row = append(row, randomDonut())
	}
	return row
}
