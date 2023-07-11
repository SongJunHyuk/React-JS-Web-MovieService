import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev ) => prev + 1);
  return (
    <div>
      <div>
        <h1>{counter}</h1>
        <button onCLick={onClick}>Click me</button>
      </div>
      <div>
        <h1 className={styles.title}>Welcome back!</h1>
        <Button text="Continue"/>
      </div>
    </div>
  );
}

export default App;