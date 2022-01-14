import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ coverimg, title, summary, genres }) {
  return (
    <div>
      <img src={coverimg} />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genre) => (
          <li>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverimg: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};
export default Movie;
