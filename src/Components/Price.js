import React from 'react';
import { Typography, useMediaQuery, useTheme, Box} from '@mui/material';
import img1 from '../image/Group.png'
import img2 from '../image/first.png'
import img3 from '../image/pay.png'

const Price = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <React.Fragment>
            {isMatch?(
                <>
                </>
            ):(
                <>
                <Typography variant='h4' sx={{
                    textAlign: 'center',
                    mt: '100px',
                    fontFamily: 'Gilroy SemiBold',
                    fontSize: '46px'
                }}>Стоимость обучения</Typography>
                <Box sx={{
                    display: 'flex'
                }}>
                    <Box sx={{
                        display: 'flex',
                        mt: '35px'
                    }}>
                    <div><img src={img1} alt="" /> </div>                      
                        <Typography  sx={{
                            ml: '18px',
                            mr: '20px',
                            fontfamily: 'Gilroy',
                            fontWeight: 300,
                            fontSize: '16px',
                            lineHeight: '20px',
                        }}>Весь курс разбит на несколько блоков.<br/>Оплата поэтапная вы платите только, за тот блок, который сейчас проходите.</Typography>
                    </Box>
                    <Box  sx={{
                    display: 'flex',
                    mt: '35px'
                
                }}>
                    <div><img src={img2} alt="" /></div>  
                        <Typography   sx={{
                             ml: '18px',
                             mr: '18px',
                             ontfamily: 'Gilroy',
                            fontWeight: 300,
                            fontSize: '16px',
                            lineHeight: '20px',
                        }}>Любой из блоков вы можете оплатить в рассрочку</Typography>
                    </Box>
                    <Box  sx={{
                    display: 'flex',
                    mt: '35px'
                }}>
                    <div><img src={img3} alt="" /></div>  
                        <Typography sx={{
                             ml: '20px',
                             ontfamily: 'Gilroy',
                            fontWeight: 300,
                            fontSize: '16px',
                            lineHeight: '20px',
                        }}>Если передумаете учиться, то возврат<br/> можно оформить, в любой момент. Возвращаем деньги за 3 рабочих дня.</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    mt: '40px',
                }}>
                    <Box sx={{
                        display: 'flex',
                        height: '57px',
                        color: '#38BFF2',
                        ml: '60px',      
                    }}>
                        <Typography sx={{  fontFamily: 'Gilroy',fontWeight: 700,
                       fontSize: '16px'}}>Блок</Typography>
                        <Typography sx={{ml:'458px', mr: '190px',  fontFamily: 'Gilroy',fontWeight: 700,fontSize: '16px'}}>Стоимость (₽)</Typography>
                        <Typography sx={{  fontFamily: 'Gilroy',fontWeight: 700,
                       fontSize: '16px'}}>Расчетное время обучения (мес.) *</Typography>
                    </Box>
                    <Box sx={{
                         height: '57px',
                        display: 'flex',
                        backgroundColor:'#F3F3F3',
                       borderRadius: '10px',
                    }}>
                        <Typography sx={{ml: '60px',mt: '17px',fontFamily: 'Gilroy'}}>Введение в программированиe</Typography>
                        <Typography sx={{ml:'285px', mr: '220px',mt: '17px',fontFamily: 'Gilroy'}}>Бесплатно</Typography>
                        <Typography  sx={{  fontFamily: 'Gilroy',mt: '17px'}}>0.5</Typography>
                    </Box>
                    <Box sx={{
                         height: '57px',
                        display: 'flex',
                       
                    }}>
                        <Typography  sx={{ml: '60px',mt: '17px',fontFamily: 'Gilroy'}}>Основы программирования на Python</Typography>
                        <Typography  sx={{ml:'237px', mr: '255px',mt: '17px',fontFamily: 'Gilroy'}}>9 900</Typography>
                        <Typography  sx={{fontFamily: 'Gilroy',mt: '17px'}}>1</Typography>
                    </Box>
                    <Box sx={{
                         height: '57px',
                        display: 'flex',
                        backgroundColor:'#F3F3F3',
                       borderRadius: '10px',
                      
                    }}>
                        <Typography  sx={{ml: '60px',mt: '17px',fontFamily: 'Gilroy'}}>Python, продвинутый уровень</Typography>
                        <Typography sx={{ml:'288px', mr: '250px',mt: '17px',fontFamily: 'Gilroy'}}>14 900</Typography>
                        <Typography  sx={{fontFamily: 'Gilroy',mt: '17px'}}>2.5</Typography>
                    </Box>
                    <Box sx={{
                         height: '57px',
                        display: 'flex',
                       
                    }}>
                        <Typography  sx={{ml: '60px',mt: '17px',fontFamily: 'Gilroy'}}>Сети + фреймворк Flask</Typography>
                        <Typography sx={{ml:'323px', mr: '250px',mt: '17px',fontFamily: 'Gilroy'}}>14 900</Typography>
                        <Typography  sx={{fontFamily: 'Gilroy',mt: '17px'}}>2.5</Typography>
                    </Box>
                    <Box sx={{
                         height: '57px',
                        display: 'flex',
                        backgroundColor:'#F3F3F3',
                       borderRadius: '10px',
                    }}>
                        <Typography  sx={{ml: '60px',mt: '17px',fontFamily: 'Gilroy'}}>Базы данных</Typography>
                        <Typography sx={{ml:'400px', mr: '252px',mt: '17px',fontFamily: 'Gilroy'}}>14 900</Typography>
                        <Typography  sx={{fontFamily: 'Gilroy',mt: '17px'}}>2</Typography>
                    </Box>
                    <Box sx={{
                         height: '57px',
                        display: 'flex',                        
                    }}>
                        <Typography  sx={{ml: '60px',mt: '17px',fontFamily: 'Gilroy'}}>Фреймворк Django</Typography>
                        <Typography sx={{ml:'360px', mr: '253px',mt: '17px',fontFamily: 'Gilroy'}}>14 900</Typography>
                        <Typography  sx={{fontFamily: 'Gilroy',mt: '17px'}}>2</Typography>
                    </Box>
                    <Box sx={{
                         height: '57px',
                        display: 'flex',
                        backgroundColor:'#F3F3F3',
                       borderRadius: '10px',
                    }}>
                        <Typography  sx={{ml: '60px',mt: '17px',fontFamily: 'Gilroy'}}>Разработка «боевого» проекта </Typography>
                        <Typography sx={{ml:'280px', mr: '258px',mt: '17px',fontFamily: 'Gilroy'}}>9 900</Typography>
                        <Typography  sx={{fontFamily: 'Gilroy',mt: '17px'}}>1.5</Typography>
                    </Box>
                    <Box sx={{
                         height: '57px',
                        display: 'flex',
                    }}>
                        <Typography  sx={{ml: '60px',mt: '17px',fontFamily: 'Gilroy',fontWeight: 700,fontSize: '24px'}}>Итого</Typography>
                        <Typography sx={{ml:'423px', mr: '230px',mt: '17px',fontFamily: 'Gilroy',fontWeight: 700,fontSize: '24px'}}>79 400</Typography>
                        <Typography  sx={{fontFamily: 'Gilroy',mt: '17px',fontWeight: 700,fontSize: '24px'}}>12</Typography>
                    </Box>                  
                </Box>
                </>
            )}
        </React.Fragment>
    );
}

export default Price;
