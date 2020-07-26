import React from "react";
import joi from "joi-browser";
import Form from "./Form";
import { getGenres } from "./../../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {},
    genres: [],
    error: {},
  };

  schema = {
    title: joi.string().required().label("Title"),
    numberInStock: joi
      .number()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    dailyRentalRate: joi.number().min(0).max(10).required().label("Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
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

  render() {
    const { genres } = this.state;
    return (
      <div className="container">
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genre", "Genre", genres)}
          {this.renderInput("numberInStock", "Number in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Add Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
