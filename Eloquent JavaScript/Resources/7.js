/* ------------------------------- Meadowfield ------------------------------ */

const roads = [
    "Alice's House-Bob's House",
    "Alice's House-Cabin",
    "Alice's House-Post Office",
    "Bob's House-Town Hall",
    "Daria's House-Ernie's House",
    "Daria's House-Town Hall",
    "Ernie's House-Grete's House",
    "Grete's House-Farm",
    "Grete's House-Shop",
    "Marketplace-Farm",
    "Marketplace-Post Office",
    "Marketplace-Shop",
    "Marketplace-Town Hall",
    "Shop-Town Hall",
];

function buildGraph(edges) {
    let graph = Object.create(null);

    function addEdge(from, to) {
        if(graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }

    for(let [from, to] of edges.map((r) => r.split("-"))) { // If a => b, ten b => a, which is a symmetric relation
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

/* -------------------------------- The task -------------------------------- */

/*
    Let’s condense the village’s state down to the minimal set of values that define it. There’s the robot’s current location and
    the collection of undelivered parcels, each of which has a current location and a destination address. That’s it.
*/

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if(!roadGraph[this.place].includes(destination)) {
            return this; // If destinations isn't available in that place, ten return the preview state
        } else {
            let parcels = this.parcels.map((p) => { // map takes care of moving the parcels
                    if(p.place != this.place) return p;
                    else return {place: destination, address: p.address};
                }).filter((p) => p.place != p.address); // filter takes care of making the delivery
            return new VillageState(destination, parcels);
        }
    }
}

// Test---
// let first = new VillageState(
//     "Post Office",
//     [{place: "Post Office", address: "Alice's House"}]
// );
// let next = first.move("Alice's House");

// console.log(next.place); // Alice's House
// console.log(next.parcels); // []
// console.log(first.place); // Post Office

/* ------------------------------- Simulation ------------------------------- */

function runRobot(state, robot, memory) {
    for(let turn = 0; ; turn++) { // We don't need test statement, because of the "break"
        if(state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) { // This robot doesn't need memory
    return {direction: randomPick(roadGraph[state.place])}; // roadGraph[state.place] = roads available
}

VillageState.random = function(parcelCount = 5) {
    let parcels = [];

    for(let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;

        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address); // To avoid creating parcels at their destinations
        parcels.push({place, address});
    }
    return new VillageState("Post Office", parcels); // We always start at the "Post Office"
};

// Test---
// runRobot(VillageState.random(), randomRobot);

/* ------------------------- The mail truck’s route ------------------------- */

const mailRoute = [ // Takes maximum 26 turns (twice the 13-step route)
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) { // This robot doesn't need state
    if(memory.length == 0) { // Initialization
        memory = mailRoute;
    }
    return {direction: memory[0], memory: memory.slice(1)};
}

// Test---
// runRobot(VillageState.random(), routeRobot, []);

/* ------------------------------- Pathfinding ------------------------------ */

function findRoute(graph, from, to) { // Always found a route, because all the places are connected
    let work = [{at: from, route: []}];

    for(let i = 0; i < work.length; i++) {
        let {at, route} = work[i];

        for(let place of graph[at]) {
            if(place == to) return route.concat(place); // Path found
            if(!work.some((w) => w.at == place)) { // Path not found
                work.push({at: place, route: route.concat(place)});
            }

        }
    }
}

// Test---
// console.log(findRoute(roadGraph, "Alice's House", "Shop"));

// The above function returns the first route it finds

function goalOrientedRobot({place, parcels}, route) { // route correspond to memory
    if(route.length == 0) {
        let parcel = parcels[0];

        if(parcel.place != place) { // Pick up selected parcel
            route = findRoute(roadGraph, place, parcel.place);
        } else { // Selected package picked up
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return {direction: route[0], memory: route.slice(1)};
}

// Test---
// runRobot(VillageState.random(), goalOrientedRobot, []);


module.exports = {
    VillageState,
    roadGraph,
    findRoute,
    routeRobot,
    goalOrientedRobot
}