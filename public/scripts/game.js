// Submit button for verifying a solution
document.getElementById("verifySudoku").addEventListener("click", verifySolution);

// Generate button for building a puzzle
document.getElementById("generateSudoku").addEventListener("click", generatePuzzle);

// Generate button for solving a puzzle
document.getElementById("solveSudoku").addEventListener("click", solvePuzzle);

// A global variable - this is used to store the solution created when we generate the puzzle
var puzzle_solution = [];

// Code to display all of the users to compete with
function displayGame(){

// This loop goes through each of the exercises and displays them
var sudokuTable = document.getElementById("grid")
	for (var i = 0; i < 9; i++) {

		// Creates the rows and cells
	  	var row = document.createElement("tr");
	  	for (var j = 0; j < 9; j++) {
	    	var cell = document.createElement("td");

	    	// These are the cells
	    	var newCell = document.createTextNode("hello");
	    	cell_id_name = 'c' + i.toString() + j.toString()

	    	var sudokuCell = document.createElement('input');
			sudokuCell.type = "text";
			sudokuCell.id = cell_id_name;
			sudokuCell.name = 'input';

			// Appending the variables to the cells
	    	cell.appendChild(sudokuCell);
	    	row.appendChild(cell);
    	}
    	
	    // Appends row to the table
	  	sudokuTable.appendChild(row);
	}

	document.getElementById("c01").value = '6'
	document.getElementById("c01").name = 'solution'
	document.getElementById("c01").disabled = true
	document.getElementById("c03").value = '9'
	document.getElementById("c03").disabled = true
	document.getElementById("c03").name = 'solution'
	document.getElementById("c04").value = '2'
	document.getElementById("c04").disabled = true
	document.getElementById("c04").name = 'solution'
	document.getElementById("c08").value = '3'
	document.getElementById("c08").disabled = true
	document.getElementById("c08").name = 'solution'

	document.getElementById("c11").value = '8'
	document.getElementById("c11").disabled = true
	document.getElementById("c11").name = 'solution'
	document.getElementById("c12").value = '9'
	document.getElementById("c12").disabled = true
	document.getElementById("c12").name = 'solution'
	document.getElementById("c14").value = '1'
	document.getElementById("c14").disabled = true
	document.getElementById("c14").name = 'solution'
	document.getElementById("c16").value = '7'
	document.getElementById("c16").disabled = true
	document.getElementById("c16").name = 'solution'

	document.getElementById("c22").value = '2'
	document.getElementById("c22").disabled = true
	document.getElementById("c22").name = 'solution'
	document.getElementById("c23").value = '8'
	document.getElementById("c23").disabled = true
	document.getElementById("c23").name = 'solution'
	document.getElementById("c24").value = '6'
	document.getElementById("c24").disabled = true
	document.getElementById("c24").name = 'solution'
	document.getElementById("c26").value = '1'
	document.getElementById("c26").disabled = true
	document.getElementById("c26").name = 'solution'
	document.getElementById("c28").value = '4'
	document.getElementById("c28").disabled = true
	document.getElementById("c28").name = 'solution'

	document.getElementById("c31").value = '3'
	document.getElementById("c31").disabled = true
	document.getElementById("c31").name = 'solution'
	document.getElementById("c35").value = '2'
	document.getElementById("c35").disabled = true
	document.getElementById("c35").name = 'solution'
	document.getElementById("c36").value = '9'
	document.getElementById("c36").disabled = true
	document.getElementById("c36").name = 'solution'
	document.getElementById("c37").value = '8'
	document.getElementById("c37").disabled = true
	document.getElementById("c37").name = 'solution'

	document.getElementById("c40").value = '6'
	document.getElementById("c40").disabled = true
	document.getElementById("c40").name = 'solution'
	document.getElementById("c42").value = '5'
	document.getElementById("c42").disabled = true
	document.getElementById("c42").name = 'solution'
	document.getElementById("c43").value = '3'
	document.getElementById("c43").disabled = true
	document.getElementById("c43").name = 'solution'
	document.getElementById("c44").value = '8'
	document.getElementById("c44").disabled = true
	document.getElementById("c44").name = 'solution'
	document.getElementById("c45").value = '9'
	document.getElementById("c45").disabled = true
	document.getElementById("c45").name = 'solution'
	document.getElementById("c46").value = '4'
	document.getElementById("c46").disabled = true
	document.getElementById("c46").name = 'solution'
	document.getElementById("c47").value = '7'
	document.getElementById("c47").disabled = true
	document.getElementById("c47").name = 'solution'

	document.getElementById("c52").value = '7'
	document.getElementById("c52").disabled = true
	document.getElementById("c52").name = 'solution'
	document.getElementById("c55").value = '6'
	document.getElementById("c55").disabled = true
	document.getElementById("c55").name = 'solution'
	document.getElementById("c57").value = '3'
	document.getElementById("c57").disabled = true
	document.getElementById("c57").name = 'solution'

	document.getElementById("c61").value = '5'
	document.getElementById("c61").disabled = true
	document.getElementById("c61").name = 'solution'
	document.getElementById("c62").value = '8'
	document.getElementById("c62").disabled = true
	document.getElementById("c62").name = 'solution'
	document.getElementById("c68").value = '7'
	document.getElementById("c68").disabled = true
	document.getElementById("c68").name = 'solution'

	document.getElementById("c70").value = '2'
	document.getElementById("c70").disabled = true
	document.getElementById("c70").name = 'solution'
	document.getElementById("c73").value = '6'
	document.getElementById("c73").disabled = true
	document.getElementById("c73").name = 'solution'
	document.getElementById("c75").value = '8'
	document.getElementById("c75").disabled = true
	document.getElementById("c75").name = 'solution'
	document.getElementById("c76").value = '5'
	document.getElementById("c76").disabled = true
	document.getElementById("c76").name = 'solution'

	document.getElementById("c82").value = '6'
	document.getElementById("c82").disabled = true
	document.getElementById("c82").name = 'solution'
	document.getElementById("c84").value = '9'
	document.getElementById("c84").disabled = true
	document.getElementById("c84").name = 'solution'
	document.getElementById("c88").value = '8'
	document.getElementById("c88").disabled = true
	document.getElementById("c88").name = 'solution'
};



function generatePuzzle(){
	// Start by grabbing the table
	var sudokuTable = document.getElementById("grid")

	// Reset the solution
	puzzle_solution = [["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""]]

	// Creating the array of points tried sets - these allow you to track a puzzle and backtrack if the solution
	// is not working. I was getting stuck until I found this post:
	// https://puzzling.stackexchange.com/questions/73/how-to-avoid-getting-stuck-while-generating-sudoku-puzzles
	var nums_tried_array = [[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]]

	for (var row_pos = 0; row_pos < 9; row_pos++) {
		for (var column_pos = 0; column_pos < 9; column_pos++) {
			sudokuTable.rows[row_pos].cells[column_pos].children[0].value = ""
		}
	}

	// 3 arrays of sets are created - one for rows, one for columns, and one for blocks
	var row_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]
	var column_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]
	var block_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]

	// The for loops go through each cell in the table in a while loop and adds them to the corresponding set
	// It is then checked to see if it is currently a valid solution, and if not, tries another random number
	var row_pos = 0;
	var column_pos = 0;

	while (row_pos < 9) {
		while (column_pos < 9) {

			// Found this from this site on how to generate rand numbers 1-9
			// https://www.w3schools.com/js/js_random.asp
			var rand_number = Math.floor(Math.random() * 10);

			// Try again if rand_number == 0
			while (rand_number == 0){
				rand_number = Math.floor(Math.random() * 10);
			}
			rand_number = rand_number.toString();
			nums_tried_array[row_pos][column_pos].add(rand_number);

			// each cell is added to it's corresponding row and column set
			// Used the below stack overflow for how to grab the cell input value
			//https://stackoverflow.com/questions/9823070/how-to-retrieve-value-of-input-type-in-a-dynamic-table
			var row_bool = row_array[row_pos].has(rand_number)
			var column_bool = column_array[column_pos].has(rand_number)
			if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {var block_bool = block_array[0].has(rand_number)}
			if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {var block_bool = block_array[1].has(rand_number)}
			if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {var block_bool = block_array[2].has(rand_number)}
			if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {var block_bool = block_array[3].has(rand_number)}
			if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {var block_bool = block_array[4].has(rand_number)}
			if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {var block_bool = block_array[5].has(rand_number)}
			if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {var block_bool = block_array[6].has(rand_number)}
			if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {var block_bool = block_array[7].has(rand_number)}
			if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {var block_bool = block_array[8].has(rand_number)}

			// If the number is not in corresponding sets, it is a valid choice
			if (row_bool == false && column_bool == false && block_bool == false) {

				// Add it to the verification sets
				row_array[row_pos].add(rand_number);
				column_array[column_pos].add(rand_number);
				if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[0].add(rand_number)}
				if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[1].add(rand_number)}
				if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[2].add(rand_number)}
				if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[3].add(rand_number)}
				if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[4].add(rand_number)}
				if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[5].add(rand_number)}
				if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[6].add(rand_number)}
				if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[7].add(rand_number)}
				if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[8].add(rand_number)}

				// Add the number to the board and solution then increment column_pos by 1
				sudokuTable.rows[row_pos].cells[column_pos].children[0].value = rand_number;
				puzzle_solution[row_pos][column_pos] = rand_number;
				column_pos++;

			} else {
				if (nums_tried_array[row_pos][column_pos].size == 9 && column_pos == 0) {

					// Reset the nums tried array then gow back a row
					nums_tried_array[row_pos][column_pos] = new Set();
					column_pos = 8;
					row_pos--;

					// We now need to grab the number currently in this cell, remove it from the checks, and start over
					var temp_value = sudokuTable.rows[row_pos].cells[column_pos].children[0].value
					row_array[row_pos].delete(temp_value);
					column_array[column_pos].delete(temp_value);
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[0].delete(temp_value)}
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[1].delete(temp_value)}
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[2].delete(temp_value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[3].delete(temp_value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[4].delete(temp_value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[5].delete(temp_value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[6].delete(temp_value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[7].delete(temp_value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[8].delete(temp_value)}
					sudokuTable.rows[row_pos].cells[column_pos].children[0].value = ""
					puzzle_solution[row_pos][column_pos] = "";

				} else if (nums_tried_array[row_pos][column_pos].size == 9 && column_pos != 0) {

					// Reset the nums tried array then decrement
					nums_tried_array[row_pos][column_pos] = new Set();
					column_pos--;

					// We now need to grab the number currently in this cell, remove it from the checks, and start over
					var temp_value = sudokuTable.rows[row_pos].cells[column_pos].children[0].value
					row_array[row_pos].delete(temp_value);
					column_array[column_pos].delete(temp_value);
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[0].delete(temp_value)}
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[1].delete(temp_value)}
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[2].delete(temp_value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[3].delete(temp_value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[4].delete(temp_value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[5].delete(temp_value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[6].delete(temp_value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[7].delete(temp_value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[8].delete(temp_value)}
					sudokuTable.rows[row_pos].cells[column_pos].children[0].value = "";
					puzzle_solution[row_pos][column_pos] = "";
				} 
			}
		}

		// Increment row and reset the column
		column_pos = 0;
		row_pos++;
	}

	// Now that a full solution puzzle has been generated, we can now randomly remove cells - we will store them
	// however in case we want to fill in a solution
	console.log(puzzle_solution);
};

function solvePuzzle(){
	// Start by grabbing the table
	var sudokuTable = document.getElementById("grid")

	// For reversing the movement of the puzzle solver
	var reverse_bool = false;

	// Reset the solution
	var puzzle_solution = [["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""], 
	["", "", "", "", "", "", "", "", ""]]

	// Creating the array of points tried sets - these allow you to track a puzzle and backtrack if the solution
	// is not working. I was getting stuck until I found this post:
	// https://puzzling.stackexchange.com/questions/73/how-to-avoid-getting-stuck-while-generating-sudoku-puzzles
	var nums_tried_array = [[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()], 
	[new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]]

	// 3 arrays of sets are created - one for rows, one for columns, and one for blocks
	var row_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]
	var column_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]
	var block_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]

	// We need to go through and add the original puzzle values to the checks
	for (var row_pos = 0; row_pos < 9; row_pos++) {
		for (var column_pos = 0; column_pos < 9; column_pos++) {
			if (sudokuTable.rows[row_pos].cells[column_pos].children[0].disabled == true) {

				// Add it to the verification sets
				if (sudokuTable.rows[row_pos].cells[column_pos].children[0].value != "") {
					row_array[row_pos].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value);
					column_array[column_pos].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value);
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[0].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[1].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[2].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[3].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[4].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[5].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[6].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[7].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[8].add(sudokuTable.rows[row_pos].cells[column_pos].children[0].value)}
					puzzle_solution[row_pos][column_pos] = sudokuTable.rows[row_pos].cells[column_pos].children[0].value;
				}
			}
		}
	}

	// The for loops go through each cell in the table in a while loop and adds them to the corresponding set
	// It is then checked to see if it is currently a valid solution, and if not, tries another random number
	var row_pos = 0;
	var column_pos = 0;

	while (row_pos < 9) {
		while (column_pos < 9) {

			// First check to see if the number is a part of the original puzzle
			// If so, skip it
			if (sudokuTable.rows[row_pos].cells[column_pos].children[0].disabled == true) {
				if (reverse_bool == true) {
					if (column_pos == 0) {
						row_pos--;
						column_pos = 8;
					} else {
						column_pos--;
					}
				} else {
					column_pos++;
				}
			} else {
				reverse_bool = false;
				// Found this from this site on how to generate rand numbers 1-9
				// https://www.w3schools.com/js/js_random.asp
				var rand_number = Math.floor(Math.random() * 10);

				// Try again if rand_number == 0
				while (rand_number == 0){
					rand_number = Math.floor(Math.random() * 10);
				}
				rand_number = rand_number.toString();
				nums_tried_array[row_pos][column_pos].add(rand_number);

				// each cell is added to it's corresponding row and column set
				// Used the below stack overflow for how to grab the cell input value
				//https://stackoverflow.com/questions/9823070/how-to-retrieve-value-of-input-type-in-a-dynamic-table
				var row_bool = row_array[row_pos].has(rand_number)
				var column_bool = column_array[column_pos].has(rand_number)
				if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {var block_bool = block_array[0].has(rand_number)}
				if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {var block_bool = block_array[1].has(rand_number)}
				if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {var block_bool = block_array[2].has(rand_number)}
				if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {var block_bool = block_array[3].has(rand_number)}
				if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {var block_bool = block_array[4].has(rand_number)}
				if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {var block_bool = block_array[5].has(rand_number)}
				if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {var block_bool = block_array[6].has(rand_number)}
				if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {var block_bool = block_array[7].has(rand_number)}
				if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {var block_bool = block_array[8].has(rand_number)}

				// If the number is not in corresponding sets, it is a valid choice
				if (row_bool == false && column_bool == false && block_bool == false) {

					// Add it to the verification sets
					row_array[row_pos].add(rand_number);
					column_array[column_pos].add(rand_number);
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[0].add(rand_number)}
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[1].add(rand_number)}
					if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[2].add(rand_number)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[3].add(rand_number)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[4].add(rand_number)}
					if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[5].add(rand_number)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[6].add(rand_number)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[7].add(rand_number)}
					if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[8].add(rand_number)}

					// Add the number to the board and solution then increment column_pos by 1
					sudokuTable.rows[row_pos].cells[column_pos].children[0].value = rand_number;
					puzzle_solution[row_pos][column_pos] = rand_number;
					column_pos++;

				} else {
					if (nums_tried_array[row_pos][column_pos].size == 9 && column_pos == 0) {

													console.log('test2')
													console.log(puzzle_solution)
						// Reset the nums tried array then gow back a row
						nums_tried_array[row_pos][column_pos] = new Set();
						column_pos = 8;
						row_pos--;

						// We now need to grab the number currently in this cell, remove it from the checks, and start over
						// but only if it is a non-disabled cell
						if (sudokuTable.rows[row_pos].cells[column_pos].children[0].disabled == false) {
														console.log('test3')
							var temp_value = sudokuTable.rows[row_pos].cells[column_pos].children[0].value
							row_array[row_pos].delete(temp_value);
							column_array[column_pos].delete(temp_value);
							if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[0].delete(temp_value)}
							if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[1].delete(temp_value)}
							if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[2].delete(temp_value)}
							if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[3].delete(temp_value)}
							if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[4].delete(temp_value)}
							if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[5].delete(temp_value)}
							if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[6].delete(temp_value)}
							if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[7].delete(temp_value)}
							if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[8].delete(temp_value)}
							sudokuTable.rows[row_pos].cells[column_pos].children[0].value = "";
							puzzle_solution[row_pos][column_pos] = "";

						} else {
							reverse_bool = true;
						}
						
					} else if (nums_tried_array[row_pos][column_pos].size == 9 && column_pos != 0) {

						// Reset the nums tried array then decrement
						nums_tried_array[row_pos][column_pos] = new Set();
						column_pos--;
						console.log(column_pos)
						console.log(nums_tried_array)
						console.log(puzzle_solution)
													console.log('test5')
						if (sudokuTable.rows[row_pos].cells[column_pos].children[0].disabled == false) {
							// We now need to grab the number currently in this cell, remove it from the checks, and start over
							var temp_value = sudokuTable.rows[row_pos].cells[column_pos].children[0].value
							row_array[row_pos].delete(temp_value);
							column_array[column_pos].delete(temp_value);
														console.log('test6')
							if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[0].delete(temp_value)}
							if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[1].delete(temp_value)}
							if ((row_pos == 0 || row_pos == 1 || row_pos == 2) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[2].delete(temp_value)}
							if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[3].delete(temp_value)}
							if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[4].delete(temp_value)}
							if ((row_pos == 3 || row_pos == 4 || row_pos == 5) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[5].delete(temp_value)}
							if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 0 || column_pos == 1 || column_pos == 2)) {block_array[6].delete(temp_value)}
							if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 3 || column_pos == 4 || column_pos == 5)) {block_array[7].delete(temp_value)}
							if ((row_pos == 6 || row_pos == 7 || row_pos == 8) && (column_pos == 6 || column_pos == 7 || column_pos == 8)) {block_array[8].delete(temp_value)}
							sudokuTable.rows[row_pos].cells[column_pos].children[0].value = "";
							puzzle_solution[row_pos][column_pos] = "";
						} else {
							reverse_bool = true;
						}

					} 
				}
			}
		}

		// Increment row and reset the column
		column_pos = 0;
		row_pos++;
	}

}

// Creates sets for the rows, blocks, and columns and checks to see if each set is of size n
// if not, the puzzle is incorrect
function verifySolution(){

	// Start by grabbing the table
	var sudokuTable = document.getElementById("grid")

	// 3 arrays of sets are created - one for rows, one for columns, and one for blocks
	row_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]
	column_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]
	block_array = [new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set(), new Set()]

	// The for loops go through each cell in the table and add them to the corresponding set
	for (var i = 0; i < 9; i++) {
		for (var j = 0; j < 9; j++) {

			// each cell is added to it's corresponding row and column set
			// Used the below stack overflow for how to grab the cell input value
			//https://stackoverflow.com/questions/9823070/how-to-retrieve-value-of-input-type-in-a-dynamic-table
			row_array[i].add(sudokuTable.rows[i].cells[j].children[0].value)
			column_array[j].add(sudokuTable.rows[i].cells[j].children[0].value)

			// Series of if statements put the corresponding cell into it's block
			// Block 1
			if ((i == 0 || i == 1 || i == 2) && (j == 0 || j == 1 || j == 2)) {
				block_array[0].add(sudokuTable.rows[i].cells[j].children[0].value)
			}

			// Block 2
			if ((i == 0 || i == 1 || i == 2) && (j == 3 || j == 4 || j == 5)) {
				block_array[1].add(sudokuTable.rows[i].cells[j].children[0].value)
			}

			// Block 3
			if ((i == 0 || i == 1 || i == 2) && (j == 6 || j == 7 || j == 8)) {
				block_array[2].add(sudokuTable.rows[i].cells[j].children[0].value)
			}

			// Block 4
			if ((i == 3 || i == 4 || i == 5) && (j == 0 || j == 1 || j == 2)) {
				block_array[3].add(sudokuTable.rows[i].cells[j].children[0].value)
			}

			// Block 5
			if ((i == 3 || i == 4 || i == 5) && (j == 3 || j == 4 || j == 5)) {
				block_array[4].add(sudokuTable.rows[i].cells[j].children[0].value)
			}

			// Block 6
			if ((i == 3 || i == 4 || i == 5) && (j == 6 || j == 7 || j == 8)) {
				block_array[5].add(sudokuTable.rows[i].cells[j].children[0].value)
			}

			// Block 7
			if ((i == 6 || i == 7 || i == 8) && (j == 0 || j == 1 || j == 2)) {
				block_array[6].add(sudokuTable.rows[i].cells[j].children[0].value)
			}

			// Block 7
			if ((i == 6 || i == 7 || i == 8) && (j == 3 || j == 4 || j == 5)) {
				block_array[7].add(sudokuTable.rows[i].cells[j].children[0].value)
			}

			// Block 9
			if ((i == 6 || i == 7 || i == 8) && (j == 6 || j == 7 || j == 8)) {
				block_array[8].add(sudokuTable.rows[i].cells[j].children[0].value)
			}
		}
	}

	// One final loop of size n goes through and checks each set.
	// If a set has a size of n, it means it is correct (since you can't have duplicates in a set)
	// If at any time a set is less than size n, there is an error, alert the error and return
	for (var i = 0; i < 9; i++) {
		if (row_array[i].size != 9) {
			alert("Solution Incorrect!");
			return;
		}
		if (column_array[i].size != 9) {
			alert("Solution Incorrect!");
			return;
		}
		if (block_array[i].size != 9) {
			alert("Solution Incorrect!");
			return;
		}
	}

	// If not alert has been called, the puzzle is correct
	alert("Correct Solution! Good Job!")
	return;
}



displayGame()










