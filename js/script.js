/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = document.querySelectorAll('.student-item');
const studentNames = document.querySelectorAll('.student-details h3');
const pgHeader = document.querySelector('.page-header');
const listContainer = document.querySelector('.page');

//create search container and it's children
let srchContainer =  document.createElement("DIV");
let srch =  document.createElement("INPUT");
let srchText = "Search for students...";
let btn =  document.createElement("BUTTON");
let btnText =  document.createTextNode("Search");

//create and append pagination containers
let pageContainer =  document.createElement("DIV");
let pagination =  document.createElement("UL");

//initialize needed variables
var paginationBox;
let results = [];
let pageNum = 1;

//add elements to dom
pgHeader.append(srchContainer);
srchContainer.classList.add("student-search");
srch.setAttribute("placeholder", srchText);
btn.append(btnText);
srchContainer.append(srch);
srchContainer.append(btn);
listContainer.append(pageContainer);
pageContainer.append(pagination);
pageContainer.classList.add("pagination");

//pagination call on load
showStudents(studentList, pageNum);
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
srch.addEventListener("keyup", function(e) {
  let searchStr = e.target.value.toString().toLowerCase();

  for (let i = 0; i < studentList.length; i++) {
    let studentName = studentNames[i].innerHTML;

    if (studentName.indexOf(searchStr) > -1) {
      results.push(studentList[i]);
    }

  }
  showStudents(results, 1);
  results.length =0;
});

/******************************************
  Satisfied +
******************************************/
function showStudents(students, pgNum){
  
  
  for (let i = 0; i < studentList.length; i++) {
      studentList[i].style.display = 'none';
  }

  for (let index = 0; index <= 9; index++) {
    if (students[(pgNum-1)*10+index]) {
      students[(pgNum-1)*10+index].style.display = 'block';
    }
  }
  paginationLinks(students, pgNum);
}
/******************************************
  Satisfied +
******************************************/
// Create and append the pagination links - Creating a function that can do this is a good approach
function paginationLinks(students, currPage){
  
  if (students === null || 0) {
    console.log("Sorry there are no results");
  }else {
    studentsPerPg = students.length/10;
    numOfPgs = Math.ceil(studentsPerPg);
    
    while (pagination.firstChild) {
      pagination.removeChild(pagination.firstChild);
    }
    
  }
  
  for (let idx = 1; idx <= numOfPgs; idx++) {
    let page = idx;

    let pgItem =  document.createElement("LI");
    let pgLink =  document.createElement("A");
    let pageNum = document.createTextNode(page);

    pagination.append(pgItem);
    pgItem.append(pgLink);
    pgLink.append(pageNum);
  }
  paginationBox = document.querySelectorAll('.pagination a');
  paginationBox[currPage-1].classList.add('active');
}

    
/******************************************
  Satisfied ++
******************************************/
pagination.addEventListener("click", function (event) {
  if (event.target.tagName == "A") {
    pageNum = event.target.text;
    paginationBox.forEach(pgLink => pgLink.removeAttribute('class'));
    event.target.classList.add('active');
    if (results.length == 0) {
      showStudents(studentList, pageNum);
    }else{
      showStudents(results, pageNum);
    } 
    
  }
  
});
  