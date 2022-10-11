import React from 'react';
import TopAppBar from "../components/TopAppBar";
import Home from "../components/Home";

const Main = ({activeTab, setActiveTab, search, setSearch, order, setOrder, isOnline}) => {
    return (
        <>
            <TopAppBar activeTab={activeTab} setActiveTab={setActiveTab} setSearch={setSearch} setOrder={setOrder}
                       order={order} search={search} isOnline={isOnline}/>
            <Home activeTab={activeTab} search={search} order={order}/>
        </>
    );
};

export default Main;