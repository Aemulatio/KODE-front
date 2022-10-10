import React from 'react';
import {Box, Typography} from "@mui/material";
import UFO from "../images/ufo.svg"

const CriticalError = ({setRefresh}) => {

    const handleClick = () => {
        setRefresh(new Date())
    }
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
            <img src={UFO} alt={'UFO'}/>
            <Box>
                <Typography
                    component={"p"} sx={{pt: "8px"}}
                    className={'title3SemiBold textPrimary'}
                >
                    Какой-то сверхразум все сломал
                </Typography>
                <Typography
                    component={"p"}
                    sx={{textAlign: "center", p: "12px 0"}} className={'headlineRegular textTetriary'}
                >
                    Постараемся быстро починить
                </Typography>
                <Typography
                    component={"p"}
                    sx={{textAlign: "center", color: "#6534FF", cursor: 'pointer'}} className={'headlineSemibold'}
                    onClick={handleClick}
                >
                    Попробовать снова
                </Typography>
            </Box>
        </Box>
    );
};

export default CriticalError;