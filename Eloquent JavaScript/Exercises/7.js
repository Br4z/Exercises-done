const {VillageState, roadGraph, findRoute, routeRobot, goalOrientedRobot} = require("../Resources/7");
/* ---------------------------- Measuring a robot --------------------------- */

/*
    Write a function compareRobots that takes two robots (and their starting memory). It should generate 100 tasks and let each of the robots
    solve each of these tasks. When done, it should output the average number of steps each robot took per task.
*/

function compareRobots(robot1, memory1, robot2, memory2) {

    function countSteps(state, robot, memory) {
        for(let turn = 0; ; turn++) {
            if(state.parcels.length == 0) return turn

            let action = robot(state, memory);
            state = state.move(action.direction);
            memory = action.memory;
        }
    }

    let total1 = 0, total2 = 0;

    for(let i = 0; i < 100; i++) {
        let initialState = VillageState.random();

        total1 += countSteps(initialState, robot1, memory1);
        total2 += countSteps(initialState, robot2, memory2);
    }
    console.log(`Robot 1 needed ${total1 / 100} steps per task`)
    console.log(`Robot 2 needed ${total2 / 100} steps per task`)
}

// Test---
// compareRobots(routeRobot, [], goalOrientedRobot, []);

/* ---------------------------- Robot efficiency ---------------------------- */

// Write a robot that finishes the delivery task faster than goalOrientedRobot

function smartRobot({place, parcels}, route) {
    let routes = parcels.map(parcel => {
        if(parcel.place != place) {
            return {route: findRoute(roadGraph, place, parcel.place),
                    pickUp: true};
        } else {
            return {route: findRoute(roadGraph, place, parcel.address),
                    pickUp: false};
        }
    });

    function score({route, pickUp}) { // Scoring possible routes
        return (pickUp ? 0.5 : 0) - route.length;
    }

    route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route; // Selecting the best

    return {direction: route[0], memory: route.slice(1)};
}

// Test---
// compareRobots(smartRobot, [], goalOrientedRobot, []);

/* ---------------------------- Persistent group ---------------------------- */

/*
    Write a new class PGroup, similar to the Group class from Chapter 6, which stores a set of values. Like Group, it has add, delete, and
    has methods.

    Its add method, however, should return a new PGroup instance with the given member added and leave the old one unchanged. Similarly,
    delete creates a new instance without a given member.
*/


class PGroup {
    constructor(members) {
        this.members = members;
    }

    add(value) {
        if(this.has(value)) return this;
        else return new PGroup(this.members.concat(value));
    }

    delete(value) {
        if(this.has(value)) {
            let newMembers = this.members.filter(e => e != value);
            return new PGroup(newMembers);
        } else  return this;
    }

    has(value) {
        return this.members.includes(value);
    }

    static empty = new PGroup([]);
}

// Test---
// let a = PGroup.empty.add("a");
// let ab = a.add("b");
// let b = ab.delete("a");

// console.log(b.has("b")); // true
// console.log(a.has("b")); // false
// console.log(b.has("a")); // false