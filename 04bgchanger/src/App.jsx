import {useState} from "react"

function App() {
  const [color , setColor] = useState("olive")

  return (

    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("green")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("yellow")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow"}}>Yellow</button>
        <button onClick={() => setColor("cyan")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "Cyan"}}>Cyan</button>
        <button onClick={() => setColor("black")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "Black"}}>Black</button>
        <button  onClick={() => setColor("pink")} className="outline-none px-4 rounded-full text-white shadow-lg" style={{backgroundColor: "Pink"}}>pink</button>
      </div>

      </div>
    </div>

  )
}

export default App
