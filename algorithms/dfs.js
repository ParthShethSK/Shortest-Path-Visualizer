const shortestPathDfs = (startNode, stopNode) => {
  const previous = new Map();
  let shortestDistance = -1;
  const dfs = (currentNode, depth) => {
    if (currentNode === stopNode) {
      shortestDistance = depth;
    } else {
      for (let neighbour of adjacencyList.get(currentNode)) {
        previous.set(neighbour, currentNode);
        dfs(neighbour, depth + 1);
      }
    }
  };
  dfs(startNode, 0);
  return { shortestDistance, previous };
};
const shortestPathDfs = () => {
	//Make a position array for left - right - up - down cell for row and column
        let rowDirection = [-1,0,1,0],
            colDirection = [0,1,0,-1];
       //Start bfs
       let splitStart = obj.startPos.split('-'),
           splitDestination = obj.destinationPos.split('-');
           let shortestDistance = -1;
           const dfs = (, depth) => {
           for(let i=0;i<4;i++){ //visit up - down - right - left
              let rowNow = parseInt(topElem.row) + parseInt(rowDirection[i]),
                  colNow = parseInt(topElem.col) + parseInt(colDirection[i]);
    if (rowNow == splitDestination[0] && colNow == splitDestination[1]) {
      shortestDistance = depth;
    } else {
      for (let neighbour of adjacencyList.get(currentNode)) {
        obj.parentNode[rowNow][colNow] = topElem.row+'-'+topElem.col;
        dfs(neighbour, depth + 1);
      }}
    }
  };
  dfs([splitStart[0]][splitStart[1]], 0);
  return { shortestDistance, previous };
};
