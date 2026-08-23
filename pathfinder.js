/**
 * A* Pathfinding Algorithm
 * Objectives:
 * 1. Implement A* to find the shortest path between two nodes.
 * 2. Use Euclidean distance as the heuristic.
 * 3. Return an array of node IDs representing the optimal route.
 */

function getDistance(nodeA, nodeB) {
    return Math.sqrt(Math.pow(nodeA.x - nodeB.x, 2) + Math.pow(nodeA.y - nodeB.y, 2));
}

function getNeighbors(nodeId, edges) {
    return edges
        .filter(edge => edge.from === nodeId || edge.to === nodeId)
        .map(edge => ({
            id: edge.from === nodeId ? edge.to : edge.from,
            weight: edge.weight
        }));
}

function reconstructPath(cameFrom, currentId) {
    const path = [currentId];
    while (cameFrom.has(currentId)) {
        currentId = cameFrom.get(currentId);
        path.unshift(currentId);
    }
    return path;
}

function aStarPathfinder(graphData, startId, endId) {
    const { nodes, edges } = graphData;
    const openSet = new Set([startId]);
    const cameFrom = new Map();
    const gScore = new Map();
    const fScore = new Map();

    Object.keys(nodes).forEach(id => { gScore.set(id, Infinity); fScore.set(id, Infinity); });
    gScore.set(startId, 0);
    fScore.set(startId, getDistance(nodes[startId], nodes[endId]));

    while (openSet.size > 0) {
        let currentId = [...openSet].reduce((a, b) => fScore.get(a) < fScore.get(b) ? a : b);

        if (currentId === endId) return reconstructPath(cameFrom, currentId);

        openSet.delete(currentId);
        for (const neighbor of getNeighbors(currentId, edges)) {
            const tentativeGScore = gScore.get(currentId) + neighbor.weight;
            if (tentativeGScore < gScore.get(neighbor.id)) {
                cameFrom.set(neighbor.id, currentId);
                gScore.set(neighbor.id, tentativeGScore);
                fScore.set(neighbor.id, tentativeGScore + getDistance(nodes[neighbor.id], nodes[endId]));
                openSet.add(neighbor.id);
            }
        }
    }
    return null;
}
