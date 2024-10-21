import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <Container>
          <Header />
          <div className="col-lg-6 mx-auto">
            <DisplayCounter />
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <Controls />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
