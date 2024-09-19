"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = addTask;
function addTask(tasks, name, description) {
    var newTask = {
        name: name,
        description: description
    };
    return tasks.concat([newTask]);
}
