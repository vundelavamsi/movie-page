import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import MovieCard from "../MovieCard";

import "./index.css";

const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=b8e9bcb7dd64c5e3f9d21e9508ee0f7f&language=en-US&page=1";

const TopRated = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [totalPages, setTotalPages] = useState(500);

  useEffect(() => {
    fetch(TOP_RATED_MOVIES_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const SearchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=b8e9bcb7dd64c5e3f9d21e9508ee0f7f&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const fetchMovies = async (currentPage) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b8e9bcb7dd64c5e3f9d21e9508ee0f7f&language=en-US&page=${currentPage}`)
    const data = await res.json();
    return data.results;
  }

  const hangelePageClick = async (data) => {
    console.log(data.selected+1);
    fetchMovies(data.selected+1)
    const specificPageMovies = await fetchMovies(data.selected+1)
    setMovies(specificPageMovies);
  }

  return (
    <>
      <div className="heading-search-container">
        <h1 className="popular-movies-heading">Top Rated Movies</h1>
        <form className="search-container" onSubmit={SearchMovie}>
          <input
            type="search"
            placeholder="Movie Search"
            name="query"
            value={query}
            onChange={changeHandler}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="movies-container">
        {movies.map((eachMovie) => (
          <MovieCard
            key={eachMovie.id}
            title={eachMovie.title}
            poster_path={eachMovie.poster_path}
            vote_average={eachMovie.vote_average}
            id={eachMovie.id}
          />
        ))}
        <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={hangelePageClick}
        containerClassName={'pagination justfy-content-center pagination-container'}
        pageClassName={'page-item m-1'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item m-1'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item m-1'}
        nextLinkClassName={'page-link'}
        breakClassName={'page-item m-1'}
        breakLinkClassName={'page-link'}
        activeClassName={'active'}
      />
      </div>
    </>
  );
};

export default TopRated;
