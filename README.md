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

