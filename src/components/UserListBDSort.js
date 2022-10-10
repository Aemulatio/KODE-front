import React from 'react';
import UserItem from "./UserItem";
import {compareAsc, getYear, isBefore, parse, setYear} from "date-fns";
import {Box, Typography} from "@mui/material";

const UserListBdSort = ({users}) => {
    const textMedium = {
        fontFamily: 'Inter',
        fontWeight: 500,
        fontSize: '15px',
        lineHeight: '20px',
        textAlign: 'center',
        color: "#C3C3C6"
    }

    const sortItems = (a, b) => {
        return compareAsc(
            setYear(parse(a.birthday, "yyyy-MM-dd", new Date()), 0),
            setYear(parse(b.birthday, "yyyy-MM-dd", new Date()), 0)
        )
    }

    const comingBD = [];
    const nextYearDB = [];
    const usersList = [...users.sort(sortItems)];
    const thisYearNumber = getYear(new Date());

    for (const usersListKey in usersList) {
        if (isBefore(setYear(parse(usersList[usersListKey].birthday, "yyyy-MM-dd", new Date()), thisYearNumber), new Date())) {
            nextYearDB.push(usersList[usersListKey])
        } else {
            comingBD.push(usersList[usersListKey])
        }
    }

    return (
        <>
            {
                comingBD.map(user => (
                    <UserItem user={user} key={user.id} order={'birthday'}/>
                ))
            }
            <Box
                sx={{
                    p: "24px",
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <Box className={"horizontalDivider"} sx={{mr: "12px"}}/>
                <Typography sx={{...textMedium, m: "0 50px"}}>{thisYearNumber + 1}</Typography>
                <Box className={"horizontalDivider"} sx={{ml: "12px"}}/>
            </Box>
            {
                nextYearDB.map(user => (
                    <UserItem user={user} key={user.id} order={'birthday'}/>
                ))
            }
        </>
    );
};

export default UserListBdSort;