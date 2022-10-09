import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import {ru} from 'date-fns/locale'
import {setDefaultOptions} from "date-fns";


function App() {
    setDefaultOptions({locale: ru})
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
