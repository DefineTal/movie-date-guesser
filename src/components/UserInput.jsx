import React, { useState } from 'react';
import { useMovieDataContext, useMovieDispatch } from '../contexts/movieContext';


export default function UserInput() {
    const [userInput, setUserInput] = useState("");
    const [score, setScore] = useState(0);
    const [message, setMessage] = useState("");

    const movie = useMovieDataContext();
    const getMovie = useMovieDispatch();

    const currentMovieReleaseDate = movie.releaseDate.substr(0, 4);
    

    // Handles button click
    const handleClick = () => {
    if (userInput === currentMovieReleaseDate) {
        console.log("You got it right!");
        setMessage("You got it right!");
        setScore(score + 1);
    } else {
        console.log(`You got it wrong! Current movie release date = ${currentMovieReleaseDate}. User input = ${userInput}`);
        setMessage("You got it wrong the release date was " + currentMovieReleaseDate + " :(");
    }
    getMovie();
    setUserInput('');
    };


    // Handles when enter is pressed
    const handleKeyDown = (e) => {
    if (e.key === "Enter") {
        handleClick();
    }
    }



    return (
    <div className="user-input">
        <h2>What year did this movie release?</h2>
        <input className="date" type="number" min="1900" max="2099" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={handleKeyDown}/>
        <button className="submit" onClick={handleClick}>
        Submit
        </button>
        <div className="score">
        <p>Score: {score}</p>
        </div>

        <div>{message}</div>
    </div>
    )
}
