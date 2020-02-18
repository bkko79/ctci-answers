class Graph {
  constructor(){
      this.nodes = {};
  }

  addEdge(node, edge){
      if (this.nodes[node] === undefined){
          return 'node does not exist';
      } else if (this.nodes[node][edge]){
          return `${node}-${edge} already exists`
      } else {
          this.nodes[node][edge] = true;
      }
  }

  removeEdge(node, edge){
      if (this.nodes[node][edge] === undefined){
          return 'does not exists'
      } else {
          delete this.nodes[node][edge];
      }
  }

  addNode(value){
      if (this.nodes[value] !== undefined){
          return 'node already exists'
      } else {
          this.nodes[value] = {};
      }
  }
  
  removeNode(node){
      if (this.nodes[node] === undefined){
          return 'node does not exists'
      } else {
          this.nodes[node][edge] = true;
      }
  }

  hasNode(node){
      return this.nodes[node] !== undefined;
  }

  findEdges(node){
      if (this.nodes[node] === undefined){
          return false;
      } else {
          return this.nodes[node];
      }
  }

  hasEdge(node, edge){
      if (this.nodes[node] === undefined){
          return false;
      } else {
          return this.nodes[node][edge] !== undefined;
      }
  }
};

module.exports = Graph;