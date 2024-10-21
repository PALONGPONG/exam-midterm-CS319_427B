
import { task } from './task';
import { calculateTotalCompletedTasks } from './taskUtils';

const tasks = [
    new task("Task 1", "This is task 1"),
    new task("Task 2", "This is task 2"),
    new task("Task 3", "This is task 3")
];


tasks[0].markCompleted();
const completedTaskCount = calculateTotalCompletedTasks(tasks);
console.log("Total completed tasks:", completedTaskCount); 

tasks[2].markCompleted();
const completedTaskCount2 = calculateTotalCompletedTasks(tasks);
console.log("Total completed tasks:", completedTaskCount2); 
