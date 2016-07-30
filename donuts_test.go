package main

import (
	"reflect"
	"testing"
)

func Test_bestMove(t *testing.T) {
	// should seize winning opportunity
	input := [][]int{
		[]int{0, 1, 3},
		[]int{9, 0, 1},
		[]int{1, 4, 0},
		[]int{0, 1, 1},
		[]int{6, 0, 1},
	}
	solution := [][]int{
		[]int{0, 1, 0},
		[]int{0, 0, 1},
		[]int{1, 0, 0},
		[]int{0, 0, 1},
		[]int{0, 0, 1},
	}
	for i, board := range input {
		bestMove(board)
		if !reflect.DeepEqual(solution[i], board) {
			t.Error(board, "Seize opportunity should equal: ", solution[i])
		}
	}
	// 1-1-1 test
	inputOne := [][]int{
		[]int{1, 1, 4},
		[]int{1, 2, 1},
		[]int{1, 6, 1},
		[]int{7, 1, 1},
		[]int{3, 1, 1},
	}
	solutionOne := []int{1, 1, 1}
	for _, board := range inputOne {
		bestMove(board)
		if !reflect.DeepEqual(solutionOne, board) {
			t.Error(board, "1-1-1 should equal: ", solutionOne)
		}
	}
	// 1-2-3 test
	inputTwo := [][]int{
		[]int{1, 6, 2},
		[]int{9, 2, 3},
		[]int{2, 1, 4},
		[]int{5, 1, 2},
		[]int{3, 5, 1},
	}
	solutionTwo := [][]int{
		[]int{1, 3, 2},
		[]int{1, 2, 3},
		[]int{2, 1, 3},
		[]int{3, 1, 2},
		[]int{3, 2, 1},
	}
	for i, board := range inputTwo {
		bestMove(board)
		if !reflect.DeepEqual(solutionTwo[i], board) {
			t.Error(board, "1-2-3 should equal: ", solutionTwo[i])
		}
	}
	// make even rows test
	inputThree := [][]int{
		[]int{0, 6, 3},
		[]int{9, 0, 5},
		[]int{3, 4, 0},
		[]int{0, 5, 2},
		[]int{3, 0, 2},
	}
	solutionThree := [][]int{
		[]int{0, 3, 3},
		[]int{5, 0, 5},
		[]int{3, 3, 0},
		[]int{0, 2, 2},
		[]int{2, 0, 2},
	}
	for i, board := range inputThree {
		bestMove(board)
		if !reflect.DeepEqual(solutionThree[i], board) {
			t.Error(board, "Make even rows should equal: ", solutionThree[i])
		}
	}
	// find even rows test
	inputFour := [][]int{
		[]int{2, 6, 6},
		[]int{9, 9, 5},
		[]int{4, 4, 1},
		[]int{3, 5, 3},
		[]int{3, 4, 4},
	}
	solutionFour := [][]int{
		[]int{0, 6, 6},
		[]int{9, 9, 0},
		[]int{4, 4, 0},
		[]int{3, 0, 3},
		[]int{0, 4, 4},
	}
	for i, board := range inputFour {
		bestMove(board)
		if !reflect.DeepEqual(solutionFour[i], board) {
			t.Error(board, "Find even rows should equal: ", solutionFour[i])
		}
	}
}
