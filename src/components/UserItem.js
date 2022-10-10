import React from 'react';
import {Link} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {format, parse} from "date-fns";

const UserItem = ({user, order}) => {
    return (
        <>
            <Link to={user.id} style={{textDecoration: "none"}} key={user.id}>
                <Box sx={{width: "100%", display: "flex", alignItems: "center"}}
                     elevation={0}>

                    <Box sx={{p: "6px 0", mr: "16px"}}>
                        <img
                            className={"listImage"}
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
                                    className={"headlineMedium textPrimary"}>
                                    {user.firstName} {user.lastName}
                                </Typography>{" "}
                                <Typography
                                    component={"span"}
                                    className={'subheadMedium textTetriary'}>
                                    {user.userTag}
                                </Typography>
                            </Box>

                            <Box mt={"6px"}>
                                <Typography
                                    className={'caption1Regular textSecondary'}>{user.position[0].toUpperCase() + user.position.slice(1)}</Typography>
                            </Box>
                        </Box>
                        {order === 'birthday' &&
                            <Box>
                                <Typography
                                    className={'textSecondary textRegular'}
                                    >{format(parse(user.birthday, "yyyy-MM-dd", new Date()), "dd MMM").slice(0, -1)}</Typography>
                            </Box>
                        }

                    </Box>
                </Box>
            </Link>
        </>
    );
};

export default UserItem;