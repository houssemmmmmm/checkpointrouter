import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import MovieList from './Components/MovieList';
import TrailerCard from './Components/TrailerCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [movieList, setMovieList] = useState([{
    id: uuidv4(),
    title: "Boyhood",
    description: "After MJ's parents' divorce, he and his sister Samantha live with their mother, whereas the father has visiting rights. Incidents that occur across a period of twelve years mould MJ's life.",
    posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0AWSMjSJ2T7vk2yQTjOIaU6XOnzXis9egJzJh6YBWrT0A5td",
    rating: "8",
    embedId: "Y0oX0xiwOv8"
  },
  {
    id: uuidv4(),
    title: "A prophet",
    description: "This acclaimed crime drama follows Malik El Djebena (Tahar Rahim), a delinquent young Muslim man, who is struggling to get by in a French prison",
    posterURL: "https://i.pinimg.com/originals/4c/d5/c9/4cd5c9c9fa43631833b879448104c6a8.jpg",
    rating: "8.5",
    embedId: "yxbOnIbQfYc"
  },
  {
    id: uuidv4(),
    title: "Portrait of a Lady on Fire",
    description: "France, 1770. Marianne, a painter, is commissioned to do the wedding portrait of Héloïse, a young woman who has just left the convent. Héloïse is a reluctant bride to be and Marianne must paint her without her knowing.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BNjgwNjkwOWYtYmM3My00NzI1LTk5OGItYWY0OTMyZTY4OTg2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    rating: "8.1",
    embedId: "R-fQPTwma9o"

  },
  {
    id: uuidv4(),
    title: "Mektoub My Love : Canto Uno",
    description: "A teenager returns to his hometown during summer break to find love.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BZTliZGVkYWEtYzUyYi00YjkzLWFkNWUtMTJiYTNiNzE0ZTgzXkEyXkFqcGdeQXVyMTA2ODMzMDU@._V1_.jpg",
    rating: "9.2",
    embedId: "VNTXyo8Yjqw"
  },
  {
    id: uuidv4(),
    title: "Cold War",
    description: "Set against the backdrop of the 1950s Cold War in Poland, two people of differing backgrounds and temperaments begin an almost impossible romance.",
    posterURL: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaQFTWyag6QwfmNnksiOdeQ9_qjaMyuAle1NO4e1NybyX3wpMi",
    rating: "8.8",
    embedId: "8ImvkXgGVWw"
  },
  {
    id: uuidv4(),
    title: "I'm No Longer Here",
    description: "After a misunderstanding with a local cartel, a young man is forced to leave behind his family, friends and everything he loves.",
    posterURL: "https://m.media-amazon.com/images/M/MV5BOTQ5NzYyZWYtYmU2MS00YTYxLTgyNzctZjZjYTM0NmNjODc4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    rating: "8.4",
    embedId: "ieeZ0mviFKc"
  }
  ])

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MovieList movieList={movieList} updatedList={(movie) => setMovieList(movie)} />
          </Route>
          <Route path="/:name/:id">
            <TrailerCard allMovies={movieList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
