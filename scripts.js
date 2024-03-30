const myLibrary = []

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    this.info = function () {
        const readStatus = this.hasRead ? 'read' : 'not read yet'
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
    }
}

function addBookToLibrary(title, author, pages, hasRead) {
    const newBook = new Book(title, author, pages, hasRead)
    myLibrary.push(newBook)
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', false)

addBookToLibrary('Rayuela', 'Julio Cortázar', '295', false)
addBookToLibrary('Crónica de una muerte anunciada', 'Gabriel García Márquez', '300', true)
addBookToLibrary('Livro do desassossego', 'Fernando Pessoa', 800, true)
addBookToLibrary('Nuestra parte de noche', 'Mariana Enriquez', 700, true)

function displaybooks() {
    let containerEl = document.querySelector('.container')

    for (const book of myLibrary) {
        let cardEl = document.createElement('div')
        cardEl.classList.add('book-card')
        let headerEl = document.createElement('div')
        let titleEl = document.createElement('h2')
        let authorEl = document.createElement('p')

        let footerEl = document.createElement('div')
        let pagesEl = document.createElement('p')
        let statusEl = document.createElement('p')
        titleEl.classList.add('book-title')
        authorEl.classList.add('book-author')
        titleEl.textContent = book.title
        authorEl.textContent = `by ${book.author}`
        headerEl.appendChild(titleEl)
        headerEl.appendChild(authorEl)

        footerEl.appendChild(pagesEl)
        footerEl.appendChild(statusEl)

        pagesEl.textContent = `${book.pages} pages`
        statusEl.textContent = `status: ${book.hasRead ? 'read' : 'not yet read'}`
        cardEl.appendChild(headerEl)
        cardEl.appendChild(footerEl)
        containerEl.appendChild(cardEl)
    }
}

displaybooks()