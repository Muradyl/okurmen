import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
const pages = ['Чему вы научитесь','Процесс обучения','Стоимость','Контакты', 'Регистрация' ]

const DrawerComp = () => {
    const [openDrawer, setopenDrawer] = useState(false);
    return (
        <React.Fragment>
            <Drawer open={openDrawer} onClose={()=>setopenDrawer(false)}>
                <List>
                    {pages.map((page,index)=>(
                         <ListItemButton  onClick={()=> setopenDrawer(false)} key={index}>
                         <ListItemIcon>
                             <ListItemText>
                                {page}
                             </ListItemText>
                         </ListItemIcon>
                     </ListItemButton>
                    ))}  
                </List>
            </Drawer>
            <IconButton sx={{color:'#F15525', ml:'auto'}} onClick={()=> setopenDrawer(!openDrawer)}>
                <MenuIcon/>
            </IconButton>
        </React.Fragment>
    );
}

export default DrawerComp;
