 const form = document.getElementById('studentForm');
    const studentList = document.getElementById('studentList');

    let students = JSON.parse(localStorage.getItem('students')) || [];
    console.log('Initial students:', students);

    displayStudents();

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      console.log('Form input:', { name, email, password });

      const duplicate = students.find(s => s.email === email || s.password === password);

      if (duplicate) {
        alert('Email or password is already taken!');
      } else {
        const newStudent = { name, email, password };
        students.push(newStudent);
        console.log('New students array:', students);

        localStorage.setItem('students', JSON.stringify(students));

        displayStudents();
        const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', function() {

  localStorage.removeItem('students');

  students = [];

  displayStudents();

  alert('All student data has been cleared!');
});

        form.reset();
      }
    });

    function displayStudents() {
      studentList.innerHTML = '';
      students.forEach(s => {
        const li = document.createElement('li');
        li.textContent = `Name: ${s.name}, Email: ${s.email}`;
        studentList.appendChild(li);
      });
      console.log('Displayed students:', students);
    }