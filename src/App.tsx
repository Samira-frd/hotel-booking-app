import qantasLogo from "/qantas-logo.png";
import "./App.css";
import HotelsList from "./HotelsList";

function App() {
  return (
    <>
      <div>
        <img src={qantasLogo} className="w-50" alt="qantas logo" />
      </div>
      <h2 className="text-4xl font-bold">Qantas Hotels</h2>
      <div>
        <HotelsList />
      </div>
    </>
  );
}

export default App;
