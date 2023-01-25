import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: 0,
      dailyRentalRate: 0,
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().label("Title"),
    genreId: Joi.string().label("Genre"),
    numberInStock: Joi.number().min(0).max(100).label("Number in stock"),
    dailyRentalRate: Joi.number().min(0).max(10).label("Dailey Rental Rate"),
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateMovie() {
    try {
      const movieId = this.props.match.params._id;
      if (movieId === "new") return;
      console.log("u");
      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.modelView(movie) });
    } catch (ex) {
      console.log(ex.response.status);
      if (ex.response && ex.response.status === 404)
        return this.props.history.replace("/notFound");
    }
  }

  async componentDidMount() {
    console.log("uu");
    await this.populateGenres();
    await this.populateMovie();
  }

  modelView(movie) {
    console.log(movie);
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);

    this.props.history.push("/movies");
  };

  render() {
    const { genres } = this.state;

    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.rederInput("title", "Title")}
          {this.renderCustomInput("genreId", "Genre", genres)}
          {this.rederInput("numberInStock", "Number In Stock", "number")}
          {this.rederInput("dailyRentalRate", "Daily Rental Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
