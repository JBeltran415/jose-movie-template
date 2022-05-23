import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./MovieCard.css";




import { useState, useEffect } from "react";



function MovieCard(props) {
    console.log(props.movies, "props.movies")
    const [movieData, setMovieData] = useState([])
  



  console.log("props", props);
  return (
    <div className="movies-wrapper">
      {props.movies.map((movie, key) => (
        <Card

        
          key={key}
          className="card"
          style={{ backgroundColor: "#E6E1C5" }}
        > 

          <CardActionArea>
            <CardMedia

              component="img"
                className="movie-poster"
              image={movie.Poster}
              alt="movie-poster"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {movie.Title}
              </Typography>
              <Typography variant="p" color="text.primary">
                {movie.Plot}
              </Typography>
              <br></br><br></br>
              <Typography variant="p" color="text.secondary">
                {movie.Released}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> 

    
      ))}

      
        
          
    </div>
  );
}
export default MovieCard; 
