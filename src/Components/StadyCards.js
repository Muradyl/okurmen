import { Typography, Box , CardActionArea, CardContent, useMediaQuery, useTheme, Card, CardHeader} from '@mui/material';
import React from 'react';
import Avatar from "@mui/material/Avatar"
import img from '../image/index'
import './StadyCards.css'

const StadyCards = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const cards= [
        {
            id: 1,
            title: 'Огромное количество практики',
            description: 'Более 500 самостоятельных заданий и 20 полноценных больших проектов',
            img: img.second
        },
        {
            id: 2,
            title: 'Современные методики обучения',
            description: 'Спиральное обучение: погружаемся в материал постепенно, виток за витком',
            img: img.sixth
        },
        {
            id: 3,
            title: 'Простое и понятное изложение',
            description: 'Вместо заумных терминов – примеры из реального мира',
            img: img.first
        },
        {
            id: 4,
            title: 'Гибкий график занятий',
            description: 'Учитесь в любое время в удобном для вас темпе',
            img: img.third
        }
    ]
    const cards2= [
        {
            id: 1,
            title: 'Прямая связь с опытными программистами',
            description: 'Задавайте вопросы и отправляйте свой код на проверку',
            img: img.fifth
        },
        {
            id: 2,
            title: 'Оплата небольшими частями',
            description: 'Платите только за тот материал, который сейчас изучаете,а не за весь курс сразу',
            img: img.seventh
        },
        {
            id: 3,
            title: 'Быстрый и легкий возврат',
            description: 'Если передумаете учиться – вернем деньги за 3 рабочих дня',
            img: img.fourth
        }
    ]
    return (
        <React.Fragment>
        {isMatch?(
            <>
             <Typography variant='h4' sx={{
                fontFamily: 'Gilroy',
                textAlign: 'center',
                fontWeight: '600px',
                fontSize: '24px',
                lineHeight: '26px',
                mt: '58px'
           }}>Обучение в YtYt – это<br/>удобно и результативно</Typography>
           <Box>
           {cards.map((item)=>(<Card key={item.id} sx={{
               mt: '24px',
               width: '180px',
               height: '200px',
               backgroundColor: '#EAF2F5',
               borderRadius: '20px'
           }}>
           </Card>))}
           </Box>
            </>
        ):(
            <>
            <Typography variant='h4' sx={{
                fontFamily: 'Gilroy',
                textAlign: 'center',
                fontWeight: '600px',
                fontSize: '46px',
                lineHeight: '46px',
                mt: '84px'
           }}>Обучение в YtYt – это<br/>удобно и результативно</Typography>
                 <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {cards.map((item) => (
          <Card key={item.id} sx={{
            mt: '34px',
            width: '270px',
            height: '254px', 
            borderRadius: 7,
            backgroundColor: '#EAF2F5' }}>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar
                    variant="square"
                    sx={{ 
                        width: '56px',
                        height: '56px', 
                        mt: '40px',
                        marginLeft: "90px",
                         }}
                    aria-label="recipe"
                    src={item.img}
                  ></Avatar>
                }
              />
           <CardContent>
                <Typography sx={{
                    fontFamily: 'Gilroy SemiBold',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '18px',
                    mb: '10px',
                }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: "center",
        }}
      >
        {cards2.map((item) => (
          <Card key={item.id} sx={{
            mt: '27px',
            width: '270px',
            height: '254px', 
            borderRadius: 7 ,
            margin: "20px",
            backgroundColor: '#EAF2F5'}}>
            <CardActionArea>
              <CardHeader
                avatar={
                  <Avatar
                    variant="square"
                    sx={{ 
                        width: '56px',
                        height: '56px', 
                        mt: '40px',
                        marginLeft: "90px"
                         }}
                    aria-label="recipe"
                    src={item.img}
                  ></Avatar>
                }
              />
           <CardContent>
                <Typography sx={{
                    fontFamily: 'Gilroy SemiBold',
                    fontWeight: 600,
                    fontSize: '15px',
                    lineHeight: '18px',
                    mb: '10px',
                }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
            </>
        )} 
        </React.Fragment>
    );
}

export default StadyCards;
