import React, {useState} from 'react';
import {
    Box,
    IconButton, InputAdornment,
    InputBase,
    Modal,
    Paper, RadioGroup,
    SvgIcon,
    Tab,
    Tabs,
    Typography
} from "@mui/material";


const TopAppBar = (props) => {
    const {activeTab, setActiveTab, setSearch, order, setOrder, search, isOnline} = props;

    const title2SemiBold = {
        textAlign: 'center',
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const OrderModal = () => {
        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: "373px",
            minWidth: "300px",
            bgcolor: '#FFFFFF',
            borderRadius: "20px",
            p: "24px 16px 8px"
        };

        const handleRadioChange = (event, newValue) => {
            setOrder(newValue)
        }

        return (
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} className={"modal"}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        sx={title2SemiBold}
                        className={"title2SemiBold textPrimary"}
                    >
                        Сортировка
                    </Typography>
                    <IconButton
                        sx={{
                            width: "24px",
                            height: "24px",
                            background: "#F7F7F8",
                            position: "absolute",
                            right: "23px",
                            top: '24px'
                        }}
                        onClick={handleClose}
                    >
                        <CrossIcon/>
                    </IconButton>
                    <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={order}
                        onChange={handleRadioChange}
                        sx={{pt: "16px"}}
                    >
                        <CustomRadio name={"order"} text={"По алфавиту"} value={"firstName"} order={order}
                                     setOrder={setOrder}/>
                        <CustomRadio name={"order"} text={"По дню рождения"} value={"birthday"} order={order}
                                     setOrder={setOrder}/>
                    </RadioGroup>
                </Box>
            </Modal>
        )
    }

    const tabs = [
        {
            label: "Все",
            value: "all",
        },
        {
            label: "Дизайн",
            value: "design",
        },
        {
            label: "Аналитика",
            value: "analytics",
        },
        {
            label: "Менеджмент",
            value: "management",
        },
        {
            label: "iOS",
            value: "ios",
        },
        {
            label: "Android",
            value: "android",
        },
        {
            label: "QA",
            value: "qa",
        },
        {
            label: "Бэк-офис",
            value: "back_office",
        },
        {
            label: "Frontend",
            value: "frontend",
        },
        {
            label: "HR",
            value: "hr",
        },
        {
            label: "PR",
            value: "pr",
        },
        {
            label: "Backend",
            value: "backend",
        },
        {
            label: "Техподдержка",
            value: "support",
        },
    ]

    function handleChange(event, newValue) {
        setActiveTab(newValue);
    }

    const handleSearchChange = (e) => {
        setSearch(e.target.value.toLowerCase().trim())
    }

    return (
        <Box sx={{
            // p: "16px",
            // pb: 0,
            borderBottom: "1px solid #C3C3C6"
        }}>
            <Box sx={{
                p: "16px",
                pb: 0,
                background: (isOnline ? "#ffffff" : "#F44336"),
            }}>
                <Typography component={"p"} sx={{
                    pb: "16px",
                    pl: "8px",
                }} className={`title1Bold ${isOnline ? "textPrimary" : "offlineText"}`}>
                    Поиск
                </Typography>

                {isOnline ?
                    <Paper
                        elevation={0}
                        component="form"
                        fullwidth="true"
                        sx={{
                            p: '0px 12px',
                            mt: "8px",
                            mb: "8px",
                            display: 'flex',
                            alignItems: 'center',
                            background: "#F7F7F8",
                            borderRadius: "16px",
                        }}
                    >
                        <InputBase
                            sx={{
                                flex: 1, caretColor: "#6534FF",
                                "&.Mui-focused": {
                                    color: "#050510 !important"
                                },
                                "&.Mui-focused .MuiInputAdornment-positionStart svg": {
                                    fill: "#050510 !important",
                                }
                            }}
                            placeholder="Введи имя, тег, почту..."
                            className={'textMedium textDefaultSecondary'}
                            defaultValue={search}
                            onChange={e => handleSearchChange(e)}
                            onFocus={e => e.target.placeholder = ''}
                            onBlur={e => e.target.placeholder = 'Введи имя, тег, почту...'}
                            startAdornment={
                                <InputAdornment position={"start"} sx={{mr: 1, fill: "#C3C3C6"}}>
                                    <SearchIcon/>
                                </InputAdornment>
                            }
                        />
                        <IconButton onClick={handleOpen}>
                            <FilterIcon fill={order === 'birthday' ? "#6534FF" : "#C3C3C6"}/>
                        </IconButton>
                    </Paper>
                    : (
                        <Box sx={{p: "8px 8px 12px"}}>
                            <Typography className={"offlineText caption1Medium"} sx={{height: '32px'}}>
                                Не могу обновить данные. Проверь соединение с интернетом.
                            </Typography>
                        </Box>
                    )
                }
            </Box>
            <Tabs value={activeTab}
                  onChange={handleChange}
                  textColor={"inherit"}
                  sx={{
                      p: "0 16px ",
                      color: "#050510",
                      fontSize: "15px",
                      lineHeight: "20px",
                  }}
                  TabIndicatorProps={{
                      style: {
                          background: "#6534FF",
                          height: "2px",
                      }
                  }}
                  allowScrollButtonsMobile
                  scrollButtons
                  variant={"scrollable"}
            >
                {tabs.map(tab => (
                    <Tab label={tab.label} value={tab.value} key={tab.label}
                         className={activeTab === tab.value ? "textPrimary textSemibold" : "textTetriary textMedium"}
                    />
                ))}
            </Tabs>
            <OrderModal/>
        </Box>
    );
};

export default TopAppBar;


function SearchIcon(props) {
    return (
        <SvgIcon {...props}>
            <svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.7099 19.29L16.9999 15.61C18.44 13.8144 19.1374 11.5353 18.9487 9.24133C18.76 6.94733 17.6996 4.81281 15.9854 3.27667C14.2713 1.74053 12.0337 0.919537 9.73283 0.982497C7.43194 1.04546 5.24263 1.98759 3.61505 3.61517C1.98747 5.24275 1.04534 7.43207 0.982375 9.73295C0.919414 12.0338 1.74041 14.2714 3.27655 15.9855C4.81269 17.6997 6.94721 18.7601 9.2412 18.9488C11.5352 19.1375 13.8143 18.4401 15.6099 17L19.2899 20.68C19.3829 20.7738 19.4935 20.8482 19.6153 20.8989C19.7372 20.9497 19.8679 20.9758 19.9999 20.9758C20.1319 20.9758 20.2626 20.9497 20.3845 20.8989C20.5063 20.8482 20.6169 20.7738 20.7099 20.68C20.8901 20.4936 20.9909 20.2444 20.9909 19.985C20.9909 19.7257 20.8901 19.4765 20.7099 19.29ZM9.9999 17C8.61544 17 7.26206 16.5895 6.11091 15.8203C4.95977 15.0511 4.06256 13.9579 3.53275 12.6788C3.00293 11.3997 2.86431 9.99226 3.13441 8.63439C3.4045 7.27653 4.07119 6.02925 5.05016 5.05028C6.02912 4.07131 7.27641 3.40463 8.63427 3.13453C9.99214 2.86443 11.3996 3.00306 12.6787 3.53287C13.9578 4.06268 15.051 4.95989 15.8202 6.11103C16.5894 7.26218 16.9999 8.61556 16.9999 10C16.9999 11.8565 16.2624 13.637 14.9497 14.9498C13.6369 16.2625 11.8564 17 9.9999 17Z"
                    fill={props.fill}
                />
            </svg>
        </SvgIcon>
    )
}

function FilterIcon(props) {
    return (
        <SvgIcon {...props}>
            <svg viewBox="0 0 21 12" fill={'inherit'} xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1.5 0C1.30222 0 1.10888 0.0586491 0.94443 0.16853C0.779981 0.278412 0.651809 0.434591 0.576121 0.617317C0.500433 0.800043 0.48063 1.00111 0.519215 1.19509C0.5578 1.38907 0.653041 1.56725 0.792894 1.70711C0.932746 1.84696 1.11093 1.9422 1.30491 1.98079C1.49889 2.01937 1.69996 1.99957 1.88268 1.92388C2.06541 1.84819 2.22159 1.72002 2.33147 1.55557C2.44135 1.39112 2.5 1.19778 2.5 1C2.5 0.734784 2.39464 0.48043 2.20711 0.292893C2.01957 0.105357 1.76522 0 1.5 0ZM5.5 2H19.5C19.7652 2 20.0196 1.89464 20.2071 1.70711C20.3946 1.51957 20.5 1.26522 20.5 1C20.5 0.734784 20.3946 0.48043 20.2071 0.292893C20.0196 0.105357 19.7652 0 19.5 0H5.5C5.23478 0 4.98043 0.105357 4.79289 0.292893C4.60536 0.48043 4.5 0.734784 4.5 1C4.5 1.26522 4.60536 1.51957 4.79289 1.70711C4.98043 1.89464 5.23478 2 5.5 2ZM5.5 5C5.30222 5 5.10888 5.05865 4.94443 5.16853C4.77998 5.27841 4.65181 5.43459 4.57612 5.61732C4.50043 5.80004 4.48063 6.00111 4.51922 6.19509C4.5578 6.38907 4.65304 6.56725 4.79289 6.70711C4.93275 6.84696 5.11093 6.9422 5.30491 6.98079C5.49889 7.01937 5.69996 6.99957 5.88268 6.92388C6.06541 6.84819 6.22159 6.72002 6.33147 6.55557C6.44135 6.39112 6.5 6.19778 6.5 6C6.5 5.73478 6.39464 5.48043 6.20711 5.29289C6.01957 5.10536 5.76522 5 5.5 5ZM9.5 10C9.30222 10 9.10888 10.0586 8.94443 10.1685C8.77998 10.2784 8.65181 10.4346 8.57612 10.6173C8.50043 10.8 8.48063 11.0011 8.51922 11.1951C8.5578 11.3891 8.65304 11.5673 8.79289 11.7071C8.93275 11.847 9.11093 11.9422 9.30491 11.9808C9.49889 12.0194 9.69996 11.9996 9.88268 11.9239C10.0654 11.8482 10.2216 11.72 10.3315 11.5556C10.4414 11.3911 10.5 11.1978 10.5 11C10.5 10.7348 10.3946 10.4804 10.2071 10.2929C10.0196 10.1054 9.76522 10 9.5 10ZM19.5 5H9.5C9.23478 5 8.98043 5.10536 8.79289 5.29289C8.60536 5.48043 8.5 5.73478 8.5 6C8.5 6.26522 8.60536 6.51957 8.79289 6.70711C8.98043 6.89464 9.23478 7 9.5 7H19.5C19.7652 7 20.0196 6.89464 20.2071 6.70711C20.3946 6.51957 20.5 6.26522 20.5 6C20.5 5.73478 20.3946 5.48043 20.2071 5.29289C20.0196 5.10536 19.7652 5 19.5 5ZM19.5 10H13.5C13.2348 10 12.9804 10.1054 12.7929 10.2929C12.6054 10.4804 12.5 10.7348 12.5 11C12.5 11.2652 12.6054 11.5196 12.7929 11.7071C12.9804 11.8946 13.2348 12 13.5 12H19.5C19.7652 12 20.0196 11.8946 20.2071 11.7071C20.3946 11.5196 20.5 11.2652 20.5 11C20.5 10.7348 20.3946 10.4804 20.2071 10.2929C20.0196 10.1054 19.7652 10 19.5 10Z"
                    fill={props.fill}
                />
            </svg>
        </SvgIcon>
    )
}

function CrossIcon(props) {
    return (
        <SvgIcon {...props} sx={{width: "10px", height: "10px"}}>
            <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.73641 0.263604C10.0879 0.615076 10.0879 1.18492 9.73641 1.5364L6.273 5L9.73641 8.46362C10.0586 8.7858 10.0854 9.29148 9.81695 9.64424L9.73641 9.73641C9.38494 10.0879 8.81509 10.0879 8.46362 9.73641L5 6.273L1.5364 9.73641C1.18492 10.0879 0.615076 10.0879 0.263604 9.73641C-0.0878679 9.38494 -0.0878679 8.81509 0.263604 8.46362L3.727 5L0.263604 1.5364C-0.0585786 1.21421 -0.0854272 0.708534 0.183058 0.355769L0.263604 0.263604C0.615076 -0.087868 1.18492 -0.087868 1.5364 0.263604L5 3.727L8.46362 0.263604C8.81509 -0.087868 9.38494 -0.087868 9.73641 0.263604Z"
                    fill="#C3C3C6"/>
            </svg>
        </SvgIcon>
    )
}

function CustomRadio({text, name, value, order, setOrder}) {

    const handleChange = (e) => {
        setOrder(e.target.value)
    }

    return (
        <Box
            sx={{
                p: "20px 2px"
            }}
        >
            <label className="container headlineMedium textPrimary">{text}
                <input type="radio" defaultValue={value} name={name} defaultChecked={order === value}
                       onChange={e => handleChange(e)}
                />
                <span className="checkmark"></span>
            </label>
        </Box>
    )
}