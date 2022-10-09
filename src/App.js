import TopAppBar from "./components/TopAppBar";
import {useState} from "react";
import Home from "./components/Home";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";


function App() {
    const [activeTab, setActiveTab] = useState("all");
    const [search, setSearch] = useState("")
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={
                    <Main activeTab={activeTab} search={search} setActiveTab={setActiveTab}
                          setSearch={setSearch}/>
                }/>
                <Route path="/:id" element={<Detail/>}/>
            </Routes>
        </div>
    );
}

export default App;
