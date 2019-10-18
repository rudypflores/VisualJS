//definitions of a node
const generateRandomNode = () => {
    //Generate a node with random height
    let node = document.createElement('div');
    node.classList.add('node');
    node.style.height = `${Math.floor(Math.random()*(window.innerHeight/2))}px`;
    return node;
}

//sets up nodes to be sorted before sorting
const setup = () => {
    //definition of the graph that will contain all nodes
    let graph = document.getElementById('graph');

    //insert nodes into graph to be sorted at random
    for(let i = 0; i <= 10; i++) {
        let node = generateRandomNode();
        node.id = i;
        graph.appendChild(node);
    }
};

//Definition of node
const generateNode = (height) => {
    //Generate a node at specified height
    let node = document.createElement('div');
    node.classList.add('node');
    node.style.height = `${height}px`;
    return node;
};

//Quicksort algorithm
const quickSort = (arr, start, end) => {
    if(start < end) {
        let pivot = partition(arr, start, end);
        quickSort(arr, start, pivot - 1);
        quickSort(arr, pivot + 1, end);
    } 
}

//all nodes in graph
let nodes = document.getElementsByClassName('node');
  
const partition = (arr, start, end) => { 

    let pivot = end;
    let i = start - 1;
    let j = start;

    while (j < pivot) {

        //print each action of swapping in the algorithm
        console.log(arr);
        console.log(nodes);

        if (arr[j] > arr[pivot]) {
            j++;
        }
        else {
            i++;
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            swap(nodes[i], nodes[j]);
            j++;
        }
    }

    let temp = arr[i+1];
    arr[i+1] = arr[pivot];
    arr[pivot] = temp;
    swap(nodes[i+1], nodes[pivot]);

    return i + 1;
}

//swap nodes
const swap = (node1, node2) => {
    const afterNode2 = node2.nextElementSibling;
    const parent = node2.parentNode;
    node1.replaceWith(node2);
    parent.insertBefore(node1, afterNode2);
}

//when the sort button is clicked quicksort is activated
const run = () => {
    const list = document.getElementsByClassName('node');
    let arr = [];

    for(let node of list) {
        arr.push(parseInt(node.style.height,10));
    }

    quickSort(arr, 0, list.length-1);
};