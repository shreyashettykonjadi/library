const myLibrary = [];

function Book(id, title, author, year, genre, description, imageUrl) {
  this.id = id
  this.title = title
  this.author = author
  this.year = year
  this.genre = genre
  this.description = description
  this.imageUrl = imageUrl
}

function addBookToLibrary(title, author, year, genre, description, imageUrl) {
  // take params, create a book then store it in the array
  const bookDisplay = document.querySelector('.bookDisplay')
  const book = document.createElement('div')
  book.classList.add('book')

  const id = crypto.randomUUID()
  book.setAttribute('data-id', id)
  book.innerHTML = `
    <div class="bookButtons">
      <button type="button" class="read">Read</button>
      <button type="button" class="delete">Delete</button>
    </div>
    <div class="bookInfo">
      <h1>${title}</h1>
      <p>${year}, <span>${author}</span></p>
      <p>${genre}</p>
      <p>${description}</p>
    </div>
    <div class="bookCover" style="background-image:url('${imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_3HWZu_RJuQ2T_LsnBWjEWvxOg4XXri2wFA&s"}')"></div>
  `
  bookDisplay.appendChild(book)

  myLibrary.push(new Book(id, title, author, year, genre, description, imageUrl))
  console.log(myLibrary)
}

const bookForm = document.querySelector('.bookForm')
const addBook = document.querySelector(".addBook")

addBook.addEventListener('click', function () {
  const modalDiv = document.querySelector('.modal.hidden')
  modalDiv.classList.remove('hidden')
})

const closeBtn = document.querySelector(".closeBtn")
closeBtn.addEventListener('click', function () {
  const modalDiv = document.querySelector('.modal')
  bookForm.reset()
  modalDiv.classList.add('hidden')
})

const submitBook = document.querySelector('.submitBook')
submitBook.addEventListener('click', function () {
  if (bookForm.checkValidity()) {
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const year = document.querySelector("#year").value
    const genre = document.querySelector("#genre").value
    const description = document.querySelector("#description").value
    const imageUrl = document.querySelector("#imageUrl").value

    addBookToLibrary(title, author, year, genre, description, imageUrl)

    const modalDiv = document.querySelector('.modal')
    modalDiv.classList.add('hidden')
    bookForm.reset()
  } else {
    bookForm.reportValidity()
  } 
})

let yearInput = document.querySelector("#year")
let currentYear = new Date().getFullYear()
yearInput.max = currentYear

const bookDisplay = document.querySelector('.bookDisplay')
bookDisplay.addEventListener('click', function (e) {
  if (e.target.classList.contains('read')) {
    const button = e.target;
    if (button.innerHTML === 'Read') {
      button.innerHTML = 'Not Read';
      button.style.backgroundColor = 'red';
    } else {
      button.innerHTML = 'Read';
      button.style.backgroundColor = 'green';
    }
  } else if (e.target.classList.contains('delete')) {
    const book = e.target.closest('.book');
    const id = book.getAttribute('data-id');

    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
      myLibrary.splice(index, 1);
    }
    book.remove();
  }
});

function loadDefaultBooks() {
  const defaultBooks = [
    {
      title: "Pride and Prejudice (The Peacock Edition)",
      author: "Jane Austen",
      year: "1894",
      genre: "Classic Romance",
      description: "Illustrated by Hugh Thomson. The peacock feathers across the cover look enchanting. Published in 1894.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/1prideandprejudice.jpg"
    },
    {
      title: "A Clockwork Orange",
      author: "Anthony Burgess",
      year: "1962",
      genre: "Dystopian Fiction",
      description: "Penguin UK’s first edition introduced the iconic cog-eyed droog cover, connecting clockwork and Alex.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/2A-Clockwork-Orange-Book-Cover-368x600-1.jpg"
    },
    {
      title: "The Grapes of Wrath",
      author: "John Steinbeck",
      year: "1939",
      genre: "Historical Fiction",
      description: "Depicts the Joad family leaving home in search of work, representing dignity, injustice, and community.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/3px-The_Grapes_of_Wrath_1939_1st_ed_cover.jpg"
    },
    {
      title: "American Psycho",
      author: "Bret Easton Ellis",
      year: "1991",
      genre: "Psychological Thriller",
      description: "Cover art by Marshall Arisman depicts Patrick Bateman without eyes, representing lack of conscience.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/4american-psycho-670x1024-1.jpg"
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      year: "1932",
      genre: "Dystopian Fiction",
      description: "Shows a peculiar globe representing the futuristic dystopian world of superficial happiness.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/5bravenewworld.jpg"
    },
    {
      title: "Animorphs – The Stranger",
      author: "K. A. Applegate",
      year: "1990s",
      genre: "Fantasy Science Fiction",
      description: "Cover created using Elastic Reality software, transforming children into animals for captivating art.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/6Animorphs.jpg"
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      year: "1953",
      genre: "Dystopian Fiction",
      description: "Cover illustrated by Joseph Mugnaini shows Guy Montag burning books, symbolizing fire and paper.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/7F451.jpg"
    },
    {
      title: "When You Are Engulfed in Flames",
      author: "David Sedaris",
      year: "2008",
      genre: "Humor Essays",
      description: "Skeleton smoking a cigarette, referencing the title inspired by a Japanese tourist advice card.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/8engulfedinflames.jpg"
    },
    {
      title: "Face of an Angel",
      author: "Dorothy Eden",
      year: "1960s",
      genre: "Gothic Mystery",
      description: "Cover shows a gothic lady with a scary backdrop, capturing the dark mansion secrets theme.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/9Faceofangel.jpg"
    },
    {
      title: "The Catcher in the Rye",
      author: "J. D. Salinger",
      year: "1951",
      genre: "Literary Fiction",
      description: "First edition cover by E. Michael Mitchell features a horse, symbolizing themes throughout the novel.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/10The-Catcher-in-the-Rye-First-Edition-cover-E.-Michael-Mitchell.jpg"
    },
    {
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      year: "14th century",
      genre: "Epic Poetry",
      description: "Cover visuals depict Dante’s travels through hell, purgatory, and paradise with alluring imagery.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/11The-Divine-Comedy-Book-Cover-400x600-1.jpg"
    },
    {
      title: "Psycho",
      author: "Robert Bloch",
      year: "1959",
      genre: "Psychological Horror",
      description: "Minimalistic typography with distressed texture and cut typography conveying the horror theme.",
      imageUrl: "https://www.papertrue.com/blog/wp-content/uploads/2023/11/12psycho.jpg"
    }
  ];

  defaultBooks.forEach(book => {
    addBookToLibrary(book.title, book.author, book.year, book.genre, book.description, book.imageUrl);
  });
}

loadDefaultBooks()