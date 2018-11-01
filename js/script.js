/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
let studentList = document.querySelectorAll('.student-item');
let page = 0;
let listContainer = document.querySelector('.page');
let pagination =  document.createElement("UL");
let pgContainer = document.querySelectorAll('.pagination li');

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

function showStudents(pgNum){

  let studentsPerPg = pgNum*10;
  for (var i = 0; i < studentList.length; i++) {
    studentList[i].style.display = 'none';

    if (i <= studentsPerPg) {
      console.log(studentsPerPg);
    }
  }
}

// Create and append the pagination links - Creating a function that can do this is a good approach
function paginationLinks(){
  let NumOfStudents = 0;

  listContainer.append(pagination);
  pagination.classList.add("pagination");


  if (studentList.length <= 0) {
    console.log("Sorry there are no results");
  }

  for (var i = 0; i < studentList.length; i++) {
    if (i >= NumOfStudents) {
      NumOfStudents = NumOfStudents + 10;
      page++;
      let pgItem =  document.createElement("LI");
      pagination.append(pgItem);
      let pgLink =  document.createElement("A");
      pgItem.append(pgLink);
      let pageNum = document.createTextNode(page);
      pgLink.append(pageNum);

    }
  }

}
showStudents();
paginationLinks();


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
for (var i = 0; i < pgContainer.length; i++) {
  pgContainer[i].addEventListener("click", function (event) {

    console.log(event.target);
  });
}
