import { useState } from "react";

function App() {
    const[advice, setAdvice] = useState("");

    async function getAdvice(){
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setAdvice(data.slip.advice);
    }

    return(
    <div>
        <h1>Hello! React</h1>
        <h2>{advice}</h2>
        <button onClick = {getAdvice}>Get Advice</button>
    </div>
    );
}

export default App;