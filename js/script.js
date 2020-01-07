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
  let paginationBox;
  let page = 0;
  let results = [];
  let pageNum;

  //add elements to dom
  pgHeader.append(srchContainer);
  srchContainer.classList.add("student-search");
  srch.setAttribute("placeholder", srchText);
  btn.append(btnText);
  srchContainer.append(srch);
  srchContainer.append(btn);

  //create pgination containers
  let pageContainer =  document.createElement("DIV");
  let pagination =  document.createElement("UL");
  //initialize needed variables

  //pagination call on load
  paginationLinks(page);
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


  function showStudents(pgNum){

    if (!pgNum ) {
      pgNum = 1;
    }
    let studentsPerPg = 10;


    for (let i = 0; i < studentList.length; i++) {
      console.log(studentList.length);
      stdntCnt = 0;
      let pages = [];
      if (i <= 10) {
        
      }
      for (let idx = 0; idx <studentsPerPg; idx++) {
        // const element = array[idx];
        
      }
      if (i <= studentsPerPg-11 || i >= studentsPerPg-1) {
          studentList[i].style.display = 'none';
      }else{
        studentList[i].style.display = 'block';
        //paginationBox[pgNum-1].classList.add('active');
        console.log(paginationBox[pgNum-1]);
      }
    }

  }

  // Create and append the pagination links - Creating a function that can do this is a good approach
  function paginationLinks(students){
    if (students === null || 0) {
      console.log("Sorry there are no results");
    }else {
      studentsPerPg = studentList.length/10;
      numOfPgs = Math.ceil(studentsPerPg);
    }
    console.log(numOfPgs);
    
    listContainer.append(pageContainer);
    pageContainer.append(pagination);
    pageContainer.classList.add("pagination");
      for (let i = 0; i < numOfPgs; i++) {
          page++;

          let pgItem =  document.createElement("LI");
          let pgLink =  document.createElement("A");
          let pageNum = document.createTextNode(page);

          pagination.append(pgItem);
          pgItem.append(pgLink);
          pgLink.append(pageNum);

        }

    paginationBox = document.querySelectorAll('.pagination a');

    showStudents(pageNum);
    }
      // Add functionality to the pagination buttons so that they show and hide the correct items
      // Tip: If you created a function above to show/hide list items, it could be helpful here




  for (let i = 0; i < paginationBox.length; i++) {
    paginationBox[i].addEventListener("click", function (event) {
      if (!pageNum) {
        pageNum = 1;
      }else{
        pageNum = event.target.innerHTML;
      }
      paginationBox.forEach(pgLink => pgLink.removeAttribute('class'));
      event.target.classList.add('active');
    });
  }
