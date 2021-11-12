const addMoviesToDom = (movies) => {

    const movieList = document.getElementById("movie-list");
        movieTitles = movies.map(movies => {
            const movieTitles = movies.Title;
            const moviePoster = movies.Poster;
            const movieId = movies.imdbID;

            const addPosterImg = document.createElement("img");
            const newLi = document.createElement("li");
            const addA = document.createElement("a");   
                
            movieList.appendChild(newLi);
            newLi.innerHTML = movieTitles;
            newLi.appendChild(addA);
            addA.appendChild(addPosterImg);
            addPosterImg.src = moviePoster;
            
            addA.href = "https://www.imdb.com/title/" + movieId;
 
        });
}

const getRadioButtons = document.getElementsByName("select-movie");
getRadioButtons.forEach((radiobtn) => {
    
    radiobtn.addEventListener('change', (event) => {

        const handleOnChangeEvent = () => {
            switch (event.target.getAttribute("id")) {
                case 'latest-movies':
                    filterLatestMovies();
                    break;
                case 'avenger-movies':
                    filterMovies("Avengers");
                    break;
                case 'xmen-movies': 
                    filterMovies("X-Men");
                    break;
                case 'princess-movies':
                    filterMovies("Princess");
                    break;
                case 'batman-movies':
                    filterMovies("Batman");
            }
        }
        handleOnChangeEvent()
    })
})

const removeMovies = () => {
    const parent = document.getElementById("main-list").getElementsByTagName("ul")[0];
    parent.innerHTML = "";
}

const filterMovies = (wordInMovieTitle) => {
    const filteredMovies = movies.filter((movie) => {
        return movie.Title.includes(wordInMovieTitle)
        
    })
    removeMovies();
    console.log(addMoviesToDom(filteredMovies))
}

const filterLatestMovies = () => {
    const filteredLatestMovies = movies.filter((movie) => {
        return movie.Year > 2014
    })
    removeMovies();
    console.log(addMoviesToDom(filteredLatestMovies))
}
addMoviesToDom(movies);