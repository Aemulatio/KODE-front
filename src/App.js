import {useState} from "react";
import {Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import {ru} from 'date-fns/locale'
import {setDefaultOptions} from "date-fns";
import axios from "axios";


function App() {
    setDefaultOptions({locale: ru})
    const [activeTab, setActiveTab] = useState("all");
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState()

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main activeTab={activeTab} search={search} setActiveTab={setActiveTab}
                           setSearch={setSearch} order={order} setOrder={setOrder}/>,
        },
        {
            path: "/:id",
            element: <Detail/>,
            loader: async (params) => {
                let data;
                await axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users`, {params: {"id": params.params.id}}).then(
                    (resp) => {
                        data = resp.data.items[0]
                    }
                )
                return data
            },
        },
    ])

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
