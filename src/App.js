import TopAppBar from "./components/TopAppBar";
import {useState} from "react";


function App() {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="App">
            <TopAppBar activeTab={activeTab} setActiveTab={setActiveTab}/>
        </div>
    );
}

export default App;
