import { Typography, useMediaQuery, useTheme, Box, Grid, Paper, styled, Button} from '@mui/material';
import React from 'react';
import img from '../image/learn.png'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '44px',
  }))
 
const Courses = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
       <React.Fragment>
               {isMatch?(
                   <>
                   <Typography variant='h4' sx={{
                       textAlign: 'center',
                       fontFamily: 'Gilroy SemiBold',
                       fontWeight: 600,
                       lineHeight: '30px',
                       mb: '22px',
                       mt: '50px'
                   }}>Какие технологии<br/> вы изучите:</Typography>
                   <Box sx={{
                       width: '270px',
                       height: '280px',
                       background: '#EAF2F5',
                       borderRadius: '30px',
                       p: '17px',
                       ml: '22px'}}>
                       <Box sx={{
                           width: '267px',
                           height: '37px',
                           backgroundColor: '#5096FF',
                           borderRadius: '44px',
                           textAlign: 'center',
                           pt:'11px',
                           color:'#FFFFFF',
                           mb: '9px'
                       }}>Язык программирования Python</Box>
                       <Box sx={{
                           display: 'flex',   
                       }}>
                           <Box sx={{
                               width: '99px',
                               height: '37px',
                               backgroundColor: '#FFB359',
                               borderRadius: '44px',
                               textAlign: 'center',
                               pt:'11px',
                               color:'#FFFFFF',
                               mb: '9px',
                               mr: '8px'
                           }}>Сети</Box>
                           <Box sx={{
                               width: '160px',
                               height: '37px',
                               borderRadius: '44px',
                               textAlign: 'center',
                               backgroundColor: '#FF6F50',
                               pt:'11px',
                               color:'#FFFFFF'
                           }}>Базы данных</Box>
                       </Box >
                       <Box sx={{
                            width: '267px',
                            height: '37px',
                            backgroundColor: '#4BD071',
                            borderRadius: '44px',
                            textAlign: 'center',
                            pt:'11px',
                            color:'#FFFFFF',
                            mb: '9px'
                       }}>Фреймворки Flask и Django</Box>
                       <Box sx={{
                            width: '267px',
                            height: '37px',
                            backgroundColor: '#50C0FF',
                            borderRadius: '44px',
                            textAlign: 'center',
                            pt:'11px',
                            color:'#FFFFFF',
                            mb: '9px'
                       }}>Отладка и тестирование</Box>
                       <Box sx={{
                           display: 'flex',
                       }}>
                           <Box sx={{
                               width: '129px',
                               height: '37px',
                               textAlign: 'center',
                               borderRadius: '44px',
                               backgroundColor: '#4B77B9',
                               pt:'11px',
                               color:'#FFFFFF',
                               mr: '8px'
                           }}>Docker</Box>
                           <Box sx={{
                               width: '129px',
                               height: '37px',
                               textAlign: 'center',
                               borderRadius: '44px',
                               backgroundColor: '#AF93FF',
                               pt:'11px',
                               color:'#FFFFFF'
                           }}>Git</Box>
                       </Box>
                   </Box>
                   </>
               ):(
                   <section id="courses">
                   <Typography variant='h4' sx={{
                       fontFamily: 'Gilroy',
                       textAlign: 'center',
                       fontSize: '46px',
                       lineHeight: '46px',
                       mt: '50px',
                       mb: '35px'
                   }}>Какие технологии вы изучите:</Typography>
                   <Box sx={{
                       backgroundColor: '#EAF2F5',
                       borderRadius: '48px',
                       height: '400px',
                       display: 'flex'
                   }}>
                      <Box sx={{
                         ml: '122px',
                         pt: '42px'
                      }}><img src={img} alt="" /></Box>
                      <Box sx={{ flexGrow: 1, mt:'78px', ml: '59px' }}>
                   <Grid container spacing={2}>
                      <Grid item xs={6}>
                    <Item sx={{
                        backgroundColor: '#5096FF',
                        color: '#FFFFFF',
                        fontFamily: 'Gilroy',
                        fontSize: '15px'
                    }}>Язык программирования Python</Item>
                   </Grid>
                       <Grid item xs={3}>
                    <Item sx={{
                        backgroundColor: ' #FFB359',
                        color: '#FFFFFF',
                        fontFamily: 'Gilroy',
                        fontSize: '15px'
                    }}>Сети</Item>
                   </Grid>
                      <Grid item xs={4}>
                     <Item sx={{
                        backgroundColor: '#FF6F50',
                        color: '#FFFFFF',
                        fontFamily: 'Gilroy',
                        fontSize: '15px'
                    }}>Базы данных</Item>
                   </Grid>
                   <Grid item xs={6}>
                     <Item sx={{
                        backgroundColor: '#4BD071',
                        color: '#FFFFFF',
                        fontFamily: 'Gilroy',
                        fontSize: '15px'
                    }}>Фреймворки Flask и Django</Item>
                   </Grid>
                   <Grid item xs={6.5}>
                    <Item sx={{
                        backgroundColor: '#50C0FF',
                        color: '#FFFFFF',
                        fontFamily: 'Gilroy',
                        fontSize: '15px'
                    }}>Отладка и тестирование</Item>
                   </Grid>
                    <Grid item xs={2}>
                    <Item sx={{
                        backgroundColor: '#4B77B9',
                        color: '#FFFFFF',
                        fontFamily: 'Gilroy',
                        fontSize: '15px'
                    }}>Docker</Item>
                   </Grid> 
                   <Grid item xs={2}>
                    <Item sx={{
                        backgroundColor: '#AF93FF',
                        color: '#FFFFFF',
                        fontFamily: 'Gilroy',
                        fontSize: '15px'
                    }}>Git</Item>
                   </Grid>
                   </Grid>
                   <Typography variant='h5' sx={{
                       mt: '26px',
                       fontFamily: 'Gilroy SemiBold'
                   }}>Это необходимый минимум для<br/> современного backend-разработчика</Typography>
                       </Box> 
                   </Box>
                   </section>
               )}              
       </React.Fragment>
    );
}
export default Courses;


