import { task } from "./task";

export function calculateTotalCompletedTasks(tasks: task[]): number {
    return tasks.reduce((count, task) => {
        return task.completed ? count + 1 : count;
    }, 0);
}
