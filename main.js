// task 1
let string1 = document.getElementById("string-3");
console.log(string1);

let string2 = document.getElementById("string-5");
console.log(string2);

let string3 = document.getElementById("string-2");
console.log(string3);

let string4 = document.getElementById("string-6");
console.log(string4);

let string5 = document.getElementById("string-4");
console.log(string5);

let string6 = document.getElementById("string-1");
console.log(string6);


// task 2

let color = () => {
    let elements = document.querySelectorAll('.element')
    for (i = 0; i < elements.length; i++){
        if (i < 3) {
            elements[i].style.color = "red"
        }else {
            elements[i].style.color = "green"
        }
    }
};
color();

// task 3

 const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
 let todolist = document.getElementById("todo-list");
 for (i = 0; i < tasks.length; i++) {
     let li = document.createElement("li");
     li.innerText = tasks[i];
     li.className = "task";
     todolist.append(li);
 }


 // task 4

document.querySelectorAll("p").forEach((addHr) => {
     addHr.insertAdjacentHTML("afterend", '<hr/>')
});