'use strict'

const addNewBook = document.getElementById('add-new-book')
const modal = document.querySelector('.modal-container')
const pageContainer = document.querySelector('.page-container')

const resetBooks = document.getElementById('clear-all-books')
const bookSection = document.querySelector('.books-display')
const booksCard = document.querySelectorAll('.book-card')

const bookDelete = document.querySelector('.book-delete')

const form = document.getElementById('form')

// Get the input field values
const bookTitleInput = document.getElementById('book_title')
const authorInput = document.getElementById('author')
const pagesInput = document.getElementById('pages')
const readInput = document.getElementById('read')

const bookStatus = document.getElementById('book_status')

class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }

  appendBook() {
    return (bookSection.innerHTML += `
      <div class="book-card book-card-${this.read}">
        <h2 class="book-title">${this.title}</h2>
        <h3 class="book-author">${this.author}</h3>
        <div>
          <p class="book-page"><i class="fa-solid fa-book-open"></i> ${this.pages} Pages</p>
        </div>
        <div class="btn-container">
          <button id="book-status" class="book-status-${this.read}">${this.read}</button>
          <button class="book-delete">❌ DELETE</button>
        </div>
      </div>
    `)
  }
}

// const book1 = new Book('Harry Potter', 'Eri', 124)
// const book2 = new Book('Lord of Rings', 'Marsild', 400)
// const book3 = new Book('Learn how to be Rich', 'Klajdi', 444)
// const book4 = new Book('Moby Dick', 'Herman Miller', 250)

// book1.appendBook()
// book2.appendBook()
// book3.appendBook()
// book4.appendBook()

///------------CLEAR BUTTON ---------///

resetBooks.addEventListener('click', function () {
  bookSection.innerHTML = '' // Clear the contents of bookSection
})

///------------MODAL ---------///

addNewBook.addEventListener('click', function () {
  pageContainer.style.filter = 'blur(10px)'
  modal.style.display = 'block'
})

document.addEventListener('click', function (event) {
  if (!modal.contains(event.target) && event.target !== addNewBook) {
    pageContainer.style.filter = ''
    modal.style.display = 'none'
  }
})

//-------get info from form----////

let myLibrary = []
const readBook = function () {
  if (readInput.checked) {
    return 'read'
  } else {
    return 'unread'
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault() // Prevent form submission

  // new book
  const book = new Book(bookTitleInput.value, authorInput.value, pagesInput.value, readBook()).appendBook()

  // put to library

  myLibrary.push(book)
  console.log(myLibrary)

  // Clear the form
  form.reset()

  //remove form
  pageContainer.style.filter = ''
  modal.style.display = 'none'
})
