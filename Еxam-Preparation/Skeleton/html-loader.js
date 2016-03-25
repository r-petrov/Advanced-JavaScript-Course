var imdb = imdb || {};

(function (scope) {
	function loadHtml(selector, data) {
		var container = document.querySelector(selector),
			moviesContainer = document.getElementById('movies'),
			detailsContainer = document.getElementById('details'),
			genresUl = loadGenres(data);

		container.appendChild(genresUl);

		genresUl.addEventListener('click', function (ev) {
			if (ev.target.tagName === 'LI') {
				var genreId,
					genre,
					moviesHtml;

				genreId = parseInt(ev.target.getAttribute('data-id'));
				genre = data.filter(function (genre) {
					return genre._id === genreId;
				})[0];

				moviesHtml = loadMovies(genre.getMovies());
				moviesContainer.innerHTML = moviesHtml.outerHTML;
				moviesContainer.setAttribute('data-genre-id', genreId);

				var movieNodes = Array.prototype.slice.call(moviesContainer.firstElementChild.childNodes);
				movieNodes.forEach(function(node) {
					node.addEventListener('click', function() {
						while (detailsContainer.firstChild) {
							detailsContainer.removeChild(detailsContainer.firstChild);
						}

						var id = this.getAttribute('data-id'),
							movie = genre.getMovies().filter(function(movie) {
							return movie._id == id;
						})[0],
							actors = movie.getActors(),
							reviews = movie.getReviews();

						var actorsFragment = document.createDocumentFragment(),
							actorsH3 = document.createElement('h3'),
							actorsUl = document.createElement('ul');

						actorsH3.innerHTML = 'Actors';

						actors.forEach(function(actor) {
							var actorLi = document.createElement('li'),
								actorH4 = document.createElement('h4'),
								actorP = document.createElement('p');

							actorH4.innerHTML = actor.name;
							actorP.innerHTML = '<strong>Bio: </strong>' + actor.bio + '</br>' + '<strong>Born: </strong>' + actor.born;

							actorLi.appendChild(actorH4);
							actorLi.appendChild(actorP);
							actorsUl.appendChild(actorLi);
						});

						actorsFragment.appendChild(actorsH3);
						actorsFragment.appendChild(actorsUl);

						var reviewsFragment = document.createDocumentFragment(),
							reviewH3 = document.createElement('h3'),
							reviewsUl = document.createElement('ul');

						reviewH3.innerHTML = 'Reviews';

						reviews.forEach(function(review) {
							var reviewLi = document.createElement('li'),
								reviewH4 = document.createElement('h4'),
								reviewP = document.createElement('p');

							reviewH4.innerHTML = review.author;
							reviewP.innerHTML = '<strong>Bio: </strong>' + review.content + '</br>' + '<strong>Born: </strong>' + review.date;

							var button = document.createElement('button');
							button.value = 'Delete';
							button.innerHTML = 'Delete Review';
							button.addEventListener('click', function() {
								movie.deleteReviewById(review._id);
								reviewsUl.removeChild(reviewLi);
							});

							reviewLi.appendChild(reviewH4);
							reviewLi.appendChild(reviewP);
							reviewLi.appendChild(button);
							reviewsUl.appendChild(reviewLi);
						});

						reviewsFragment.appendChild(reviewH3);
						reviewsFragment.appendChild(reviewsUl);

						detailsContainer.appendChild(actorsFragment);
						detailsContainer.appendChild(reviewsFragment);
					})
				})
			}
		});



		// Task 3 - Add event listener for delete button (delete movie button or delete review button)
	}

	function loadGenres(genres) {
		var genresUl = document.createElement('ul');
		genresUl.setAttribute('class', 'nav navbar-nav');
		genres.forEach(function (genre) {
			var liGenre = document.createElement('li');
			liGenre.innerHTML = genre.name;
			liGenre.setAttribute('data-id', genre._id);
			genresUl.appendChild(liGenre);
		});

		return genresUl;
	}

	function loadMovies(movies) {
		var moviesUl = document.createElement('ul');
		movies.forEach(function (movie) {
			var liMovie = document.createElement('li');
			liMovie.setAttribute('data-id', movie._id);

			liMovie.innerHTML = '<h3>' + movie.title + '</h3>';
			liMovie.innerHTML += '<div>Country: ' + movie.country + '</div>';
			liMovie.innerHTML += '<div>Time: ' + movie.length + '</div>';
			liMovie.innerHTML += '<div>Rating: ' + movie.rating + '</div>';
			liMovie.innerHTML += '<div>Actors: ' + movie._actors.length + '</div>';
			liMovie.innerHTML += '<div>Reviews: ' + movie._reviews.length + '</div>';
			
			moviesUl.appendChild(liMovie);
		});

		return moviesUl;
	}

	scope.loadHtml = loadHtml;
}(imdb));