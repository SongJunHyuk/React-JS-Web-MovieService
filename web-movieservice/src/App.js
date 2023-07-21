import { useEffect, useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    toDos.push();
  }

  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) =>(
          <li key={index}>{item}</li>
          ))}
      </ul>

      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}

      <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  )
}



export default App;

// import Button from "./Button";
// import styles from "./App.module.css";
// import { useState, useEffect } from "react";

// function App() {
//   const [counter, setValue] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev ) => prev + 1);
//   const onChange = (event) => setKeyword(event.target.value);

//   useEffect(() => {
//     console.log("I run only once.");
//   }, []);
//   useEffect(() => {
//       console.log("I run when 'keyword' changes.", keyword);
//   }, [keyword]);
//   useEffect(() => {
//     console.log("I run when 'counter' changes.");
//   }, [counter]);
//   return (
//     <div>
//       <div>
//         <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."/>
//         <h1>{counter}</h1>
//         <button onClick={onClick}>Click me</button>
//       </div>
//       <div>
//         <h1 className={styles.title}>Welcome back!</h1>
//         <Button text="Continue"/>
//       </div>
//     </div>
//   );
// }