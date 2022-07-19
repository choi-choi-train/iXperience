class Task {
    constructor(content, id) {
        this.content = content;
        this.completed = '...'
        this.taskId = id
    }
    
}

class Page {
    constructor() {
        this.form = document.getElementById('form');
        this.addbtn = document.getElementById('addbtn');
        this.tableBody = document.getElementById('tbody');
        this.taskCounter = 0;

        this.tasks = [];
    }

    bindEventListeners() {
        this.addbtn.addEventListener("keyup", function(event) {
            if (event.code === "Enter") {
                this.addTask(event);
            }
        });
        this.addbtn.addEventListener('click', (e) => this.addTask(e));
        for (const task in this.tasks) {
            task.remvbtn.addEventListener('click', this.myFunction);
            task.compbtn.addEventListener('click', this.myFunction);
        }
    }

    addTask(event) {
        event.preventDefault();
        this.taskCounter++;
        const newtask = new Task(this.form.value, this.taskCounter);
        this.tasks.push(newtask);
        this.syncTable()
        this.form.value = '';
    }

    syncTable() {
        this.tableBody.innerHTML='';
        for (const task of this.tasks) {
            // CREATE ROW
            const row = document.createElement('tr');
            // CREATE CONTENT CELL
            const contentcell = document.createElement('td');
                contentcell.innerHTML = task.content;
            // CREATE COMPLETED CELL
            const completedcell = document.createElement('td');
                completedcell.innerHTML = task.completed;
            // CREATE ACTIONS CELL
            const actionscell = document.createElement('td');
                const remvbtn = document.createElement('button');
                    actionscell.append(remvbtn);
                    remvbtn.textContent = "𝖷";
                    remvbtn.className = 'right side btn';
                    remvbtn.style.cssText = 'width: 50%;';
                    remvbtn.addEventListener('click', (e) => this.removeTask(task));
                const compbtn = document.createElement('button');
                    actionscell.append(compbtn);
                    compbtn.textContent = "✓";
                    compbtn.className = 'left side btn';
                    compbtn.style.cssText = 'border: solid 1px rgb(209, 209, 209); width: 50%;';
                    compbtn.addEventListener('click', (e) => this.completeTask(task));
                    // APPEND ALL CELLS TO ROW
            row.append(contentcell);
            row.append(completedcell);
            row.append(actionscell);
            // COMPLETED ROWS
            if (task.completed == "COMPLETE") {
                row.className = 'table-success'
            }
            // APPEND ROW TO TBODY
            this.tableBody.append(row);
        }
    }

    removeTask(task) {
        this.tasks = this.tasks.filter((t) => {
            return t.taskId != task.taskId;
        });
        this.syncTable();
    }
    
    completeTask(task) {
        task.completed = "COMPLETE";
        this.syncTable();
    }
}

const ui = new Page();
ui.bindEventListeners();