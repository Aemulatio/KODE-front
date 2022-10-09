import TopAppBar from "./components/TopAppBar";
import {useState} from "react";
import Home from "./pages/Home";


function App() {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="App">
            <TopAppBar activeTab={activeTab} setActiveTab={setActiveTab}/>
            <Home activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
    );
}

export default App;
