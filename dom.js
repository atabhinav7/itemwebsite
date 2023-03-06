// document
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(doxument.all[10]);

// console.log(document.forms);
// console.log(document.links);
//console.log(document.images);

//GETELEMENTBYID //

// //console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.content = 'hello';
// headerTitle.innertext = 'Goodbye';
// console.log(headertitle.innerText);

//headerTitle.innerHTML = '<h3>Hello</h3>';

// css

//header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //

var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// //items[1].textContent = 'Hello 2';
// //items[1].style.fontweight = 'bold';
items[1].style.backgroundColor = 'yellow';
// //items.style.backgroundColor = 'red';
items[2].style.backgroundColor = 'green';
 for ( i = 0; i < items.length ; i++){
   items[i].style.fontWeight = 'bold';
 }

