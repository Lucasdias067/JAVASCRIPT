const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },
    {
        category: 'Inteligencia Emocional',
        books: [
            {
                title: 'Você é insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos de pessoas totalmente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }
]

const totalCategory = booksByCategory.length

console.log("Total de categorias:",totalCategory)

for (let category of booksByCategory) {
    console.log("Total de livros da categoria:",category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let author = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(author.indexOf(book.author == -1)){
                author.push(book.author)
            }
        }
    }
    console.log("Total de livros de autores:",author.length)
}

countAuthors()


function booksOfAuthor(author) {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books) {
            if(books.author === author){
                books.push(book.title);
            }
        }
    }
    console.log(`Livros do ${author}, ${books.join(', ')}`)
}
booksOfAuthor('')