import "./App.css";
import ClockHeading from "./components/ClockHeading";
import CurrentTime from "./components/CurrentTime";
import Slogan from "./components/Slogan";

function App() {
  return (
    <center>
      <ClockHeading />
      <Slogan />
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
