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
                component={"p"} sx={{pb: "12px", pt: "8px"}}
                className={'title3SemiBold textPrimary'}
            >Мы никого не нашли</Typography>
            <Typography
                component={"p"}
                sx={{textAlign: "center",}} className={'headlineRegular textTetriary'}
            >Попробуй скорректировать запрос</Typography>
        </Box>
    );
};

export default EmptySearch;