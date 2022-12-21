import React from 'react'; 
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import img2 from '../image/g10 (1) 1.png'
import img1 from '../image/6502421 1 (1) 1.png'

const Modals = () => {
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
                   mt: '100px'
               }}>
               <Box sx={{
                   borderRadius: '40px',
                   background: '#EAF2F5',
                   p: '41px 65px'
               }}>
               <img src={img2} alt="" />
               </Box>
               <Box sx={{
                   ml: '29px',
                   borderRadius: '40px',
                   background: '#EAF2F5',
                   width: '730px',
                   height: '313px',
                   textAlign: 'center',
               }}>
                   <Typography variant='h4' sx={{
                       fontFamily: 'Gilroy SemiBold',
                       fontWeight: 600,
                       fontSize: '30px',
                       lineHeight: '30px',
                       mb: '18px',
                       mt: '54px'
                   }}>Помощь и поддержка</Typography>
                   <Typography sx={{
                       mb: '15px',
                       fontFamily: 'Gilroy',
                       fontWeight: 400,
                       fontSize: '18px' 
                   }}>Если в процессе обучения возникнут сложности, вы<br/> всегда сможете задать вопрос своему наставнику.</Typography>
                   <Typography sx={{
                       mb: '15px',
                       fontFamily: 'Gilroy',
                       fontWeight: 400,
                       fontSize: '18px'}}>Раз в несколько уроков вы будете получать большое задание, которое<br/>нужно будет сдавать на проверку код-ревьюеру. Он внимательно<br/> изучит ваш код, найдет ошибки и поможет вам стать лучше. </Typography>
               </Box>
           </Box>
           <Box sx={{
                display: 'flex',
                mt: '30px'
           }}>
           <Box sx={{
                   mr: '30px',
                   borderRadius: '40px',
                   background: '#EAF2F5',
                   width: '730px',
               }}>
                   <Typography sx={{
                       fontFamily: 'Gilroy SemiBold',
                       fontWeight: 600,
                       fontSize: '30px',
                       lineHeight: '30px',
                       mb: '18px',
                       mt: '54px',
                       ml:' 100px',
                   }}>Методика обучения
                   </Typography>
                   <Typography  component='div' sx={{
                       mb: '15px',
                       fontFamily: 'Gilroy',
                       fontWeight: 400,
                       fontSize: '18px',
                       ml:' 100px'
                   }}>Весь учебный материал структурирован по принципу<br/> «спирального обучения». Сначала вы получаете базовые знания,<br/> а затем на каждом витке спирали углубляетесь в изученные темы,<br/> доводя их понимание до совершенства. Такой подход упрощает<br/> обучение и гарантирует, что вы не пропустите ничего важного.</Typography>
               </Box>
               <Box sx={{
                   borderRadius: '40px',
                   background: '#EAF2F5',
                   p: '20px 71px'
               }}>
               <img src={img1} alt="" />
               </Box>
           </Box>
           </>
       )}
       </React.Fragment>
    );
}

export default Modals;
