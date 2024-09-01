import Countdown from "./components/Countdown"
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
       <h1 className="text-5xl mt-5">Hackathon Name</h1>
       <Countdown />
    </div>
  )
}

export default App
