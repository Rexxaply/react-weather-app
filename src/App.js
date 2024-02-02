import TopButtons from './components/TopButtons';
import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Masukan from './components/Masukan';
import TimeAndLocation from './components/TimeAndLocation';

function App() {
  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to to-blue-700 shadow-xl shadow-gray-400'>
      <TopButtons />
      <Masukan />

      <TimeAndLocation />
    </div>
  );
}

export default App;
