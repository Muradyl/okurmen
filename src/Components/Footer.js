import React from 'react';
import './footer.css'
import {
    useMediaQuery,
    useTheme,
    Box,
    Grid,
    Typography,
    List,
    ListItemText,
    Divider,
} from '@mui/material'
import Instagram from "@mui/icons-material/Instagram";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTube from "@mui/icons-material/YouTube"

const Footer = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const list_items = ["Эмнени үйрөнөсүз", "Үйрөнүү процесси", "Курстун баасы", "Биздин контакт", "Катталуу"];
    const contacts = ['+7 (499) 348 93 96', 'info@ytyt.ru', `ИП Умаров Т. А.
    ИНН 745216229809 ОГРНИП 315745200001358`]
    return (
        <React.Fragment>
            {isMatch ? (
                <>
                    <Box sx={{display: 'flex', padding: '0 30px'}}>

                        <Typography variant='h5' sx={{color: 'black', mr: '73px', fontFamily: 'Gilroy', mt: 5}}>
                            YtYt
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                textTransform: "uppercase",
                                marginBottom: "1em",
                                fontSize: '15px',
                                fontWeight: 400,
                                mt: 5
                            }}
                        >
                            Школа <br/>
                            программирования
                        </Typography>
                    </Box>

                    <Box sx={{mt: 1, textAlign: 'center'}}>


                        <a href='https://instagram.com/okurmen_it?igshid=MDM4ZDc5MmU='>
                            <Instagram sx={{mr: 1}}/>
                        </a>
                        <a href=''>
                            <YouTube sx={{mr: 1}}/>
                        </a>
                        <a href=''>
                            <YouTube sx={{mr: 1}}/>
                        </a>
                        <a href=''>
                            <YouTube sx={{mr: 1}}/>
                        </a>

                    </Box>
                    <List sx={{textAlign: 'center'}}>
                        {list_items.map((item) => (
                            <ListItemText key={item}>
                                <Typography lineHeight={2} variant="caption2">
                                    {item}
                                </Typography>
                            </ListItemText>
                        ))}
                    </List>

                    <Typography className='footer-text1'
                                variant="body1"
                    >
                        +7 (499) 348 93 96

                    </Typography>


                    <Typography className='footer-text'
                                variant="body1"
                    >
                        info@ytyt.ru
                    </Typography>
                    <Typography sx={{
                        color: '#8E8E8E',
                        fontFamily: 'Gilroy',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '13px',
                        lineHeight: '23px',
                        textAlign: 'center',
                        mt: '20px'
                    }}
                                variant="body1"
                    >

                        ИП Умаров Т. А.<br/>
                        ИНН 745216229809 ОГРНИП <br/>
                        315745200001358
                    </Typography>

                    <br/>

                    <Divider sx={{
                        mb: 5
                    }}/>
                    <Typography variant='caption1'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    color: '#8E8E8E',
                                    fontFamily: 'Gilroy',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    fontSize: '12px',
                                    lineHeight: '23px',
                                    textAlign: 'center',
                                    mt: '20px'
                                }}

                    >© {new Date().getFullYear()} Okurmen — Все права защищены</Typography>


                </>
            ) : (
                <section id="contacts">
                    <Box
                        sx={{
                            color: "black",
                            borderRadius: 7,
                            mt: 10,
                            mb: '40px',
                            fontsize: {xs: "12px", md: "14px"},
                        }}
                    >
                        <Grid container spasing={2} justifyContent="center">
                            <Grid item md={6} lg={4}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        textTransform: "uppercase",
                                        marginBottom: "1em",
                                    }}
                                >
                                    Окурмэн окуу борбору
                                </Typography>
                                <Box sx={{mt: 4}}>


                                    <a href='https://instagram.com/okurmen_it?igshid=MDM4ZDc5MmU='>
                                        <Instagram sx={{mr: 1}}/>
                                    </a>
                                    <a href=''>
                                        <YouTube sx={{mr: 1}}/>
                                    </a>

                                </Box>
                            </Grid>
                            <Grid item md={6} lg={4}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        textTransform: "uppercase",
                                        marginBottom: "1em",
                                    }}
                                >
                                    Маалымат
                                </Typography>
                                <List>
                                    {list_items.map((item) => (
                                        <ListItemText key={item}>
                                            <Typography lineHeight={2} variant="caption2">
                                                {item}
                                            </Typography>
                                        </ListItemText>
                                    ))}
                                </List>
                            </Grid>
                            <Grid item md={6} lg={4}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        textTransform: "uppercase",
                                        marginBottom: "1em",
                                    }}
                                >
                                    My account
                                </Typography>
                                <List>
                                    {contacts.map((item) => (
                                        <ListItemText key={item}>
                                            <Typography lineHeight={2} variant="caption2">
                                                {item}
                                            </Typography>
                                        </ListItemText>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Box>
                    <Divider sx={{
                        mb: 5
                    }}/>
                    <Typography variant='caption1'
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}

                    >© {new Date().getFullYear()} Okurmen — Все права защищены</Typography>
                </section>
            )}
        </React.Fragment>
    );
}

export default Footer;

               
         