import React from 'react';
import Movie from '../../components/Movie/Movie';
import useFetch from '../../hooks/useFetch';

const MovieDirectory = () => {
  const res = useFetch('http://www.omdbapi.com/?s=man&apikey=631aaa90', {});
  if (!res.response) {
    return <div>Loading...</div>;
  }

  const movies = res.response.Search;
  return (
    <div className="row">
      {
        movies.map((movie) => (
          <div key={movie.imdbID} className="col-12 col-md-6 col-lg-3 mb-4">
            <Movie Poster={movie.Poster} Title={movie.Title} Year={movie.Year} />
          </div>
        ))
      }
    </div>
  );
};

export default MovieDirectory;
