
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("Form submitted!"); 
  
    const title = document.getElementById('title').value;
    const amount = document.getElementById('amount').value;
    const date = document.getElementById('date').value;
  
    console.log({ title, amount, date }); 
  
    // Rest of the code...
  });
  
