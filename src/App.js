import {useEffect, useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import {ru} from 'date-fns/locale'
import {setDefaultOptions} from "date-fns";
import axios from "axios";


function App() {
    setDefaultOptions({locale: ru})
    const [activeTab, setActiveTab] = useState("all");
    const [search, setSearch] = useState("")
    const [order, setOrder] = useState('firstName')

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const setOnline = () => {
        console.log('We are online!');
        setIsOnline(true);
    };
    const setOffline = () => {
        console.log('We are offline!');
        setIsOnline(false);
    };

    // Register
    // the
    // event
    // listeners
    useEffect(() => {
        window.addEventListener('offline', setOffline);
        window.addEventListener('online', setOnline);

        // cleanup if we unmount
        return () => {
            window.removeEventListener('offline', setOffline);
            window.removeEventListener('online', setOnline);
        }
    }, []);

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main activeTab={activeTab} search={search} setActiveTab={setActiveTab}
                           setSearch={setSearch} order={order} setOrder={setOrder} isOnline={isOnline}/>,
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
