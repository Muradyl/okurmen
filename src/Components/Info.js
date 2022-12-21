import { Typography ,Button, Box, useTheme, useMediaQuery} from '@mui/material';
import React from 'react';
import Divider from '@mui/material/Divider';
import img1 from '../image/heroimg.png'
 import ArrowOutward  from '@mui/icons-material/ArrowOutward'
 import './Info.css'

const Info = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <React.Fragment>
            <Box className='Info'>
                {isMatch?(
                    <>
                    <Typography variant='h4' sx={{
                        fontFamily: 'Gilroy',
                        textAlign: 'center',
                        mt: '24px',
                        mb: '18px',
                        fontweight: '500px',
                        lineHeight: '33px'
                    }}> Школа <br/> <span className='it'>программирования</span><br/>  для тех, кому нужны <br/>реальные навыки,<br/>а не просто сертификат</Typography>
                    <Divider light sx={{width: '100%'}} />
                    <Typography sx={{
                        fontFamily: 'Gilroy',
                        mt: '9px',
                        textAlign: 'center',
                        fontSize: '18px',
                        mb: '21px'
                    }}>Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</Typography>
                    <Button variant='contained' sx={{
                             fontFamily: 'Gilroy',
                             borderRadius: '82px',
                             width: '300px',
                             height: '70px',
                             background:'#F15525',
                             fontSize: '17px', 
                             mb: '91px' ,
                             ml: '25px'                     
                         }}>Пройти тестирование <ArrowOutward sx={{
                             pl: '12px',
                             mb:'7px',
                            }} /></Button>
                         <img src={img1} alt=""/>
                    </>
                ):(
                    <>
                    <Box sx={{ 
                         display: 'flex',
                         justifyContent:'space-between',
                         mt: '70px'}}>
                     <div>
                    <Typography variant='h4' sx={{ 
                        fontFamily: 'Gilroy',
                        mb:'31px',
                        fontSize: '46px',
                        width:'638px',
                        }}>
                    Школа <span className='it'>программирования</span> <br/> для тех, кому нужны реальные навыки,а не просто сертификат
                    </Typography> 
                    <Divider light sx={{width: '64%'}} />
                    <Typography  sx={{ 
                        fontFamily: 'Gilroy',
                        mt:'14px',
                        fontSize: '20px',
                        mb: '18px'
                        }}> Пройдите тестирование, чтобы получить доступ <br/> к бесплатным вводным урокам</Typography>
                         <Button variant='contained' sx={{
                             fontFamily: 'Gilroy',
                             borderRadius: '82px',
                             width: '321px',
                             height: '70px',
                             background:'#F15525',
                             fontSize: '17px',                          
                         }}>Пройти тестирование <ArrowOutward sx={{pl: '12px',mb:'7px'}} /></Button>
                    </div>
                    <div>
                    <img src={img1} alt="" />
                    </div>
                    </Box>
                    </>
                )
                }

            </Box>
        </React.Fragment>
   ) }

export default Info;
