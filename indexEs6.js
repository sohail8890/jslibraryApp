// book class

class Book {
  constructor(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
  }
}

// display class 

class Display {
  // add function starts here 
  add(newBook) {
    console.log("Adding to UI");
   let bookTable = document.getElementById('bookTable');
    let uiString = `<tr>
                        <td>${newBook.name}</td>
                        <td>${newBook.author}</td>
                        <td>${newBook.type}</td>
                    </tr>`;
    bookTable.innerHTML += uiString;
  }

  // clear function starts here 
  clear() {
    let bookForm = document.getElementById('bookForm');
    bookForm.reset();

  }

  // validate function starts here 
  validate(newBook) {
    if (newBook.name.length < 2 || newBook.author.length < 2) {
      return false;
    }
    else {
      return true;
    }
  }

  // show function starts here 
  show(type, givenMeassage) {
    let message = document.getElementById('msg');
    let boldText;
    if(type=='success'){
      boldText= "Success";
    }
    else{
      boldText ="Error!"
    }
    message.innerHTML = ` 
                            <div class="alert alert-${type} alert-dismissible fade show"       role="alert">
                            <strong>${boldText}! </strong> ${givenMeassage}
                          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                          </div>`
    setTimeout(function () {
      message.innerHTML = ''
    }, 2000);
  }

}


// Adding books 
let bookForm=document.getElementById('bookForm');
bookForm.addEventListener('submit', bookFormSubmit);
function bookFormSubmit(e){

  let name = document.getElementById('name').value;
  let author = document.getElementById('author').value;
  let type;
  let php = document.getElementById('php');
  let javascript = document.getElementById('javascript');
  let html = document.getElementById('html');

  if(php.checked){
    type= php.value;
  }
  else if(javascript.checked){
    type =javascript.value;
  }
  else if(html.checked){
    type= html.value;
  }

  let newBook= new Book(name,author,type);
  console.log(newBook);

  let display= new Display();
  if(display.validate(newBook)){
             display.add(newBook);
             display.clear();
             display.show('success', 'Your book has been successfully added');
  }
  else{
    display.show('danger', 'Sorry you cannot add this book');
  }
  e.preventDefault();
}

