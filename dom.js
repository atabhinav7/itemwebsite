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

// var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // //items[1].textContent = 'Hello 2';
// // //items[1].style.fontweight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// // //items.style.backgroundColor = 'red';
// items[2].style.backgroundColor = 'green';
//  for ( i = 0; i < items.length ; i++){
//    items[i].style.fontWeight = 'bold';
//  }

//GETELEMENTSBYTAGNAME //
// var li  = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontweight = 'bold';
// li[1].style.backgroundColor = 'yellow';


//  for ( i = 0; i < li.length ; i++){
//    li[i].style.backgroundColor = '#f4f4f4';
//  }

//QUERYSELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';
// var input = document.querySelector('input ');
// input.value = ' Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND "

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

//  QUERYSELECTORALL //


// var titles = document.querySelectorAll('.title');
// console.log(titles);
//  titles[0].textContent = 'Hello';

//  var odd = document.querySelectorAll('li:nth-child(odd)');
//  for( var i =0;i < odd.length; i++){
//  odd[i].style.backgroundColor ='#00FF00';
//  }

// //  var even = document.querySelectorAll('li:nth-child(even)');
// //  for( var i =0;i < even.length; i++){
// //  even[i].style.backgroundColor ='#ccc';
// //  }

//  var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

///TRAVERSING THE DOM //

var itemList = document.querySelector('#items');
// parentNode //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// PARENTELEMENT //

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// PARENTELEMENT AND PARENTNODE ARE INTERCHANGEBALE AND SAME //

// CHILNODES //
// console.log(itemList.childNodes);

//children //
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // /FIRSTCHILD //
// console.log(itemList.firstChild);
// // FIRSTCHILD IS USELESS //


// //FIRSTELEMENTCHILD //

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// /lstchild //
//console.log(itemList.lastchild);
//LASTELEMENTCHILD //

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hello 4";

//nextsibling //
// console.log(itemList.nextSibling);

//NEXTELEMENTSIBLING // 

// console.log(itemList.nextElementSibling);

//previoussibling //
// console.log(itemList.previousSibling);
// //previouselemntsibling //
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'green'

// createElemnt //

//create a div //
var newDiv = document.createElement('div');
//add class //
newDiv.className = 'hello';
//add id//
newDiv.id = 'hello1';
//add attribute //
newDiv.setAttribute('title','Hello Div');
// create text node //
var newDivtext = document.createTextNode('HEllo ');

// add text to div //
newDiv.appendChild(newDivtext);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);


var firstListItem = document.querySelector('#items li:first-child');
var helloTextNode = document.createTextNode(' HEllo ');
firstListItem.parentNode.insertBefore(helloTextNode, firstListItem);

































