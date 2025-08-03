/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];

  const neighbors = Array.from({ length: n }, () => new Set());
  const degree = new Array(n).fill(0);

  for (const [u, v] of edges) {
    neighbors[u].add(v);
    neighbors[v].add(u);
    degree[u]++;
    degree[v]++;
  }

  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (degree[i] === 1) {
      leaves.push(i);
    }
  }

  let remaining = n;
  while (remaining > 2) {
    const leavesCount = leaves.length;
    remaining -= leavesCount;
    const newLeaves = [];

    for (let i = 0; i < leavesCount; i++) {
      const leaf = leaves[i];
      for (const neighbor of neighbors[leaf]) {
        degree[neighbor]--;
        neighbors[neighbor].delete(leaf);
        if (degree[neighbor] === 1) {
          newLeaves.push(neighbor);
        }
      }
    }
    leaves = newLeaves;
  }

  return leaves;
};
