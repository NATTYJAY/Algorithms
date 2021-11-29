

	/**
	 * 
	 * @param {*} cars : [2, 10, 8, 17]
	 * @param {*} k : 3
	 * @returns 9
	 */

	function parkingSolutions(cars, k){
		// Sort the array in descending order;
		cars.sort().reverse();
		//Determine the length of the sorted array
		n = cars.length;
		//Get the largest positive integer 
		maximum_value = Number.MAX_VALUE;
		//
			for(i = 0; i<n-k+1; i++){
				min  = Math.min(maximum_value, cars[i+k-1] - cars[i]);
			}
		return min+1;
	}

	console.log("Parking Slot",parkingSolutions([2, 10, 8, 17], 3));


	/**
	 * 
	 * @param {*} k 
	 * @param {*} score 
	 * @returns 
	 */

	function playingInGroup(k, score){

			score.sort().reverse();
			var rank = [];
			var r = 1;
			
			var previous = -1;

				for(var i=0; i<score.length; i++){
					if(previous === -1){
						rank.push(r);
						previous = score[i];
					}else if(previous == score[i]){
						rank.push(r);
					}else{
						previous = score[i];
						rank.push(i + 1);
						r = i +1;
					}
					
					var result = 0;
					
						if(rank[i] <= k && score[i] != 0){
							result = result + 1;
							break;
						}
				}
			return result;
		}
	
		console.log("Play in this group",playingInGroup(3, [100,50,50,25]));

		/**
		 * 
		 * @param {*} grid 
		 * @param {*} maxTime 
		 * @returns 
		 */

		function reachTheEnd(grid, maxTime){

			sum = (Number(grid[0].length - 1)) + (Number(grid.length - 1));

			passes =  sum == maxTime || maxTime > sum;

			return passes ? "Yes" : "No"

		}
		console.log('The end',reachTheEnd([1,233,2,1], 5));