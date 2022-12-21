import React from 'react';
import { Typography, Box, useMediaQuery, useTheme,Button } from '@mui/material';
import './Promo.css'
import ArrowOutward  from '@mui/icons-material/ArrowOutward'

 
const Promo = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <React.Fragment>
          {isMatch?(
              <>
              </>
          ):(
            <>
            <Box sx={{
             display: 'flex',
             mt: '91px',
             borderRadius:'40px',
             }}>
                <Box >
                    <Typography sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 700,
                        fontSize: '77px',
                        lineHeight: '30px',
                        color: '#38BFF2',
                        mt: '56px',
                        ml: '53px',
                        mb: '30px'
                    }}>01</Typography>
                    <Typography  variant='h6' sx={{ 
                        fontFamily: 'Gilroy SemiBold',
                        ml: '53px',
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '30px',
                        mb: '19px'
                        }}>Весь материал разбит<br/> на небольшие уроки</Typography>
                    <Typography component='div' sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '23px',
                        ml: '53px'
                    }}>Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</Typography>
                </Box>
                <Box className="ver-line">
                    <Typography  sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 700,
                        fontSize: '77px',
                        lineHeight: '30px',
                        color: '#38BFF2',
                        mt: '56px',
                        ml:'100px',               
                        mb: '30px'
                    }}>02</Typography>
                    <Typography variant='h6' sx={{ 
                        fontFamily: 'Gilroy SemiBold',
                        ml: '100px',
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '30px',
                        mb: '19px'
                        }}>Обучение<br/> через практику</Typography>
                    <Typography  component='div' sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '23px',
                        ml: '100px'
                    }}>Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.</Typography>
                </Box>
                <Box className="ver-line">
                    <Typography  sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 700,
                        fontSize: '77px',
                        lineHeight: '30px',
                        color: '#38BFF2',
                        mt: '56px',
                        ml: '100px',
                        mb: '30px'
                    }}>03</Typography>
                    <Typography variant='h6'sx={{ 
                        fontFamily: 'Gilroy SemiBold',
                        ml: '100px',
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '30px',
                        mb: '19px'
                        }}>Нет ограничений<br/> по времени</Typography>
                    <Typography component='div' sx={{
                        fontFamily: 'Gilroy',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '23px',
                        ml: '100px'
                    }}>Можно совмещать учёбу с работой<br/> и другими делами. Не нужно выпращивать академический отпуск, если пришлость сделать перерыв.</Typography>
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',   
                justifyContent: 'center',
                mt: '94px'
            }}>
                <Button variant='contained' sx={{
                    borderRadius: '83px',
                    background: '#F15525',
                    width: '249px',
                    height: '70px',
                    mr: '24px'
                }} >Начать обучение <ArrowOutward sx={{pl: '10px',mb:'3px'}}/></Button>
                <Typography sx={{
                    fontFamily: 'Manrope',
                    fontWeight: 500,
                    fontSize: '17px',
                    lineHeight: '18px',
                    mt: '7px'
                }}>Попробуйте, первые уроки<br/> бесплатны, но нужно пройти<br/> тестирование</Typography>
            </Box>
            </>
          )}
        </React.Fragment>
    );
}

export default Promo;
