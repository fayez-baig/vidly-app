import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import Filter from "./common/filter";
import { paginate } from "../utils/paginate";
import MovieTable from "./moviesTable";

import _ from "lodash";
import { Link } from "react-router-dom";
import Search from "./common/search";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genreList: [],
    searched: "",
    sortColoumn: {
      path: "title",
      order: "asc",
    },
    selectedGenre: false,
  };

  componentDidMount() {
    const genre = [{ _id: "", name: "All Genre" }, ...getGenres()];
    this.setState({ movies: getMovies(), genreList: genre });
    console.log("in movies");
  }

  handleDelete = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies: movies });

    deleteMovie(id);
  };

  handleLike(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  }

  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  handleSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColoumn) => {
    this.setState({ sortColoumn });
  };

  handleSearch = ({ currentTarget }) => {
    const searched = currentTarget.value;

    this.setState({ searched, selectedGenre: null, currentPage: 1 });
  };

  getPagedData = () => {
    const {
      movies: allMovies,
      currentPage,
      selectedGenre,
      sortColoumn,
      pageSize,
      searched,
    } = this.state;
    let filtered = allMovies;
    if (searched) {
      filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searched)
      );
    } else if (selectedGenre && selectedGenre._id) {
      filtered =
        selectedGenre && selectedGenre._id
          ? this.state.movies.filter(
              (m) => m.genre.name === this.state.selectedGenre.name
            )
          : allMovies;
    }

    const sorted = _.orderBy(filtered, [sortColoumn.path], [sortColoumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };
  render() {
    const { length: count } = this.state.movies;
    const { currentPage, sortColoumn, pageSize, searched } = this.state;
    if (count === 0) {
      return <p>NO DATA IS DATA BASE</p>;
    }

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <Filter
              values={this.state.genreList}
              onItemSelect={this.handleSelect.bind(this)}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col-9">
            <Link to="/movie-form/new/" className="btn btn-primary">
              Add Movie
            </Link>
            <p>The Total Record in database is: {totalCount}</p>
            <Search value={searched} onChange={this.handleSearch} />
            <MovieTable
              movies={movies}
              sortColoumn={sortColoumn}
              onDelete={this.handleDelete}
              onLike={this.handleLike.bind(this)}
              onSort={this.handleSort.bind(this)}
            />
            <Pagination
              itemCount={totalCount}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange.bind(this)}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
