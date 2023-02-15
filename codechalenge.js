
//let me try it in js
let delivery_route_optimization= function(buildings, start_Building){

    // Generate all possible permutations of the buildings
    let building_permutations = function getPermutations(buildings, size) {
      function p(t, i) {
          if (t.length === size) {
              result.push(t);
              return;
          }
          if (i + 1 > buildings.length) {
              return;
          }
          p(t.concat(buildings[i]), i + 1);
          p(t, i + 1);
      }
  
      var result = [];
      p([], 0);
      return result;
  
    }
    // Initialize variables to keep track of the shortest route and its length
    var shortest_route = None;
    var shortest_distance = float('inf');
    
    // Iterate through all possible permutations of the buildings
    for (permutation in building_permutations){
        //Ensure the starting building is first in the permutation
        if (permutation[0] != start_Building)
            continue;
        
        //Calculate the total distance of the current permutation
        total_distance = 0
        for (var i in range(len(permutation)-1))
            total_distance += distance(permutation[i], permutation[i+1])
        
        //Add the distance from the last building to the starting building
        total_distance += distance(permutation[-1], start_Building)
        
        // Update the shortest route and its length if the current permutation is shorter
        if (total_distance < shortest_distance){
            shortest_distance = total_distance
            shortest_route = permutation + (start_Building);
        }
    return shortest_route;
      }
    }
    //testing the fnction here 
    var buildings = ['a', 'b', 'c', 'd'];

console.log(getPermutations(buildings, 4));