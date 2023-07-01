'use strict'

const addNewBook = document.getElementById('add-new-book')
const modal = document.querySelector('.modal-container')
const pageContainer = document.querySelector('.page-container')

const resetBooks = document.getElementById('clear-all-books')
const bookSection = document.querySelector('.books-display')
const booksCard = document.querySelectorAll('.book-card')

const bookDelete = document.querySelector('.book-delete')

///------------CLEAR BUTTON ---------///

resetBooks.addEventListener('click', function () {
  booksCard.forEach(function (element) {
    element.parentNode.removeChild(element)
  })
})

// ///------------DELETE BOOK BUTTON ---------///

// Array.from(bookDelete).forEach(function (button) {
//   button.addEventListener('click', function () {
//     var bookCard = button.closest('.book-card')
//     if (bookCard) {
//       bookCard.parentNode.removeChild(bookCard)
//     }
//   })
// })

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

class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  appendBook() {
    return (bookSection.innerHTML += `
      <div class="book-card book-card-read">
        <h2 class="book-title">${this.title}</h2>
        <h3 class="book-author">${this.author}</h3>
        <div>
          <p class="book-page"><i class="fa-solid fa-book-open"></i> ${this.pages} Pages</p>
        </div>
        <div class="btn-container">
          <button class="book-status-read">COMPLETED</button>
          <button class="book-delete">❌ DELETE</button>
        </div>
      </div>
    `)
  }
}

const book1 = new Book('Harry Potter', 'Eri', 124)
const book2 = new Book('Lord of Rings', 'Marsild', 400)
const book3 = new Book('Learn how to be Rich', 'Klajdi', 444)
const book4 = new Book('Moby Dick', 'Herman Miller', 250)

book1.appendBook()
book2.appendBook()
book3.appendBook()
book4.appendBook()
