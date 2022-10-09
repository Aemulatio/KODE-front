import React from 'react';
import {Box, Typography} from "@mui/material";
import glass from "../images/glass.png"

const EmptySearch = () => {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "fit-content",
            m: 'auto',
            // position: "absolute",
            left: 0, right: 0, top: 0, bottom: 0,
        }}>
            <img src={glass}/>
            <Typography
                component={"p"}
                sx={{
                    fontWeight: 600,
                    fontSize: "17px",
                    lineHeight: "22px",
                    textAlign: "center",
                    color: "#050510",
                    pb: "12px",
                    pt: "8px"
                }}>Мы никого не нашли</Typography>
            <Typography
                component={"p"}
                sx={{
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "20px",
                    textAlign: "center",
                    color: "#97979B"
                }}
            >Попробуй скорректировать запрос</Typography>
        </Box>
    );
};

export default EmptySearch;