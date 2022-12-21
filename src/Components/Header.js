import React,{useState} from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, useMediaQuery, useTheme} from '@mui/material';
import DrawerComp from './DrawerComp';
 const pages = ['Чему вы научитесь','Процесс обучения','Стоимость','Контакты' ]
const Header = () => {
    const [value, setValue] = useState();
    const theme = useTheme()
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <AppBar position='static' sx={{
            borderRadius: '75px',
            background: 'rgba(255, 255, 255, 0.9)',
            mt: 2
        }}>
            <Toolbar>
                {
                  isMatch? (
                    <>
                    <Typography variant='h5' sx={{color:'black',mr:'73px',fontFamily: 'Gilroy'}}>YtYt</Typography>
                    <Button variant='contained' sx={{
                            borderRadius:'75px',
                            background: '#38BFF2'
                        }}>Войти</Button>
                    <DrawerComp/>
                    </>
                ):(
                    <>
                    <Typography variant='h5' sx={{color:'black',mr:'73px',fontFamily: 'Gilroy'}}>YtYt</Typography>
                     <Tabs value={value} onChange={(e,value)=> setValue(value)}>
                         {pages.map((page,index)=>(<Tab sx={{fontFamily: 'Gilroy'}} key={index} label={page}/>))}
                     </Tabs>
                        <Button sx={{ml: 'auto',color: '#3C3E50',fontFamily: 'Gilroy'}}>Регистрация</Button>
                        <Button variant='contained' sx={{
                            borderRadius:'75px',
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

