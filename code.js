// DISCLAIMER: I worked with Isaiah Elston on this exercise. 
// We both worked on the code, testing, and analysis together.
function depthFirstSearch(graph, node, visited, stack) {
    visited.push(node);
    stack.push(node);

    let neighbors = graph[node];
    for (let neighbor of neighbors) {
        if (stack.includes(neighbor)) return true;

        if (visited.includes(neighbor) == false) {
            let hasCycle = depthFirstSearch(graph, neighbor, visited, stack);
            if (hasCycle == true) return true;
        }
    }
    stack.pop();
    return false;
}

function hasCycle(graph) {
    let visited = [];
    let stack = [];

    for (let node in graph) {
        if (visited.includes(node) == false) {
            let hasCycle = depthFirstSearch(graph, node, visited, stack);
            if (hasCycle == true) return true;
        }
    }
    return false;
}
