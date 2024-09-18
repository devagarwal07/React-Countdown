import Countdown from "./components/Countdown"
import bg from '../public/bg1.jpg'
import { useState } from "react";
const App = () => {
  const [round, setRound] = useState(''); // state to store the current round

  const handleRoundChange = (e) => {
    setRound(e.target.value); // updates round as user inputs value
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-bottom"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <h1 className="text-5xl mt-7 text-white font-serif mb-10">CryptoGuard</h1>

      {/* Input field to take the current round */}
      <input
        type="text"
        placeholder="Enter round"
        value={round}
        onChange={handleRoundChange}
        className="mt-5 p-2 border bg-transparent rounded-md absolute right-7 top-[4.5rem] text-white"
      />

      {/* Display the round entered */}
      {round && (
        <h1 className="text-6xl  text-white font-serif">
          {round}
        </h1>
      )}


      <Countdown />
    </div>
  )
}

export default App
