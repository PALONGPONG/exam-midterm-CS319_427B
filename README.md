```
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
```
สร้างทุกอย่างตามโจทย์ก่อนใช้ constructor ทำหน้าที่รับต่าตอนเรียกใช้ class นี้
สร้าง markcomplete โดยข้างในจะเรียก  complete เพื่อกำหนดค่าว่า true ส่วน updatedes ก็เรียก desc เพื่อเอาค้าที่รับมาใส่ไปแทน
ส่วนของ log มีไว้แค่เอาไว้ลอง cosole เรียกค่ามาดูว่าโค้ดใช้ได้มีค่าเข้าไปจริงหลังจากนั้นก็ลองเรียกทีละฟังก์ชั่น



#Bonus
ใช้ static ให้แค่มันเชื่่อมกับทุกคลาสที่เราเรียกไปสร้างตอนทีาสร้างก็เรียกค่ามาบวกเข้าไปแล้วก็เอาไปเซ็ตไว้ที่เดืมด้วยการเรียกมันเอง

```
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
    name: "pongggg",
    role: "baboon",
    task: []
};
assignTask(teamMember, t1);
assignTask(teamMember, t2);
console.log(teamMember);
assignTask(teamMember2, t2);
console.log(teamMember2);
```

สร้าง interfave เพื่อกำหนดค่าของ object ว่ามีอะไรเป็น type อะไร ต่อมาเป็น assightask รับ member ที่สร้างตอรเรียก interface และรับงงานที่จะเอาไป push เข้า task ของ member ที่รับเข้ามา

```
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
```

คลาสนี้จำทำหน้าที่เก็บทุกอย่างได้เลยแต่ต้องบอกมันก่อนว่าจะเก็บอะไรมันก็จำสร้าง array ตามประเภทที่บอกไว้แล้วหลังจากนั้นก็จะใช้ enqueq ส่งของที่มีประเภทแบบเดียวกันเข้าไปแต่ถ้าจะลบก็ใช้ dequeq แต่จะลบแค่ตัวที่เป็นตำแหน่ง 0

```

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
```
createTaskUpdater ใช้ gpt โดยตัวนี้จะทำการเป็นฟังชั่นที่มี param เป็น updatefn ที่ทำงานกับ prioritytask โดยที่ fn นี้จะทำงานกับ markasurgent อีกทีโดยที่จะรับมาว่าเป็น task ไหนแล้วจึงเข้าไประบุแทนค่า task priority ของตัวนั้นเแป็น "high"


```
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

        // คืนค่า array ของ Task
        // console.log("tasks", tasks);
        return tasks;

    } catch (error) {

        console.error("Error fetching tasks:", error);
        return []; 
    }
}
fetchTasks()
```
ใช้ gpt เป็นส่วนใหญ่แต่ปกติที่ใช้งานจะใช้ async ตอนกับ fn ที่มีค่าเข้ามาโดยในโค้ดนี้ใช้ try catch เพื้อเช็ค error โดยที่ถ้ามีค่าเข้ามาจะรีเทอนเป็นค่านนั้นแต่ถ้าเป็น error ก็จำเข้า catch return error

```
const titletask = ["task 1", "task 2", "task 3"]
const tasksarray: task[] = []
titletask.map((title) => {
    tasksarray.push(new task(title, "description"))
    return new task(title, "")
}
)

console.log(tasksarray.filter((task) => task.completed === false))
console.log(tasksarray.reduce((acc, task) => acc + (task.completed ? 1 : 0), 0))
```

สร้าง array ขื่อเพื่อเอามาใช้กับ map เพื่อสร้าง task แล้วค่อย push task เข้าไปใน taskarray ต่อมาจำ log โดยใช้ filter เพื่อกรองตามเงือใขนี้โดยที่กำหนดแ type ของค้่าก่อนและเรียกคค่าส้วน completed เช็คว่า false ถ้าค่าไหนก็จะแสดงต่อมาเป็น reduce ใส้เงือนใขเป็นประกาศ acc ไว้เก็บ และ task ไว้เหมือนเดิมแล้วก็เช็คตรงเงินใข +acc แล้วก็ log ค่า acc

```


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

```

เปลี่่ยนค่าไปเป็น json โดยใช้คำสัง Json.parse แล้วจึง return ออกมาเป็น json แตุ่ถ้า format ผิดแบบ nojson ที่ไม่มี "" ตรงตัวแปรก็จะแปลงไม่ได้พอไม่ได้โค้ด error พอโค้ด error ก็เลยจะถูกส่งไป catch เพื่อ return error ถ้าใช้ try catch โค้ดจะไม่หยุด

```
import { task } from "./task";

export function calculateTotalCompletedTasks(tasks: task[]): number {
    return tasks.reduce((count, task) => {
        return task.completed ? count + 1 : count;
    }, 0);
}
```

```

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
```

สร้างไฟล์แรกใช้นับจำนวน task ที่ completed == true หลังจากนั้น import untionนี้มาใช้ ใน index.ts แล้วใน ทั้งาองไฟต้อง import class task เข้ามาใช่ด้วยเพราะเราจะนับ task พอ import มาแล้วก็ใช้ได้เลยเหมือนอยู่ไฟลเดียวกัน