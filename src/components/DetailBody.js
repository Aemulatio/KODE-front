import React from 'react';
import {Box, Typography} from "@mui/material";
import Star from "../images/star.png"
import Phone from "../images/phone.png"
import {format} from "date-fns";

const {differenceInYears, parse} = require("date-fns")

function calculateAge(dob) {
    const date = parse(dob, "yyyy-MM-dd", new Date());
    console.log(date)
    return differenceInYears(new Date(), date);
}

const DetailBody = ({user}) => {
    return (
        <Box p={"8px 16px"}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                p: "20px 4px 20px 2px",
                borderBottom: "1px solid #F7F7F8"
            }}>
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                }}>
                    <img src={Star} alt="" style={{paddingRight: "14px"}}/>
                    <Typography className={'headlineMedium textPrimary'}>
                        {format(parse(user.birthday, "yyyy-MM-dd", new Date()), "dd MMMM yyyy")}
                    </Typography>
                </Box>
                <Typography className={'headlineMedium textTetriary'}>{calculateAge(user.birthday)} года</Typography>
            </Box>

            <Box
                sx={{}}
            >
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    pt: "22px",
                }}>
                    <img src={Phone} alt="" style={{paddingRight: "14px"}}/>
                    <Typography className={'headlineMedium textPrimary'}>{user.phone}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default DetailBody;