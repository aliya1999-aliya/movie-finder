const API_KEY = "YOUR_API_KEY"; // get it free from omdbapi.com

function searchMovie() {
    const movieName = document.getElementById("movieName").value;
    const movieDiv = document.getElementById("movie");

    if (movieName === "") {
        movieDiv.innerHTML = "<p>Please enter a movie name</p>";
        return;
    }

    fetch(`https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "False") {
                movieDiv.innerHTML = "<p>Movie not found ❌</p>";
                return;
            }

            movieDiv.innerHTML = `
                <div class="movie-card">
                    <img src="${data.Poster}">
                    <h2>${data.Title}</h2>
                    <p><b>Year:</b> ${data.Year}</p>
                    <p><b>Genre:</b> ${data.Genre}</p>
                    <p><b>IMDB Rating:</b> ⭐ ${data.imdbRating}</p>
                    <p>${data.Plot}</p>
                </div>
            `;
        })
        .catch(() => {
            movieDiv.innerHTML = "<p>Error fetching data</p>";
        });
}
