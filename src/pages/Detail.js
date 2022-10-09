import React, {useMemo} from 'react';
import DetailHeader from "../components/DetailHeader";
import DetailBody from "../components/DetailBody";
import {
    useLoaderData,
} from "react-router-dom";

const Detail = () => {
    let data = useLoaderData()
    const user = useMemo(() => data)
    console.log(user)
    return (
        <div>
            <DetailHeader user={user}/>
            <DetailBody user={user}/>
        </div>
    );
};

export default Detail;