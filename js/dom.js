const body = document.body;
body.style.margin = "0px";

/* const student = {
    name: 'kissmot Ali',
    age: 16,
    height: 60
} */

// console.log(document.body);
// const blogTitles = ['h3', 'h3']

/* 
const blogTitles = document.getElementsByTagName('h3');
for (const h3 of blogTitles) {
    console.log(h3.innerText);
}
*/


/* const blogDetails = document.getElementsByTagName('p');
for (const p of blogDetails) {
    console.log(p);
}
 */

// explore getElementById


const secondTitle = document.getElementById('second-title');
secondTitle.style.textAlign = 'center';
const third = document.getElementById('third-title');
third.innerText = 'Title updated by JS';
third.style.backgroundColor = 'salmon';
third.style.padding = '100px';
third.style.borderRadius = '200px ';
third.style.margin = '0px';



// create and add element by using JS
// create the element

/* const li = document.createElement('li');
li.innerText = 'Blog-5';
 */


// where to 
// const ul = document.getElementById('blog-list');

// append new element
// ul.appendChild(li);

// add article
// const article = document.createElement('article');
// article.classList.add('blog');
// const h3 = document.createElement('h3');
// h3.innerText = 'My Awesome Blog-5';
// const p = document.createElement('p');
// p.innerText = 'Vitae a error culpa quas quos tempora. Ipsa iusto, nostrum inventore cupiditate molestiae dolorum!';
// article.appendChild(h3);
// article.appendChild(p);
/* 
article.innerHTML = `
    <h3>My Awesome Blog-5</h3>
    <p>Vitae a error culpa quas quos tempora. Ipsa iusto, nostrum inventore cupiditate molestiae dolorum!</p>`;
 */
// parent of article
/* const blogSection = document.getElementById('blogs');
blogSection.appendChild(article);
 */

// explore getElementsByClassName

/* const blogs = document.getElementsByClassName('blog');
for (const blog of blogs) {
    blog.style.border = '5px solid orange';
    blog.style.borderRadius = '10px';
    blog.style.margin = '5px';
    blog.style.padding = '5px';
} */

const blogs = document.querySelectorAll(".blog");
for (const blog of blogs) {
    blog.style.border = "10px solid blue";
    blog.style.borderRadius = "100px";
}


/* for (const blog of blogs) {
    blog.style.border = '5px solid orange';
    blog.style.borderRadius = '10px';
    blog.style.margin = '5px';
    blog.style.padding = '5px';
} */