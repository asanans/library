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
addBookToLibrary('Livro do desassossego', 'Fernando Pessoa', 800, false)
addBookToLibrary('Nuestra parte de noche', 'Mariana Enriquez', 700, true)

function displaybooks() {
    let containerEl = document.querySelector('.container')
    containerEl.textContent = null
    for (const [index, book] of myLibrary.entries()) {
        let cardEl = document.createElement('div')
        cardEl.classList.add('book-card')
        let headerEl = document.createElement('div')
        let titleEl = document.createElement('h2')
        let authorEl = document.createElement('p')

        let footerEl = document.createElement('div')
        let pagesEl = document.createElement('p')
        let statusEl = document.createElement('p')

        let deleteIcon = document.createElement('i')
        deleteIcon.classList.add('fa-regular', 'fa-trash-can', 'delete')
        // deleteIcon.setAttribute('value', index)
        deleteIcon.addEventListener('click', () => {
            console.log(index)
            // console.log(event.target.getAttribute('value'))
            myLibrary.splice(index, 1)
            displaybooks()
        })

        const toggleRead = document.createElement('i')
        toggleRead.className = book.hasRead ? "fa-regular fa-square-check" : "fa-regular fa-square"
        toggleRead.addEventListener('click', () => {
            book.hasRead = !book.hasRead
            displaybooks()
        })


        titleEl.classList.add('book-title')
        authorEl.classList.add('book-author')
        titleEl.textContent = book.title
        authorEl.textContent = `by ${book.author}`
        headerEl.appendChild(titleEl)
        headerEl.appendChild(authorEl)

        footerEl.appendChild(pagesEl)
        footerEl.appendChild(statusEl)
        footerEl.appendChild(toggleRead)

        pagesEl.textContent = `${book.pages} pages`
        statusEl.textContent = `status: ${book.hasRead ? 'read' : 'not yet read'}`
        
        cardEl.appendChild(deleteIcon)
        cardEl.appendChild(headerEl)
        cardEl.appendChild(footerEl)
    

        // let deleteBtn = document.createElement('button')
        // deleteBtn.classList.add("delete")
        // deleteBtn.innerText = "delete"

        // cardEl.appendChild(deleteBtn)

        // const hideEl = document.createElement('div')
        // hideEl.classList.add('hide')
        // cardEl.appendChild(hideEl)

        containerEl.appendChild(cardEl)


    }
}

displaybooks()

const showModal = document.querySelector('#show-modal')
const modal = document.querySelector('.modal')

showModal.addEventListener('click', () => {
    modal.showModal()
})

const addBookBtn = document.querySelector('#add-book')

addBookBtn.addEventListener('click', () => {
    event.preventDefault()
    console.log(title.value + author.value + pages.value)

    const selected = document.querySelector('input[name=readyet]:checked')
    console.log(selected.value === "true" ? true : false)
    addBookToLibrary(title.value, author.value, pages.value, (selected.value === "true" ? true : false))
    document.querySelector('#new-book-form').reset()
    displaybooks()
    modal.close()
})