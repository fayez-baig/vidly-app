import React from "react";
import joi from "joi-browser";
import { getGenres } from "./../../services/fakeGenreService";
import { getMovie, saveMovie } from "./../../services/fakeMovieService";
import Form from "./Form";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    error: {},
  };

  schema = {
    _id: joi.string(),
    title: joi.string().required().label("Title"),
    numberInStock: joi
      .number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: joi.number().min(0).max(10).required().label("Rate"),
    genreId: joi.required(),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  // render() {
  //   const { match, history } = this.props;
  //   return (
  //     <div>
  //       <h1>Movie Form:- {match.params.id}</h1>
  //       <button
  //         className="btn btn-primary"
  //         onClick={() => history.push("/movies")}
  //       >
  //         Save
  //       </button>
  //     </div>
  //   );
  // }

  doSubmit = () => {
    console.log(this.state.data);
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  render() {
    const { genres } = this.state;
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Add Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
