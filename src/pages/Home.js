import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "./Home.css";

function Home() {
  const movieList = [
    "Avengers",
    "Avengers Age of Ultron",
    "Captain America Civil War",
    "Avengers Infinity War",
    "Avengers Endgame",
    "Loki",
    "Spider-man No Way Home",
  ]

  const [movieData, setMovieData] = useState([])

  // const getMovieApi = async (movieList) => {
  //   await movieList.map(async (movie) => {
  //     const url = `http://www.omdbapi.com/?apikey=184ae785&t=${movie}`;
  //     const response = await fetch(url);
  //     const reponseJson = await response.json();
  //     let movieListCopy = movieData
  //     movieListCopy.push(reponseJson)
  //     setMovieData(movieListCopy)
      

  //   });
  // };
  const getMovieApi = async () => {
    let movieCollection = [];
    for (let i = 0; i < movieList.length; i++) {
      const url = `http://www.omdbapi.com/?apikey=184ae785&t=${movieList[i]}`;
      await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        movieCollection.push(data);
      });



    }
    setMovieData(movieCollection);
  }
  
   
  useEffect(() => {
    getMovieApi();
  });

  return (
    <div className="home">
      <MovieCard movies={movieData}/>
    </div>
  )
}

export default Home;
