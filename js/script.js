/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const studentsArr = document.querySelectorAll('.student-item');

let pageNum = 1;

//create and append pagination containers
const listContainer = document.querySelector('.page');
let pgnWrpr =  document.createElement("DIV");
listContainer.append(pgnWrpr);
pgnWrpr.classList.add("pagination");

let pagination =  document.createElement("UL");

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
(function () {
  //create search container and it's children
const pgHeader = document.querySelector('.page-header');
pgHeader.appendChild(document.createRange()
  .createContextualFragment(
    `<div class="student-search">
      <input placeholder="Search for students...">
      <button>Search</button>
    </div>`
  ));
  
  let srch = document.querySelector('.student-search');
  srch.addEventListener("keyup", function(e) {
    
    const studentNames = document.querySelectorAll('.student-details h3');
    let studentList = document.querySelector('.student-list');
    let searchStr = e.target.value.toString().toLowerCase();
    let results = [];

    for (let i = 0; i < studentsArr.length; i++) {
      studentsArr[i].style.display = 'none';
      let studentName = studentNames[i].innerHTML.toLowerCase();
      
      if (studentName.indexOf(searchStr) > -1) {
        results.push(studentsArr[i]);
      } 
    }

    if (results.length == 0) {
      studentList.appendChild(document.createRange()
     .createContextualFragment(
       `<li class="student-item cf">
        <div class="student-details">
            <h3>Sorry no results found!</h3>
        </div>
       </li>`
      ));
    }

    paginationLinks(results, 1);
    showStudents(results, 1);
  });
}());//Immediately run function
  

/******************************************
  Satisfied +++
******************************************/
function showStudents(students, currPage){
  
  for (let i = 0; i < students.length; i++) {
    students[i].style.display = 'none';
    if (i >= (currPage*10)-10 && i < currPage*10 ) {
      students[i].style.display = 'block';
    }

  }
}


/******************************************
  Satisfied +
******************************************/
// Create and append the pagination links - Creating a function that can do this is a good approach
function paginationLinks(students, currPage){
  console.log(students.length);
  while (pagination.firstChild) {
    pagination.removeChild(pagination.firstChild);
  }
  if (students) {
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
      
      if (i==1) {
        pgLink.classList.add('active');
      }

      pgLink.addEventListener("click", function (event) {
    
        if (event.target.tagName == "A") {
          pageNum = event.target.text;
          paginationlinks.forEach(pgLink => pgLink.removeAttribute('class'));
          event.target.classList.add('active');
          
          showStudents(students, pageNum);
        }
      });
    }
    const paginationlinks = document.querySelectorAll('.pagination a');
  showStudents(students, currPage);
}
paginationLinks(studentsArr, pageNum);