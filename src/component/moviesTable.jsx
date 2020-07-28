import React, { Component } from "react";
import Tables from "../component/common/Table";
import Heart from "../component/common/heart";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../services/userAuth";

class MovieTable extends Component {
  coloumns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movie-form/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      label: "Like ",
      content: (movie) => (
        <Heart liked={movie.liked} onClick={() => this.props.onLike(movie)} />
      ),
    },
  ];

  deleteColoumn = {
    key: "delete",
    content: (movie) => (
      <button
        onClick={() => this.props.onDelete(movie._id)}
        className="btn btn-danger btn-sm"
      >
        DELETE
      </button>
    ),
  };

  constructor() {
    super();
    const user = getCurrentUser();
    if (user && user.isAdmin) {
      this.coloumns.push(this.deleteColoumn);
    }
  }
  render() {
    const { movies, onDelete, onLike, sortColoumn, onSort } = this.props;
    return (
      <Tables
        movies={movies}
        onDelete={onDelete}
        onLike={onLike}
        sortColoumn={sortColoumn}
        onSort={onSort}
        coloumns={this.coloumns}
      />
    );
  }
}

export default MovieTable;
