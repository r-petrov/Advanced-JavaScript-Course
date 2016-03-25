var imdb = imdb || {};

(function(scope) {
    var id = 1;
    function Genre(name) {
        this.name = name;
        this._movies = [];
        this._id = id++;
    }

    Genre.prototype.addMovie = function(movie) {
        this._movies.push(movie);
    };

    Genre.prototype.deleteMovie = function(movie) {
        var index = this._movies.indexOf(movie);

        this._movies.splice(index, 1);
    };

    Genre.prototype.deleteMovieById = function(id) {
        this._movies = this._movies.filter(function(movie) {
            return movie._id !== id;
        })
    };

    Genre.prototype.getMovies = function() {
        return this._movies;
    };

    scope.getGenre = function(name) {
        return new Genre(name);
    }
})(imdb);