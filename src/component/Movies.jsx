import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/movieService";
import { getGenres } from "../services//genreService";
import { toast, ToastContainer } from "react-toastify";
import Filter from "./common/filter";
import Pagination from "./common/pagination";
import MovieTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import _ from "lodash";
import { Link } from "react-router-dom";
import Search from "./common/search";
import "react-toastify/dist/ReactToastify.css";

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

  async componentDidMount() {
    const result = await getMovies();

    const { data } = await getGenres();
    const genre = [{ _id: "", name: "All Genre" }, ...data];
    this.setState({ movies: result.data, genreList: genre });
  }

  handleDelete = async (id) => {
    const allMovies = this.state.movies;
    const movies = allMovies.filter((m) => m._id !== id);
    this.setState({ movies: movies });
    try {
      await deleteMovie(id);
    } catch (error) {
      if (error.response && error.response.status === 500) {
        toast.error("Movie not found");
        this.setState({ movies: allMovies });
      }
    }
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
    const { user } = this.props;

    const { totalCount, data: movies } = this.getPagedData();

    return (
      <React.Fragment>
        <ToastContainer />
        <div className="row">
          <div className="col-md-3 col">
            <Filter
              values={this.state.genreList}
              onItemSelect={this.handleSelect.bind(this)}
              selectedGenre={this.state.selectedGenre}
            />
          </div>
          <div className="col-md-9 col">
            {user && (
              <Link to="/movie-form/new/" className="btn btn-primary">
                Add Movie
              </Link>
            )}

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
