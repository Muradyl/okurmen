import React, {useState} from 'react';
import {AppBar, Toolbar, Typography, Tabs, Tab, Button, useMediaQuery, useTheme} from '@mui/material';
import DrawerComp from './DrawerComp';
import {checkHtmlElement} from "@testing-library/jest-dom/dist/utils";
// import * as constants from "constants"

const pages = [
    {
        name:'Чему вы научитесь',
        path:'#courses',
    },
    {
        name:'Процесс обучения',
        path:'#study',
    },
    {
        name:'Стоимость',
        path:'#prices',
    },
    {
        name:'Контакты',
        path:'#contacts',
    },
]


const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme()
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (


        <AppBar position='fixed' sx={{
            borderRadius: '75px',
            background: 'rgba(255, 255, 255, 0.9)',
            top: 0,

        }}>
            <Toolbar  sx={{}}>
                {
                    isMatch ? (
                        <>

                            <Typography variant='h5'
                                        sx={{color: 'black', mr: '73px', fontFamily: 'Gilroy'}}>YtYt</Typography>
                            <Button variant='contained' sx={{
                                borderRadius: '75px',
                                background: '#38BFF2'
                            }}>Войти</Button>
                            <DrawerComp/>

                        </>
                    ) : (
                            <>

                                <a href="Promo">
                                <Typography variant='h5'
                                            sx={{color: 'black', mr: '73px', fontFamily: 'Gilroy'}}>YtYt</Typography>
                                </a>
                                <Tabs value={value} onChange={(e, value) => setValue(value)}>
                                    {pages.map((page, index) => (
                                        <React.Fragment key={index}>
                                            <a href={page.path}>
                                                <Tab sx={{fontFamily: 'Gilroy' ,color:'black' }} label={page.name}/>
                                            </a>

                                        </React.Fragment>))}
                                </Tabs>
                                <Button sx={{ml: 'auto', color: '#3C3E50', fontFamily: 'Gilroy'}}>Регистрация</Button>
                                {/*<a href={page.path}>*/}
                                {/*    /!*<Tab sx={{fontFamily: 'Gilroy' ,color:'black' }} label={}/>*!/*/}
                                {/*</a>*/}

                                <Button variant='contained' sx={{
                                    borderRadius: '75px',
                                    ml: '14px',
                                    background: '#38BFF2',
                                    fontFamily: 'Gilroy'

                                }}>Войти</Button>

                            </>
                    )}
            </Toolbar>
        </AppBar>
    );
}

export default Header;

