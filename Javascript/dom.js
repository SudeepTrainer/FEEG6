const head = document.head;
console.log(head);
const body = document.body;
console.log(body);

const paragraph = document.createElement("p");
console.log(paragraph);
paragraph.innerText = "Hello DOM!";
body.append(paragraph);

// const div = document.createElement("div");
// div.innerHTML = "<p>this is a div<p>"
// body.append(div);

const title = document.getElementById("header");
console.log(title);
title.style.backgroundColor = "orange";

const firstDiv = document.querySelector("div");
firstDiv.className = "feature-post";
console.log(firstDiv.innerHTML);

// const posts = document.querySelectorAll("div");
// console.log(posts);

const posts = document.querySelectorAll(".post");
//console.log(posts);
posts.forEach(
    (post) => {
        post.addEventListener("click",
            (event) => { console.log(`${event.target}`); }
        )
    }
)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(item => { console.log(item) });

