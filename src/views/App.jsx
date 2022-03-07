import React, { useState, useEffect } from "react";
import Button from "../componets/button/Button";
import Logo from "../componets/logo/Logo";
import MovieList from "../componets/movieList/MovieList";
import Api from "../services/Api";

const App = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    Api.getMoviesMcu(page).then((response) => {
      setData(response.data.results);
    });
    setPage(page + 1);
  }, []);

  function getMoreMovies() {
    setPage(page + 1);
    Api.getMoviesMcu(page).then((response) => {
      setData([...data, ...response.data.results]);
    });

  }

  return (
    <div className="App">
      <Logo />
      <MovieList movies={data} setShowModal={setShowModal} showModal={showModal} />
      <Button title="Mais filmes" styleName="moreMovies" onFunction={getMoreMovies} />
    </div>
  );
};

export default App;
