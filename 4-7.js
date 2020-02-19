//Order following dependencies

var Graph = require('./utils/graph');
Graph.prototype.findNodeWithNoChildren = function(){ //quick addition of search for node with no childern
    for (var node in this.nodes){
        if (Object.keys(this.nodes[node]).length === 0){
            return node;
        }
    }
    return undefined;
}

//Time complexity: O(N+M) N:project M:dependency
var buildOrder = function(projects, dependencies){
    let graph = new Graph(); //new graph object
    projects.forEach(project => { //added projects to node
        graph.addNode(project);
    });
    dependencies.forEach(dependency => { // dependencies to each edges
        graph.addEdge(dependency[0], dependency[1]);
    });

    let answer = [];
    currNode = graph.findNodeWithNoChildren();
    while (currNode !== undefined){
        answer.push(currNode);
        graph.removeNode(currNode); // removes node and every edges to certain node
        currNode = graph.findNodeWithNoChildren(); //next node with no children
    }
    if (answer.length === projects.length){
        return answer;
    } else {
        throw Error;
    }
}

/* TEST */
var projects = ['a', 'b', 'c', 'd', 'e', 'f'];
var dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']];

console.log(buildOrder(projects, dependencies));