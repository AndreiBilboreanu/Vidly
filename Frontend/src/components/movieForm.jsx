import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";
import FileBase64 from "react-file-base64";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: 0,
      dailyRentalRate: 0,
      image: null,
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
    image: Joi.any().label("Image"),
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
      if (ex.response && ex.response.status === 400)
        return this.props.history.replace("/notFound");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateMovie();
  }

  modelView(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  doSubmit = async () => {
    console.log(this.state.data);
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
          {/* {this.renderInputImage("image", "Image", "file")} */}
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => {
              const data = this.state.data;
              data.image = base64;
              this.setState({ data });
              console.log(base64);
            }}
          />
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
