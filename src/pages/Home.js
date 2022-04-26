
import {useEffect} from 'react'
function Home() {
    const movieList = [
        "Avengers",
        "Avengers Age of Ultron",
        "Captain America Civil War",
        "Avengers Infinity War",
        "Avengers Endgame",
        "Loki",
        "Spider-man No Way Home",
      ];
      const getMovieApi = async (movieList) => {
        await movieList.map(async (movie) => {
          const url = `http://www.omdbapi.com/?apikey=184ae785&t=${movie}`;
          const response = await fetch(url);
          const reponseJson = await response.json();
          console.log(reponseJson);
        });
      };
      useEffect(() => {
        getMovieApi(movieList);
      }, []);

      return(
        <div></div>
      )
}

export default Home;