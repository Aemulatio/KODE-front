import TopAppBar from "./components/TopAppBar";
import {useState} from "react";
import Home from "./pages/Home";


function App() {
    const [activeTab, setActiveTab] = useState("all");
    const [search, setSearch] = useState("")
    return (
        <div className="App">
            <TopAppBar activeTab={activeTab} setActiveTab={setActiveTab} setSearch={setSearch}/>
            <Home activeTab={activeTab} search={search}/>
        </div>
    );
}

export default App;
