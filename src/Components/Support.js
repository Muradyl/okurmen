import { Box,Typography,Button,useMediaQuery, useTheme} from '@mui/material';
import React from 'react';
import img from '../image/svg-gobbler (1) 2.png'
import ArrowOutward from '@mui/icons-material/ArrowOutward'

const Support = () => {
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
                height: '200px',
                background: '#EAF2F5',
                borderRadius: '30px',
                mt: '80px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <img src={img} alt="" />
                <Typography  sx={{
                    fontFamily: 'Gilroy',
                    fontSize: '17px',
                    lineHeight: '22px',
                    letterSpacing: '0em'
                }}>
                Все блоки проходятся строго по порядку. Пропустить какой-то блок или <br/> начать обучение с середины нельзя, даже если вы считаете, что уже<br/>знаете какую-то часть материала. Только так мы можем гарантировать,<br/> что вы получите все знания, предусмотренные учебной программой
                </Typography>
                <Button variant='contained' sx={{
                     borderRadius: '82px',
                     width: '311x',
                     height: '70px',
                     color:'white',
                     backgroundColor: '#F15525'
                 }}>
                Начать обучение <ArrowOutward />
                </Button>

            </Box>   
            </>
        )}
            </React.Fragment>
    );
}

export default Support;