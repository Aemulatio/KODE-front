import React from 'react';
import TopAppBar from "../components/TopAppBar";
import Home from "../components/Home";

const Main = ({activeTab, setActiveTab, search, setSearch, order, setOrder}) => {
    return (
        <>
            <TopAppBar activeTab={activeTab} setActiveTab={setActiveTab} setSearch={setSearch} setOrder={setOrder}
                       order={order} search={search}/>
            <Home activeTab={activeTab} search={search} order={order}/>
        </>
    );
};

export default Main;