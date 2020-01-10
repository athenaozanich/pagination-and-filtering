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
let pageNum;

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
paginationLinks();
// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
srch.addEventListener("keyup", function(e) {
      let searchStr = e.target.value.toString().toLowerCase();

      for (let i = 0; i < studentList.length; i++) {
        let studentName = studentNames[i].innerHTML;

        if (studentName.indexOf(searchStr) > -1) {
          studentList[i].style.display = 'block';
          results.push(studentList[i]);
        }else{
          studentList[i].style.display = 'none';
        }

      }
      //paginationLinks(results);
});

/******************************************
  Satisfied
******************************************/
function showStudents(pgNum){
  if (!pgNum || pgNum == 0 ) {
    pgNum = 1;
    paginationBox[0].classList.add('active');
  }
  for (let i = 0; i < studentList.length; i++) {
      studentList[i].style.display = 'none';
      if (pgNum == 1) {
        for (let idx = 0; idx <= 9; idx++) {
          studentList[idx].style.display = 'block';          
        }
      }else{
        for (let index = 0; index <= 9 && i <= studentList.length; index++) {
          studentList[(pgNum-1)*10+index].style.display = 'block';
        }
      }
  }
}
/******************************************
  Satisfied
******************************************/
// Create and append the pagination links - Creating a function that can do this is a good approach
function paginationLinks(students){
  if (students === null || 0) {
    console.log("Sorry there are no results");
  }else {
    studentsPerPg = studentList.length/10;
    numOfPgs = Math.ceil(studentsPerPg);
  }
  for (let i = 1; i <= numOfPgs; i++) {
    let page = i;

    let pgItem =  document.createElement("LI");
    let pgLink =  document.createElement("A");
    let pageNum = document.createTextNode(page);

    pagination.append(pgItem);
    pgItem.append(pgLink);
    pgLink.append(pageNum);
  }
  paginationBox = document.querySelectorAll('.pagination a');
  showStudents();
}

    
/******************************************
  Satisfied ++
******************************************/
pagination.addEventListener("click", function (event) {
  if (event.target.tagName == "A") {
    pageNum = event.target.text;
    paginationBox.forEach(pgLink => pgLink.removeAttribute('class'));
    event.target.classList.add('active');
    showStudents(pageNum);
  }
  
});
  