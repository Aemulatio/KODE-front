import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardHeader, CardMedia, Skeleton, Typography} from "@mui/material";
import axios from "axios";
import EmptySearch from "./EmptySearch";
import {Link} from "react-router-dom";
import UserItem from "./UserItem";

const Home = (props) => {
    const {activeTab, search, order} = props;
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const sortItems = (a, b) => {
        return (a[order] > b[order]) ? 1 : ((b[order] > a[order]) ? -1 : 0)
    }

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users`, {params: {"__example": activeTab}}).then(
            (resp) => {
                setUsersList(resp.data.items)
                setIsLoading(false)
            }
        )
    }, [activeTab])

    console.log(usersList)
    console.log(order)
    return (
        <Box
            sx={{
                p: "16px",
                position: "relative",
                height: "79.8vh",
                // overflowY: "auto",
                display: "flex",
                flexDirection: "column",

            }}
        >
            {isLoading
                ?
                <>
                    <SkeletonItem/>
                    <SkeletonItem/>
                    <SkeletonItem/>
                    <SkeletonItem/>
                    <SkeletonItem/>
                    <SkeletonItem/>
                    <SkeletonItem/>
                    <SkeletonItem/>
                    <SkeletonItem/>
                </>
                :
                (<>
                        {
                            usersList.sort(sortItems).filter(el => {
                                if (el.firstName.toLowerCase().indexOf(search) !== -1) {
                                    return el
                                }
                                if (el.lastName.toLowerCase().indexOf(search) !== -1) {
                                    return el
                                }
                                if (el.userTag.toLowerCase().indexOf(search) !== -1) {
                                    return el
                                }
                            }).map(user => (
                                <UserItem user={user}/>
                            ))
                        }
                        {
                            usersList.filter(el => {
                                if (el.firstName.toLowerCase().indexOf(search) !== -1) {
                                    return el
                                }
                                if (el.lastName.toLowerCase().indexOf(search) !== -1) {
                                    return el
                                }
                                if (el.userTag.toLowerCase().indexOf(search) !== -1) {
                                    return el
                                }
                            }).length === 0 &&
                            <>
                                <EmptySearch/>
                            </>
                        }
                    </>
                )}
        </Box>
    );
};

export default Home;

function SkeletonItem({key}) {
    return (
        <Box sx={{width: "343px", display: "flex", alignItems: "center"}}
             key={new Date()}
             elevation={0}>
            <Box sx={{p: "6px 0", mr: "16px"}}>
                <Skeleton variant="circular" width={72} height={72}/>
            </Box>
            <Box>
                <Box>
                    <Skeleton variant="rounded" width={144} height={16}/>
                </Box>
                <Box mt={"6px"}>
                    <Skeleton variant="rounded" width={80} height={12}/>
                </Box>
            </Box>
        </Box>
    )
}
