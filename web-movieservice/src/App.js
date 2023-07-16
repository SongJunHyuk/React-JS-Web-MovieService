import { useState } from "react";

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
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."/>
        <button>Add To Do</button>
      </form>
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