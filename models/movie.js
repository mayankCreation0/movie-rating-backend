const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
    "title": {
        "type": "string"
    },
    "releaseYear": {
        "type": "string"
    },
    "genres": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "totalCounting": {
        "type": "Number",
    },
    "duration": {
        "type": "string"
    },
    "releaseDate": {
        "type": "string",
        "format": "date"
    },
    "averageRating": {
        "type": "number"
    },
    "originalTitle": {
        "type": "string"
    },
    "storyline": {
        "type": "string"
    },
    "actors": {
        "type": "array",
        "items": {
            "type": "string"
        }
    },
    "imdbRating": {
        "type": "number"
    },
    "img": {
        "type": "string"
    },

    "required": [
        "title",
        "releaseYear",
        "genres",
        "totalCounting",
        "poster",
        "duration",
        "releaseDate",
        "actors",
        "imdbRating",
        "img"
    ]
})

const movieModel = mongoose.model('movie', movieSchema);
module.exports = movieModel;


[
    {
        "title": "Inception",
        "releaseYear": "2010",
        "genres": ["Action", "Sci-Fi", "Thriller"],
        "totalCounting": 30000000,
        "duration": "2h 28min",
        "releaseDate": "2010-07-16",
        "averageRating": 8.8,
        "originalTitle": "Inception",
        "storyline": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        "imdbRating": 8.8,
        "img": "https://c4.wallpaperflare.com/wallpaper/764/590/391/inception-leonardo-dicaprio-movie-posters-2400x3500-entertainment-movies-hd-art-wallpaper-preview.jpg"
    },

    {
        "title": "The Shawshank Redemption",
        "releaseYear": "1994",
        "genres": ["Drama"],
        "totalCounting": 25000000,
        "duration": "2h 22min",
        "releaseDate": "1994-10-14",
        "averageRating": 9.3,
        "originalTitle": "The Shawshank Redemption",
        "storyline": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "imdbRating": 9.3,
        "img": "https://c4.wallpaperflare.com/wallpaper/489/186/420/movies-the-shawshank-redemption-wallpaper-preview.jpg"
    },

    {
        "title": "The Dark Knight",
        "releaseYear": "2008",
        "genres": ["Action", "Crime", "Drama"],
        "totalCounting": 35000000,
        "duration": "2h 32min",
        "releaseDate": "2008-07-18",
        "averageRating": 9.0,
        "originalTitle": "The Dark Knight",
        "storyline": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "imdbRating": 9.0,
        "img": "https://c4.wallpaperflare.com/wallpaper/221/189/102/batman-batman-begins-movies-the-dark-knight-wallpaper-preview.jpg"
    },

    {
        "title": "Pulp Fiction",
        "releaseYear": "1994",
        "genres": ["Crime", "Drama"],
        "totalCounting": 20000000,
        "duration": "2h 34min",
        "releaseDate": "1994-10-14",
        "averageRating": 8.9,
        "originalTitle": "Pulp Fiction",
        "storyline": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
        "imdbRating": 8.9,
        "img": "https://c4.wallpaperflare.com/wallpaper/577/859/617/movies-pulp-fiction-uma-thurman-smokes-cigarettes-1920x1080-entertainment-movies-hd-art-wallpaper-preview.jpg"
    },

    {
        "title": "Fight Club",
        "releaseYear": "1999",
        "genres": ["Drama"],
        "totalCounting": 20000000,
        "duration": "2h 19min",
        "releaseDate": "1999-10-15",
        "averageRating": 8.8,
        "originalTitle": "Fight Club",
        "storyline": "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
        "actors": ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        "imdbRating": 8.8,
        "img": "https://c4.wallpaperflare.com/wallpaper/874/819/824/edward-norton-brad-pitt-men-actor-fight-club-hd-wallpaper-preview.jpg"
    },

    {
        "title": "Forrest Gump",
        "releaseYear": "1994",
        "genres": ["Drama", "Romance"],
        "totalCounting": 30000000,
        "duration": "2h 22min",
        "releaseDate": "1994-07-06",
        "averageRating": 8.8,
        "originalTitle": "Forrest Gump",
        "storyline": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
        "actors": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "imdbRating": 8.8,
        "img": "https://c4.wallpaperflare.com/wallpaper/539/710/449/movies-forrest-gump-wallpaper-preview.jpg"
    },

    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "releaseYear": "2001",
        "genres": ["Action", "Adventure", "Drama"],
        "totalCounting": 30000000,
        "duration": "2h 58min",
        "releaseDate": "2001-12-19",
        "averageRating": 8.8,
        "originalTitle": "The Lord of the Rings: The Fellowship of the Ring",
        "storyline": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        "actors": ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        "imdbRating": 8.8,
        "img": "https://c4.wallpaperflare.com/wallpaper/335/429/69/rivendell-the-lord-of-the-rings-fantasy-art-waterfall-artwork-hd-wallpaper-preview.jpg"
    },

    {
        "title": "The Matrix",
        "releaseYear": "1999",
        "genres": ["Action", "Sci-Fi"],
        "totalCounting": 20000000,
        "duration": "2h 16min",
        "releaseDate": "1999-03-31",
        "averageRating": 8.7,
        "originalTitle": "The Matrix",
        "storyline": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        "imdbRating": 8.7,
        "img": "https://c4.wallpaperflare.com/wallpaper/8/800/982/the-matrix-movies-neo-keanu-reeves-wallpaper-preview.jpg"
    },

    {
        "title": "The Godfather",
        "releaseYear": "1972",
        "genres": ["Crime", "Drama"],
        "totalCounting": 25000000,
        "duration": "2h 55min",
        "releaseDate": "1972-03-24",
        "averageRating": 9.2,
        "originalTitle": "The God",
        "storyline": "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
        "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
        "imdbRating": 9.2,
        "img": "https://c4.wallpaperflare.com/wallpaper/874/376/908/the-godfather-movies-vito-corleone-wallpaper-preview.jpg"
    },

    {
        "title": "The Dark Knight",
        "releaseYear": "2008",
        "genres": ["Action", "Crime", "Drama"],
        "totalCounting": 27000000,
        "duration": "2h 32min",
        "releaseDate": "2008-07-14",
        "averageRating": 9.0,
        "originalTitle": "The Dark Knight",
        "storyline": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "imdbRating": 9.0,
        "img": "https://c4.wallpaperflare.com/wallpaper/820/108/953/joker-batman-the-dark-knight-movies-wallpaper-preview.jpg"
    },

    {
        "title": "The Avengers",
        "releaseYear": "1994",
        "genres": ["Drama"],
        "totalCounting": 22000000,
        "duration": "2h 22min",
        "releaseDate": "1994-10-14",
        "averageRating": 9.3,
        "originalTitle": "The Shawshank Redemption",
        "storyline": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "imdbRating": 9.3,
        "img": "https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg"
    },

    {
        "title": "The Silence of the Lambs",
        "releaseYear": "1991",
        "genres": ["Crime", "Drama", "Thriller"],
        "totalCounting": 18000000,
        "duration": "1h 58min",
        "releaseDate": "1991-02-14",
        "averageRating": 8.6,
        "originalTitle": "The Silence of the Lambs",
        "storyline": "A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
        "actors": ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
        "imdbRating": 8.6,
        "img": "https://c4.wallpaperflare.com/wallpaper/457/492/882/fly-movie-halloween-jason-voorhees-werewolf-hd-wallpaper-preview.jpg"
    },

    {
        "title": "Black Panther",
        "releaseYear": "1998",
        "genres": ["Drama", "War"],
        "totalCounting": 16000000,
        "duration": "2h 49min",
        "releaseDate": "1998-07-24",
        "averageRating": 8.6,
        "originalTitle": "Saving Private Ryan",
        "storyline": "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
        "actors": ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
        "imdbRating": 8.6,
        "img": "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
    },

    {
        "title": "Forrest Gump",
        "releaseYear": "1994",
        "genres": ["Drama", "Romance"],
        "totalCounting": 19000000,
        "duration": "2h 22min",
        "releaseDate": "1994-07-06",
        "averageRating": 8.8,
        "originalTitle": "Forrest Gump",
        "storyline": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
        "actors": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
        "imdbRating": 8.8,
        "img": "https://wallpapers.com/images/high/forrest-gump-run-forrest-run-poster-t7fimpldrjxqk3ns.webp"
    },

    {
        "title": "The Airlift",
        "releaseYear": "1999",
        "genres": ["Action", "Sci-Fi"],
        "totalCounting": 25000000,
        "duration": "2h 16min",
        "releaseDate": "1999-03-31",
        "averageRating": 8.7,
        "originalTitle": "The Matrix",
        "storyline": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        "actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        "imdbRating": 8.7,
        "img": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg"
    },

    {
        "title": "Black Adam",
        "releaseYear": "1990",
        "genres": ["Crime", "Drama"],
        "totalCounting": 14000000,
        "duration": "2h 26min",
        "releaseDate": "1990-09-21",
        "averageRating": 8.7,
        "originalTitle": "Goodfellas",
        "storyline": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
        "actors": ["Robert De Niro", "Ray Liotta", "Joe Pesci"],
        "imdbRating": 8.7,
        "img": "https://images.thedirect.com/media/photos/posd1_1.jpg"
    },

    {
        "title": "The Lion King",
        "releaseYear": "1994",
        "genres": ["Animation", "Adventure", "Drama"],
        "totalCounting": 28000000,
        "duration": "1h 28min",
        "releaseDate": "1994-06-15",
        "averageRating": 8.5,
        "originalTitle": "The Lion King",
        "storyline": "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days.",
        "actors": ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        "imdbRating": 8.5,
        "img": "https://www.themoviedb.org/t/p/original/AqxziiwYoRH9yQLUxMVHJ6rSt2n.jpg"
    },

    {
        "title": "The Usual Suspects",
        "releaseYear": "1995",
        "genres": ["Crime", "Mystery", "Thriller"],
        "totalCounting": 9000000,
        "duration": "1h 46min",
        "releaseDate": "1995-09-15",
        "averageRating": 8.5,
        "originalTitle": "The Usual Suspects",
        "storyline": "A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.",
        "actors": ["Kevin Spacey", "Gabriel Byrne", "Chazz Palminteri"],
        "imdbRating": 8.5,
        "img": "https://assets.mubicdn.net/images/notebook/post_images/36485/images-w1400.jpg?1670783534"
    },

    {
        "title": "Terminator 2: Judgment Day",
        "releaseYear": "1991",
        "genres": ["Action", "Sci-Fi"],
        "totalCounting": 20000000,
        "duration": "2h 17min",
        "releaseDate": "1991-07-03",
        "averageRating": 8.5,
        "originalTitle": "Terminator 2: Judgment Day",
        "storyline": "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg.",
        "actors": ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"],
        "imdbRating": 8.5,
        "img": "https://cdn.shopify.com/s/files/1/1416/8662/products/terminator_2_1991_french_original_film_art_5000x.jpg?v=1551807965"
    },

    {
        "title": "Back to the Future",
        "releaseYear": "1985",
        "genres": ["Adventure", "Comedy", "Sci-Fi"],
        "totalCounting": 14000000,
        "duration": "1h 56min",
        "releaseDate": "1985-07-03",
        "averageRating": 8.5,
        "originalTitle": "Back to the Future",
        "storyline": "A young man is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence.",
        "actors": ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
        "imdbRating": 8.5,
        "img": "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg"
    }
]