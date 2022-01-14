import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => getMovie(), []);
  return (
    <div>
      {loading ? (
        <h1>Importing details...</h1>
      ) : (
        <div>
          <h3>
            <Link to={`/`}>Previous</Link>
          </h3>
          <img src={details.large_cover_image} />
          <h1>{details.title}</h1>
          <span>{details.rating}</span>
          <br />
          <span>{details.runtime} minutes</span>
          <h2>
            <a href={`youtu.be/${details.yt_trailer_code}`}>
              Go to the trailer
            </a>
          </h2>
          <span>{details.like_count} liked this movie.</span>
        </div>
      )}
    </div>
  );
}
export default Detail;
