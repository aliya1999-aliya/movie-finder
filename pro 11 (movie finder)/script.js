
const movies = [
    {
        title: "Bahubali",
        year: "2015",
        genre: "Action",
        rating: "8.0",
        plot: "A warrior learns about his royal heritage and fights for his kingdom.",
        poster: "https://m.media-amazon.com/images/I/81V+8d5pYVL._AC_SL1500_.jpg",
        imdb: "https://www.imdb.com/title/tt2631186/"
    },
    
    {
        title: "Anand",
        year: "2004",
        genre: "Drama",
        rating: "8.1",
        plot: "A feel-good romantic drama about friendship and love.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTY5MTI2MjQ2NV5BMl5BanBnXkFtZTgwNTY5MjI2MDE@._V1_.jpg",
        imdb: "https://www.imdb.com/title/tt0420332/"
    },
    {
        title: "Mr Perfect",
        year: "2011",
        genre: "Romance",
        rating: "7.0",
        plot: "A man who believes in perfection learns the value of relationships.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjA1NjkzNzM3Ml5BMl5BanBnXkFtZTgwOTUzMjg2MDE@._V1_.jpg",
        imdb: "https://www.imdb.com/title/tt1816441/"
    },
    {
        title: "Salaar",
        year: "2023",
        genre: "Action",
        rating: "7.5",
        plot: "Two friends become enemies in a violent world.",
        poster: "https://m.media-amazon.com/images/M/MV5BNDY1ZjY5ZDUtZmYzZi00OTI1LWJhZTYtNTE0M2FjNTYxMjY2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        imdb: "https://www.imdb.com/title/tt13927994/"
    },
    {
        title: "Mirchi",
        year: "2013",
        genre: "Action",
        rating: "7.8",
        plot: "A man tries to unite two rival families through love.",
        poster: "https://m.media-amazon.com/images/M/MV5BNmQ5ODc1NmUtN2FjMi00YzNlLTk0OTctNmJjYTIyYzBiMDE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg",
        imdb: "https://www.imdb.com/title/tt2550986/"
    },
    {
        title: "Kalki",
        year: "2024",
        genre: "Sci-Fi",
        rating: "8.5",
        plot: "A futuristic warrior destined to save humanity.",
        poster: "https://m.media-amazon.com/images/M/MV5BNjZiM2YxZmQtODFkZS00ZDE3LWJlZjAtYzU2NmZkN2Y3MDA3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        imdb: "https://www.imdb.com/title/tt12735488/"
    },
    {
      
    title: "KANCHANA",
    year: "2011",
    genre: "Horror / Comedy / Action",
    rating: "6.7",
    plot: "A cowardly man gets possessed by the spirit of a brave fighter and must confront evil forces.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjEzOTgzNjM3NV5BMl5BanBnXkFtZTcwMTkzODk5Nw@@._V1_.jpg",
    imdb: "https://www.imdb.com/title/tt2017036/"

    },
    
    {
        title: "Hi Nanna",
        year: "2023",
        genre: "Romance",
        rating: "8.2",
        plot: "A father and daughter journey through love and memories.",
        poster: "https://m.media-amazon.com/images/M/MV5BMDY4NTA0NjUtODc1My00ZTM3LWJmYjctNGZmNzlmNzQyNDMxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        imdb: "https://www.imdb.com/title/tt29268110/"
    }
];

let currentMovies = [...movies];

document.getElementById("movieInput")
    .addEventListener("keyup", searchMovie);

function displayMovies(list) {
    const resultDiv = document.getElementById("movieResult");
    resultDiv.innerHTML = "";

    list.forEach(movie => {

        let ratingClass = "red";
        if (movie.rating >= 8) ratingClass = "green";
        else if (movie.rating >= 7) ratingClass = "orange";

        const card = document.createElement("div");
        card.className = "movie-card";

        card.innerHTML = `
            <h2>${movie.title}</h2>
            <div class="rating ${ratingClass}">
                ⭐ ${movie.rating}
            </div>
            <p><b>Year:</b> ${movie.year}</p>
            <p><b>Genre:</b> ${movie.genre}</p>
            <p>${movie.plot}</p>

            <div class="button-group">
                <a href="https://www.youtube.com/results?search_query=${movie.title}+trailer" target="_blank">
                    <button class="trailer-btn">Watch Trailer 🎥</button>
                </a>

                <a href="${movie.imdb}" target="_blank">
                    <button class="imdb-btn">View on IMDb ⭐</button>
                </a>
            </div>
        `;

        resultDiv.appendChild(card);
    });
}

function searchMovie() {
    const input = document.getElementById("movieInput").value.trim().toLowerCase();

    currentMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(input)
    );

    displayMovies(currentMovies);
}

function filterMovies() {
    const genre = document.getElementById("genreFilter").value;

    if (genre === "all") {
        displayMovies(currentMovies);
        return;
    }

    displayMovies(currentMovies.filter(movie => movie.genre === genre));
}

function sortByRating() {
    currentMovies.sort((a, b) => b.rating - a.rating);
    displayMovies(currentMovies);
}

function showAll() {
    document.getElementById("movieInput").value = "";
    currentMovies = [...movies];
    displayMovies(currentMovies);
}

displayMovies(movies);