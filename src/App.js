import TopButtons from "./components/TopButtons";
import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import Masukan from "./components/Masukan";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";

function App() {
  return (
    <div className="bg-gradient-to-tr from-indigo-400 to-violet-100 min-h-dvh pt-4">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 shadow-xl shadow-gray-400 rounded-bl-xl rounded-tr-xl">
        <TopButtons />
        <Masukan />

        <TimeAndLocation />
        <TemperatureAndDetails />
      </div>
    </div>
  );
}

export default App;
