  //lenth 0
  let student = [];
  //index empty
  function addStudent() {
    let input = prompt("Enter student name :");
    student.push(input);
    getStudents();
  }

  function getStudents() {
    console.log("--------------------");
    for (let i = 0; i <= student.length - 1; i++) {
      console.log("student" + (i + 1) + student[i]);
    }
    console.log("--------------------");
  }

  function removeStudent() {
    let isNotPresent = false;

    let removeStudent = prompt("Enter student name to remove :");

    for (let i = 0; i <= student.length - 1; i++) {
      let internalStudent = student[i];

      if (internalStudent == removeStudent) {
        student.splice(i, 1);
        console.log("Student remove");
        break;
      } else {
        isNotPresent = true;
      }
    }

    if (isNotPresent) {
      console.log("Not present student");
    }
  }
