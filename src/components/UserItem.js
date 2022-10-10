import React from 'react';
import {Link} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {format, parse} from "date-fns";

const UserItem = ({user, order}) => {
    const textRegular = {
        fontWeight: 400,
        fontSize: "15px",
        lineHeight: "20px",
        color: "#55555C",
        fontFamily: 'Inter',
        textAlign: "right",
    }


    return (
        <>
            <Link to={user.id} style={{textDecoration: "none"}} key={user.id}>
                <Box sx={{width: "100%", display: "flex", alignItems: "center"}}
                     elevation={0}>

                    <Box sx={{p: "6px 0", mr: "16px"}}>
                        <img
                            style={{width: "72px", height: "72px", borderRadius: "50%"}}
                            loading={'lazy'}
                            src={user.avatarUrl}
                            alt={user.firstName}/>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: "space-between",
                            flexGrow: 1,
                        }}
                    >

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
                        {order === 'birthday' &&
                            <Box>
                                <Typography
                                    sx={textRegular}>{format(parse(user.birthday, "yyyy-MM-dd", new Date()), "dd MMM").slice(0, -1)}</Typography>
                            </Box>
                        }

                    </Box>
                </Box>
            </Link>
        </>
    );
};

export default UserItem;