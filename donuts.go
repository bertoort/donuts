package main

import (
	"math/rand"
	"sort"
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
var sleepTime = time.Millisecond * 500

// donut flavors index
var flavors = [3]string{"sprinkles", "chocolate", "glazed"}

// bestMove finds the best move for an array
func bestMove(b []int) {
	var numCount [10]int
	var duplicate int
	for i := 0; i < len(b); i++ {
		numCount[b[i]]++
		if numCount[b[i]] > 1 {
			duplicate = b[i]
		}
	}
	if numCount[0] == 2 {
		twoZeros(b)
	} else if numCount[0] == 1 && numCount[1] == 1 {
		removeRow(b)
	} else if numCount[0] == 1 && numCount[1] > 1 {
		twoOnes(b)
	} else if numCount[1] == 2 {
		oneOneOne(b)
	} else if duplicate != 0 && numCount[0] != 1 {
		toDuplicate(b, duplicate)
	} else if numCount[0] == 1 && duplicate == 0 {
		twoEven(b)
	} else if numCount[1] == 1 && numCount[2] == 1 && numCount[3] != 1 {
		oneTwoToThree(b)
	} else if numCount[1] == 1 && numCount[3] == 1 && numCount[2] != 1 {
		oneThreeToTwo(b)
	} else if numCount[3] == 1 && numCount[2] == 1 && numCount[1] != 1 {
		twoThreeToOne(b)
	} else {
		guess(b)
	}
}

func toDuplicate(b []int, d int) {
	var change bool
	for i := 0; i < len(b); i++ {
		if d != b[i] {
			b[i] = 0
			change = true
		}
	}
	if !change {
		b[0] = 0
	}
}

// the following functions are used to handle patterns of solutions

func guess(b []int) {
	for i := 0; i < len(b); i++ {
		if b[i] != 0 {
			b[i] = b[i] - 1
			break
		}
	}
}

func twoZeros(b []int) {
	for i := 0; i < len(b); i++ {
		if b[i] != 0 {
			b[i] = 1
			break
		}
	}
}

func twoOnes(b []int) {
	for i := 0; i < len(b); i++ {
		if b[i] == 1 {
			b[i] = 0
			break
		}
	}
}

func removeRow(b []int) {
	for i := 0; i < len(b); i++ {
		if b[i] != 0 && b[i] != 1 {
			b[i] = 0
			break
		}
	}
}

func oneOneOne(b []int) {
	for i := 0; i < len(b); i++ {
		if b[i] != 1 {
			b[i] = 1
			break
		}
	}
}

func oneTwoToThree(b []int) {
	for i := 0; i < len(b); i++ {
		if b[i] != 1 && b[i] != 2 {
			b[i] = 3
			break
		}
	}
}

func oneThreeToTwo(b []int) {
	for i := 0; i < len(b); i++ {
		if b[i] != 1 && b[i] != 3 {
			b[i] = 2
			break
		}
	}
}

func twoThreeToOne(b []int) {
	for i := 0; i < len(b); i++ {
		if b[i] != 3 && b[i] != 2 {
			b[i] = 1
			break
		}
	}
}

func twoEven(b []int) {
	tmp := make([]int, len(b))
	copy(tmp, b)
	sort.Ints(tmp)
	for i := 0; i < len(b); i++ {
		if b[i] != 0 && b[i] != tmp[1] {
			b[i] = tmp[1]
			break
		}
	}
}

// solve finds the best move for a board
func solve(b [][]Donut) {
	time.Sleep(sleepTime)
	board := formatBoard(b)
	bestMove(board)
	formatSolution(b, board)
}

// formatSolution will match the size of the board to an array
func formatSolution(b [][]Donut, s []int) [][]Donut {
	for i := 0; i < len(b); i++ {
		for len(b[i]) > s[i] {
			b[i] = b[i][:len(b[i])-1]
		}
	}
	return b
}

// formatBoard will simplify a board to an array
func formatBoard(b [][]Donut) []int {
	board := make([]int, len(b))
	for i := 0; i < len(b); i++ {
		board[i] = len(b[i])
	}
	return board
}

// generateBoard will return a random board in size and donuts
func generateBoard(rows int) (board [][]Donut) {
	if rows == 0 {
		rows = 3
	}
	for i := 0; i < rows; i++ {
		board = append(board, randomRow())
	}
	// delay the response to show beautiful loading donut
	time.Sleep(sleepTime)
	return
}

// randomDonut will return a random flavored Donut with an increasing id
func randomDonut() Donut {
	randomNum := rand.New(rand.NewSource(time.Now().UnixNano())).Intn(3)
	id = id + 1
	return Donut{ID: id, Flavor: flavors[randomNum]}
}

// randomRow will return a random length row with random flavored donuts
func randomRow() (row []Donut) {
	randomNum := rand.New(rand.NewSource(time.Now().UnixNano())).Intn(9)
	for i := 0; i < randomNum+1; i++ {
		row = append(row, randomDonut())
	}
	return
}
