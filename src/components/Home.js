import React, {useEffect, useState} from 'react';
import {Box, Skeleton} from "@mui/material";
import axios from "axios";
import EmptySearch from "./EmptySearch";
import UserList from "./UserList";
import UserListBDSort from "./UserListBDSort";
import CriticalError from "./CriticalError";

const Home = (props) => {
    const {activeTab, search, order} = props;
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [refresh, setRefresh] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users`, {params: {"__example": activeTab}}).then(
            (resp) => {
                setUsersList(resp.data.items)
                setIsLoading(false)
            }
        ).catch(err => {
            setIsError(true);
            setIsLoading(false)
            console.log(err)
        })
    }, [activeTab, refresh])

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
                : (
                    isError === false
                        ? (
                            <>
                                {order === "firstName" ?
                                    <UserList
                                        users={usersList.filter(el => {
                                            if (el.firstName.toLowerCase().indexOf(search) !== -1) {
                                                return el
                                            }
                                            if (el.lastName.toLowerCase().indexOf(search) !== -1) {
                                                return el
                                            }
                                            if (el.userTag.toLowerCase().indexOf(search) !== -1) {
                                                return el
                                            }
                                        })}
                                    />
                                    : <UserListBDSort
                                        users={usersList.filter(el => {
                                            if (el.firstName.toLowerCase().indexOf(search) !== -1) {
                                                return el
                                            }
                                            if (el.lastName.toLowerCase().indexOf(search) !== -1) {
                                                return el
                                            }
                                            if (el.userTag.toLowerCase().indexOf(search) !== -1) {
                                                return el
                                            }
                                        })}
                                    />}
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
                        ) : (
                            <CriticalError setRefresh={setRefresh}/>
                        )
                )
            }
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
