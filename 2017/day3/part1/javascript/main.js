
function getManhattanDistance(target) {
  const root = Math.ceil(Math.sqrt(target));
  const shell = Math.ceil(root/2) - 1;
  const shellLimit = Math.pow(root,2);  
  const distanceFromMidpoint = Math.abs(shell - (shellLimit-target)%(shell*2) );
  const manhattanDistance = shell + distanceFromMidpoint;
  return manhattanDistance;
}

console.log(getManhattanDistance(277678));

