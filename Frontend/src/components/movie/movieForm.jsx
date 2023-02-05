import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import { getGenres } from "../../services/genreService";
import { getMovie, saveMovie } from "../../services/movieService";
import { getDistribution } from "../../services/distributionService";
import Multiselect from "multiselect-react-dropdown";
import FileBase64 from "react-file-base64";
import "../../css/movieForm.css";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      description: "",
      distribution: [],
      rate: 0,
      numberInStock: 0,
      dailyRentalRate: 0,
      image: null,
    },
    genres: [],
    distribution: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().label("Title"),
    genreId: Joi.string().label("Genre"),
    distribution: Joi.array().label("Distribution"),
    description: Joi.string().label("Description"),
    rate: Joi.number().min(1).max(10).label("Rate"),
    numberInStock: Joi.number().min(0).max(100).label("Number in stock"),
    dailyRentalRate: Joi.number().min(0).max(10).label("Dailey Rental Rate"),
    image: Joi.any().label("Image"),
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateDistribution() {
    const { data: distribution } = await getDistribution();
    this.setState({ distribution });
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
    await this.populateDistribution();
  }

  modelView(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      description: movie.description,
      distribution: movie.distribution,
      rate: movie.rate,
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
      <div className="movieFormContainer">
        <h1>Movie Form</h1>
        <form className="movieForm" onSubmit={this.handleSubmit}>
          {this.rederInput("title", "Title")}
          {this.renderCustomInput("genreId", "Genre", genres)}
          {this.rederInput("rate", "Rate", "number")}
          {this.renderTextArea("description", "Description")}
          {/* {this.renderInputImage("image", "Image", "file")} */}
          <Multiselect
            options={this.state.distribution}
            displayValue="name"
            placeholder="Pick Cast"
            fields={{ value: "_id", text: "name" }}
            hidePlaceholder="true"
            onSelect={(e) => {
              console.log(e);
              const data = this.state.data;
              data.distribution = [];
              data.distribution = e.map((ex) => ex._id);
              this.setState({ data });
            }}
          />
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
