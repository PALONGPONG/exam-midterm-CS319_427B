console.log("-------------------");
export class task {
    title: string
    description: string
    completed: boolean = false
    static taskCount: number = 0

    constructor(title: string, description: string) {
        this.title = title
        this.description = description
        task.taskCount++
    }

    markCompleted() : void {
        this.completed = true
    }
    updateDescription(newDescription: string): void {
        this.description = newDescription
    }
    log(): void {
        console.log(`Title: ${this.title}, Description: ${this.description}, Completed: ${this.completed}`)
        console.log(`Total tasks: ${task.taskCount}`)
    }
}
let t1 = new task("Task 1", "This is task 1")
let t2 = new task("Task 2", "This is task 2")

t1.markCompleted()
t2.updateDescription("blablalbalblablalbalb")
t1.log()
t2.log()

console.log("-------------------");

class  PriorityTask extends task {
    priority: 'low' | 'medium' | 'high'
    constructor(title: string, priority: 'low' | 'medium' | 'high') {
        super(title, "Priority task");
        this.priority = priority;
    }
    markCompleted(): void {
        console.log(`Priority task ${this.title} completed.`)
    }
}
t2 = new PriorityTask("task 2", "high")

t2.markCompleted()
console.log("-------------------");

interface Teammember {
    name: string
    role: string
    task: task[]
}

function assignTask(member: Teammember, task: task): void {
    member.task.push(task);
}

const teamMember: Teammember = {
    name: "pongggg",
    role: "baboon",
    task: []
};

const teamMember2: Teammember = {
    name: "pongggg1",
    role: "baboon",
    task: []
};
assignTask(teamMember, t1);
assignTask(teamMember, t2);
console.log(teamMember);
assignTask(teamMember2, t2);
console.log(teamMember2);
console.log("-------------------");

class queue<T>{
    data: T[] = []
    enqueue(item: T): void {
        this.data.push(item)
    }
    dequeue(): T | undefined {
        return this.data.shift()
    }
}


const numberQueue = new queue<Teammember>()
console.log(numberQueue)
numberQueue.enqueue(teamMember)
console.log(numberQueue)
numberQueue.enqueue(teamMember2)
console.log(numberQueue)
numberQueue.dequeue()
console.log(numberQueue)
console.log("-------------------");

function createTaskUpdater(updateFn: (task: PriorityTask) => void): (task: PriorityTask) => void {
    return (task: PriorityTask) => {
        updateFn(task);
    };
}


const markAsUrgent = createTaskUpdater((task: PriorityTask) => {
    task.priority = 'high'; 
});

const t3 = new PriorityTask("t3", "low");
console.log(t3);
markAsUrgent(t3);
console.log(t3);

console.log("-------------------");

async function fetchTasks(): Promise<task[]> {
    try {
   
        const tasks: task[] = await new Promise((resolve, reject) => {

                const taskData = [
                    new task("Task 1", "task 1"),
                    new task("Task 2", "task 2"),
                    new task("Task 3", "task 3"),
                ];
                resolve(taskData);
                // reject("Error fetching tasks");
        });

        // console.log("tasks", tasks);
        return await tasks;

    } catch (error) {

        console.error("Error fetching tasks:", error);
        return []; 
    }
}
fetchTasks()

console.log("-------------------");

const titletask = ["task 1", "task 2", "task 3"]
const tasksarray: task[] = []
titletask.map((title) => {
    tasksarray.push(new task(title, "description"))
    return new task(title, "")
}
)

console.log(tasksarray.filter((task) => task.completed === false))
console.log(tasksarray.reduce((acc, task) => acc + (task.completed ? 1 : 0), 0))

console.log("-------------------");



function parseTaskData(jsonData: string): any {
    try {
   
        const Data = JSON.parse(jsonData);
        return Data;
    } catch (error) {

        return "Error: Invalid JSON data.";
    }
}

// ตัวอย่างการใช้งาน
const json = `{
    "title": "Task 1",
    "description": "This is task 1"
}`;

const nojson = `{
    title: "Task 2",
    description: "This is task 2"
}`;

console.log(parseTaskData(json)); 
console.log(parseTaskData(nojson));
