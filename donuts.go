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

// functions to run depending on solvable pattern
var patterns = []func(b []int){
	advanced,
	twoZeros,
	removeRow,
	twoOnes,
	oneOneOne,
	twoEven,
	oneTwoToThree,
	oneThreeToTwo,
	twoThreeToOne,
}

// bestMove finds the best move for an array
func bestMove(b []int) {
	patterns[evaluate(b)](b)
}

// evaluate finds a solution pattern
func evaluate(b []int) (pattern int) {
	numCount := [9]int{}
	for i := 0; i < len(b); i++ {
		if b[i] <= 3 {
			numCount[b[i]]++
		}
	}
	if numCount[0] == 2 {
		pattern = 1
	} else if numCount[0] == 1 && numCount[1] == 1 {
		pattern = 2
	} else if numCount[0] == 1 && numCount[1] > 1 {
		pattern = 3
	} else if numCount[1] == 2 {
		pattern = 4
	} else if numCount[0] == 1 {
		pattern = 5
	} else if numCount[1] == 1 && numCount[2] == 1 {
		pattern = 6
	} else if numCount[1] == 1 && numCount[3] == 1 {
		pattern = 7
	} else if numCount[3] == 1 && numCount[2] == 1 {
		pattern = 8
	}
	return
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

func advanced(b []int) {
	duplicate := findDuplicate(b)
	if duplicate != 0 {
		for i := 0; i < len(b); i++ {
			if duplicate != b[i] {
				b[i] = 0
				break
			}
		}
	} else {
		guess(b)
	}
}

func findDuplicate(b []int) (duplicate int) {
	var list [10]int
	for i := 0; i < len(b); i++ {
		if list[b[i]] == 0 {
			list[b[i]] = 1
		} else {
			duplicate = b[i]
			break
		}
	}
	return
}

// solve finds the best move for a board
func solve(b [][]Donut) [][]Donut {
	time.Sleep(sleepTime)
	board := formatBoard(b)
	bestMove(board)
	return formatSolution(b, board)
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
