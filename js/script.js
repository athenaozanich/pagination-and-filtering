/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = document.querySelectorAll('.student-item');

//create search container and it's children
const pgHeader = document.querySelector('.page-header');
let srchContainer = document.createElement("DIV");
pgHeader.append(srchContainer);
srchContainer.classList.add("student-search");
let srch = document.createElement("INPUT");
let btn = document.createElement("BUTTON");
srch.setAttribute("placeholder", "Search for students...");
let btnText = document.createTextNode("Search");
btn.append(btnText);
srchContainer.append(srch);
srchContainer.append(btn);

//initialize needed variables
var paginationBox;
let results = [];
let pageNum = 1;

//create and append pagination containers
const listContainer = document.querySelector('.page');
let pgnWrpr =  document.createElement("DIV");
listContainer.append(pgnWrpr);
pgnWrpr.classList.add("pagination");

let pagination =  document.createElement("UL");


//function calls on load
showStudents(studentList, pageNum);
paginationLinks(studentList, pageNum);

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
srch.addEventListener("keyup", function(e) {
  const studentNames = document.querySelectorAll('.student-details h3');
  let searchStr = e.target.value.toString().toLowerCase();
  
  for (let i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';
    let studentName = studentNames[i].innerHTML.toLowerCase();
    
    if (studentName.indexOf(searchStr) > -1) {
      results.push(studentList[i]);
    }
  }
  paginationLinks(results, 1);
  showStudents(results, 1);
});


/******************************************
  Satisfied +++
******************************************/
function showStudents(students, currPage){
  
  for (let i = 0; i < students.length; i++) {
    
    if (i >= (currPage*10)-10 && i < currPage*10 ) {
      students[i].style.display = 'block';
    }else{
      students[i].style.display = 'none';
    }

  }
}


/******************************************
  Satisfied +
******************************************/
// Create and append the pagination links - Creating a function that can do this is a good approach
function paginationLinks(students, currPage){
  
  while (pagination.firstChild) {
    pagination.removeChild(pagination.firstChild);
  }
  if (students === null || 0) {
    console.log("Sorry there are no results");
  }else {
    studentsPerPg = students.length/10;
    numOfPgs = Math.ceil(studentsPerPg);
  }

  if (!pgnWrpr.firstChild) {
    pgnWrpr.append(pagination);
  }
    for (let i = 1; i <= numOfPgs; i++) {
        
      let pgItem =  document.createElement("LI");
      let pgLink =  document.createElement("A");
      let pageNum = document.createTextNode(i);
  
      pagination.append(pgItem);
      pgItem.append(pgLink);
      pgLink.append(pageNum);
    }
  
  paginationBox = document.querySelectorAll('.pagination a');

  
  pagination.addEventListener("click", function (event) {
    
    if (event.target.tagName == "A") {
      pageNum = event.target.text;
      paginationBox.forEach(pgLink => pgLink.removeAttribute('class'));
      event.target.classList.add('active');
      
      showStudents(students, pageNum);
      
      
    }
    
  });
  paginationBox[currPage-1].classList.add('active');
  showStudents(students, currPage);
}

    
/******************************************
  Unsatisfied 
******************************************/

  