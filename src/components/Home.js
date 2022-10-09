import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardHeader, CardMedia, Skeleton, Typography} from "@mui/material";
import axios from "axios";
import EmptySearch from "../components/EmptySearch";
import {Link} from "react-router-dom";

const Home = (props) => {
    const {activeTab, search} = props;
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

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
                            }).map(user => (
                                <Link to={user.id} style={{textDecoration: "none"}}>
                                    <Box key={user.id} sx={{width: "343px", display: "flex", alignItems: "center"}}
                                         elevation={0}>
                                        <Box sx={{p: "6px 0", mr: "16px"}}>
                                            <img
                                                style={{width: "72px", height: "72px", borderRadius: "50%"}}
                                                loading={'lazy'}
                                                src={user.avatarUrl}
                                                alt={user.firstName}/>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography
                                                    component={"span"}
                                                    sx={{
                                                        fontSize: "16px",
                                                        lineHeight: "20px",
                                                        color: "#050510",
                                                    }}>
                                                    {user.firstName} {user.lastName}
                                                </Typography>{" "}
                                                <Typography
                                                    component={"span"}
                                                    sx={{
                                                        fontSize: "14px",
                                                        lineHeight: "18px",
                                                        color: "#97979B",
                                                    }}>
                                                    {user.userTag}
                                                </Typography>
                                            </Box>
                                            <Box mt={"6px"}>
                                                <Typography sx={{
                                                    fontSize: "13px",
                                                    lineHeight: "16px",
                                                    fontWeight: 400,
                                                    color: "#55555C"
                                                }}>{user.position[0].toUpperCase() + user.position.slice(1)}</Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
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
