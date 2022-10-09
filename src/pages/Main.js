import React from 'react';
import TopAppBar from "../components/TopAppBar";
import Home from "../components/Home";

const Main = ({activeTab, setActiveTab, search, setSearch}) => {
    return (
        <>
            <TopAppBar activeTab={activeTab} setActiveTab={setActiveTab} setSearch={setSearch}/>
            <Home activeTab={activeTab} search={search}/>
        </>
    );
};

export default Main;