import React from 'react';
import {Box, Typography} from "@mui/material";
import BackArrow from "../images/BackArrow.png"
import {Link} from "react-router-dom";

const DetailHeader = ({user}) => {
    return (
        <Box sx={{background: "#F7F7F8"}}>
            <Box
                sx={{
                    width: "24px",
                    height: "24px",
                    position: "absolute",
                    top: "24px",
                    left: "48px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link to={"/"}>
                    <img src={BackArrow}/>
                </Link>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "fit-content",
                m: 'auto',
                pt: "72px",
                pb: "24px",
                left: 0, right: 0, top: 0, bottom: 0,
            }}>
                <img
                    style={{marginBottom: "24px"}}
                    className={'detailImage'}
                    loading={'lazy'}
                    src={user?.avatarUrl}
                    alt={user?.firstName}/>

                <Typography
                    component={"p"}
                    sx={{pb: "12px", pt: "8px"}}
                    className={"title1Bold textPrimary"}
                >
                    {`${user?.firstName} ${user?.lastName} `}
                    <Typography
                        component={"span"}
                        className={'textTetriary title3Regular'}
                    >{user?.userTag}</Typography>
                </Typography>
                <Typography
                    component={"p"}
                    className={'caption1Regular textSecondary'}
                    sx={{textAlign: "center",}}
                >
                    {user?.position}
                </Typography>
            </Box>
        </Box>
    );
};

export default DetailHeader;


