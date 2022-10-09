import React from 'react';
import {Box, Typography} from "@mui/material";
import BackArrow from "../images/BackArrow.png"
import {Link} from "react-router-dom";

const DetailHeader = ({user}) => {
    console.log(user)
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
                    style={{width: "104px", height: "104px", borderRadius: "50%", paddingBottom: "24px"}}
                    loading={'lazy'}
                    src={user?.avatarUrl}
                    alt={user?.firstName}/>

                <Typography
                    component={"p"}
                    sx={{
                        fontWeight: 700,
                        fontSize: "24px",
                        lineHeight: "28px",
                        textAlign: "center",
                        color: "#050510",
                        pb: "12px",
                        pt: "8px"
                    }}>
                    {`${user?.firstName} ${user?.lastName} `}
                    <Typography
                        component={"span"}
                        sx={{
                            fontWeight: 400,
                            fontSize: "17px",
                            lineHeight: "22px",
                            color: "#97979B",
                        }}
                    >{user?.userTag}</Typography>
                </Typography>
                <Typography
                    component={"p"}
                    sx={{
                        fontWeight: 400,
                        fontSize: "13px",
                        lineHeight: "16px",
                        textAlign: "center",
                        color: "#55555C"
                    }}
                >
                    {user?.position}
                </Typography>
            </Box>
        </Box>
    );
};

export default DetailHeader;


