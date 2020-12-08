document.getElementById("c01").value = '6'
document.getElementById("c01").disabled = true
document.getElementById("c03").value = '9'
document.getElementById("c03").disabled = true
document.getElementById("c04").value = '2'
document.getElementById("c04").disabled = true
document.getElementById("c08").value = '3'
document.getElementById("c08").disabled = true

document.getElementById("c11").value = '8'
document.getElementById("c11").disabled = true
document.getElementById("c12").value = '9'
document.getElementById("c12").disabled = true
document.getElementById("c14").value = '1'
document.getElementById("c14").disabled = true
document.getElementById("c16").value = '7'
document.getElementById("c16").disabled = true

document.getElementById("c22").value = '2'
document.getElementById("c22").disabled = true
document.getElementById("c23").value = '8'
document.getElementById("c23").disabled = true
document.getElementById("c24").value = '6'
document.getElementById("c24").disabled = true
document.getElementById("c26").value = '1'
document.getElementById("c26").disabled = true
document.getElementById("c28").value = '4'
document.getElementById("c28").disabled = true

document.getElementById("c31").value = '3'
document.getElementById("c31").disabled = true
document.getElementById("c35").value = '2'
document.getElementById("c35").disabled = true
document.getElementById("c36").value = '9'
document.getElementById("c36").disabled = true
document.getElementById("c37").value = '8'
document.getElementById("c37").disabled = true

document.getElementById("c40").value = '6'
document.getElementById("c40").disabled = true
document.getElementById("c42").value = '5'
document.getElementById("c42").disabled = true
document.getElementById("c43").value = '3'
document.getElementById("c43").disabled = true
document.getElementById("c44").value = '8'
document.getElementById("c44").disabled = true
document.getElementById("c45").value = '9'
document.getElementById("c45").disabled = true
document.getElementById("c46").value = '4'
document.getElementById("c46").disabled = true
document.getElementById("c47").value = '7'
document.getElementById("c47").disabled = true

document.getElementById("c52").value = '7'
document.getElementById("c52").disabled = true
document.getElementById("c55").value = '6'
document.getElementById("c55").disabled = true
document.getElementById("c57").value = '3'
document.getElementById("c57").disabled = true

document.getElementById("c61").value = '5'
document.getElementById("c61").disabled = true
document.getElementById("c62").value = '8'
document.getElementById("c62").disabled = true
document.getElementById("c68").value = '7'
document.getElementById("c68").disabled = true

document.getElementById("c70").value = '2'
document.getElementById("c70").disabled = true
document.getElementById("c73").value = '6'
document.getElementById("c73").disabled = true
document.getElementById("c75").value = '8'
document.getElementById("c75").disabled = true
document.getElementById("c76").value = '5'
document.getElementById("c76").disabled = true

document.getElementById("c82").value = '6'
document.getElementById("c82").disabled = true
document.getElementById("c84").value = '9'
document.getElementById("c84").disabled = true
document.getElementById("c88").value = '8'
document.getElementById("c88").disabled = true

// For testing
document.getElementById("c80").value = '7'
document.getElementById("c81").value = '1'
document.getElementById("c83").value = '4'
document.getElementById("c85").value = '5'
document.getElementById("c86").value = '3'
document.getElementById("c87").value = '2'

document.getElementById("c71").value = '4'
document.getElementById("c72").value = '3'
document.getElementById("c74").value = '7'
document.getElementById("c77").value = '1'
document.getElementById("c78").value = '9'

document.getElementById("c60").value = '9'
document.getElementById("c63").value = '2'
document.getElementById("c64").value = '3'
document.getElementById("c65").value = '1'
document.getElementById("c66").value = '6'
document.getElementById("c67").value = '4'

document.getElementById("c50").value = '8'
document.getElementById("c51").value = '9'
document.getElementById("c53").value = '1'
document.getElementById("c54").value = '4'
document.getElementById("c56").value = '2'
document.getElementById("c58").value = '5'

document.getElementById("c41").value = '2'
document.getElementById("c48").value = '1'

document.getElementById("c30").value = '4'
document.getElementById("c32").value = '1'
document.getElementById("c33").value = '7'
document.getElementById("c34").value = '5'
document.getElementById("c38").value = '6'

document.getElementById("c20").value = '5'
document.getElementById("c21").value = '7'
document.getElementById("c25").value = '3'
document.getElementById("c27").value = '9'

document.getElementById("c10").value = '3'
document.getElementById("c13").value = '5'
document.getElementById("c15").value = '4'
document.getElementById("c17").value = '6'
document.getElementById("c18").value = '2'

document.getElementById("c00").value = '1'
document.getElementById("c02").value = '4'
document.getElementById("c05").value = '7'
document.getElementById("c06").value = '8'
document.getElementById("c07").value = '5'



// Found this from this site on how to generate rand numbers 1-9
				// https://www.w3schools.com/js/js_random.asp
				var rand_number = Math.floor(Math.random() * 10);

				// Try again if rand_number == 0
				while (rand_number == 0){
					rand_number = Math.floor(Math.random() * 10);
				}

				nums_tried_array[row_pos][column_pos].add(rand_number)
				
				// The number is then checked against the sets to see if there is a conflict
				// This is done using the has property - which runs in sublinear time
				// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
				var row_bool = row_array[row_pos].has(rand_number)
				var column_bool = column_array[column_pos].has(rand_number)