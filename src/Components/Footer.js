import React from 'react';
import {useMediaQuery, 
    useTheme,
    Box,
    Grid,
    Typography,
    List,
    ListItemText,
    Divider,} from '@mui/material'
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import YouTube from "@mui/icons-material/YouTube"

const Footer = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
    const list_items = ["Эмнени үйрөнөсүз", "Үйрөнүү процесси", "Курстун баасы", "Биздин контакт", "Катталуу"];
    const contacts = ['+7 (499) 348 93 96','info@ytyt.ru',`ИП Умаров Т. А.
    ИНН 745216229809 ОГРНИП 315745200001358`]
    return (
        <React.Fragment>
            {isMatch?(
                <>
                </>
            ):(
                <>
                <Box
        sx={{
          color: "black",
          borderRadius: 7,
          mt: 10,
          mb: '40px',
          fontsize: { xs: "12px", md: "14px" },
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
            <Box sx={{ mt: 4 }}>
              <Facebook sx={{ mr: 1 }} />
              <Instagram sx={{ mr: 1 }} />
              <YouTube sx={{ mr: 1 }} />
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
        }} />
        <Typography variant='caption1' 
        sx={{
            display: 'flex',
            justifyContent: 'center'
        }}
        
        >© {new Date().getFullYear()} Okurmen — Все права защищены</Typography>
                </>
            )}
        </React.Fragment>
    );
}

export default Footer;

               
         