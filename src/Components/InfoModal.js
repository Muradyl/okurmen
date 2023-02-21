import * as React from 'react';
import {Box , Card,CardActions, CardContent,Button,Typography,Backdrop
    ,Modal,Fade,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel} from '@mui/material'


const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
    boxShadow: '24',
    p: '4',
    width: '740px',
    height: '345px',
    background: '#FFFFFF',
    borderRadius: '30px',
    border: 'none',
    textAlign:'center'

};
const styles = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
    boxShadow: '24',
    p: '4',
    width: '740px',
    height: '405px',
    background: '#FFFFFF',
    borderRadius: '30px',
    border: 'none',

};

const styles1 = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
    boxShadow: '24',
    p: '4',
    width: '740px',
    height: '430px',
    background: '#FFFFFF',
    borderRadius: '30px',
    border: 'none',

};

const styles2 = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'background.paper',
    boxShadow: '24',
    p: '4',
    width: '740px',
    height: '300px',
    background: '#FFFFFF',
    borderRadius: '30px',
    border: 'none',
    textAlign: 'center'

};


export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [opens1, setOpens1] = React.useState(false);
    const handleOpens1 = () => setOpens1(true);
    const handleCloses1 = () => setOpens1(false);



    const [opens, setOpens] = React.useState(false);
    const handleOpens = () => setOpens(true);
    const handleCloses = () => setOpens(false);



    const [opens2, setOpens2] = React.useState(false);
    const handleOpens2 = () => setOpens2(true);
    const handleCloses2 = () => setOpens2(false);

    return (
        <div>
            <Button onClick={handleOpen}>Пройти тестирование</Button>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2"
                                    sx={{mt:'55px',}}>
                            Перед тем, как приступить к обучению,
                            <br/> необходимо пройти небольшой тест
                        </Typography>
                        <Typography id="transition-modal-description" sx={{mt: 2, padding:' 0 55px'}}>
                            Тест состоит из 4 заданий на логическое мышление и прочие навыки,
                            необходимые программисту. Задания не самые простые. Но ни в коем
                            случае не выбирайте ответы наугад. Если вы не можете дать
                            правильный ответ – выбирайте пункт «Не знаю».
                        </Typography>
                        <Typography sx={{ mt: 3,  padding:' 0 55px'}}>
                            <Button sx={{width: '180px',
                                height: '60px' ,
                                background: '#F15525',
                                borderRadius: '82px',
                                color: '#FFFFFF' }}>
                                Начать тест
                            </Button>

                        </Typography>

                    </Box>
                </Fade>
            </Modal>





                <Button onClick={handleOpens}>Начать тест</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={opens}
                    onClose={handleCloses}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >


                    <Fade in={opens}>
                        <Box sx={styles}>
                            <Typography sx={{ mt:5,   padding:' 0 55px',}}>
                                <Button sx={{width: '160px',
                                    height: '40px' ,
                                    background: '#EAEAEA',
                                    borderRadius: '40px',
                                    color: '#22253B',
                                }}>
                                    ЗАДАНИЕ №1
                                </Button>

                            </Typography>


                            {/*<Typography id="transition-modal-title" variant="h6" component="h2"*/}
                            {/*            sx={{mt:'55px',}}>*/}
                            {/*    Перед тем, как приступить к обучению,*/}
                            {/*    <br/> необходимо пройти небольшой тест*/}
                            {/*</Typography>*/}
                            <Typography id="transition-modal-description" sx={{mt: 2, padding:' 0 55px'}}>
                                Иван Иванович купил в магазине у дома несколько пачек макарон по 40 рублей,
                                несколько пачек печенья по 32 рубля и 2 пакета сока. Продавщица сказала, что с него
                                525 рублей (скидка не предусмотрена). Иван Иванович заявил, что его пытаются
                                обсчитать. Действительно ли продавщица ошиблась в подсчетах?
                            </Typography>


                            <FormControl sx={{display:'flex'}}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                    sx={{mt: 5, padding:' 0 55px'}}
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Да, сумма явно неверная" />
                                    <FormControlLabel value="male" control={<Radio />} label="Нет, такая сумма вполне могла получиться" />
                                    <FormControlLabel value="other" control={<Radio />} label="Не знаю, не получается решить" />
                                </RadioGroup>
                                <Typography sx={{ mt: 3,  padding:' 0 55px'}}>
                                    <Button sx={{width: '150px',
                                        height: '50px' ,
                                        background: '#F15525',
                                        borderRadius: '82px',
                                        color: '#FFFFFF',
                                        ml: 58,
                                        mt: -16
                                    }}>

                                        Ответить
                                    </Button>

                                </Typography>
                            </FormControl>


                        </Box>
                    </Fade>
                </Modal>






            <Button onClick={handleOpens1}>Ответить</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={opens1}
                onClose={handleCloses1}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >


                <Fade in={opens1}>
                    <Box sx={styles1}>
                        <Typography sx={{ mt:5,   padding:' 0 55px',}}>
                            <Button sx={{width: '160px',
                                height: '40px' ,
                                background: '#EAEAEA',
                                borderRadius: '40px',
                                color: '#22253B',
                            }}>
                                ЗАДАНИЕ №1
                            </Button>

                        </Typography>

                        <Typography id="transition-modal-title" variant="h6" component="h2"
                        sx={{mt:3,padding:' 0 55px'}}>
                            Правильно! С логикой у вас все отлично
                        </Typography>

                        <Typography id="transition-modal-description" sx={{mt: 2, padding:' 0 55px'}}>
                            Так как 1 пачка макарон стоит 40 рублей, то любое количество пачек
                            будет стоить четное число рублей. Аналогично с печеньем. А так как
                            пакетов сока ровно 2, то за сок тоже нужно будет отдать четное число
                            рублей. Получается, что ни при каких условиях в результате не может
                            получиться нечетное число 525, а значит, продавщица действительно
                            пыталась обсчитать Ивана Ивановича.
                            <br/><br/>
                            В этом задании проверялось ваше логическое мышление.
                            Это критически важный навык для любого программиста.
                        </Typography>


                            <Typography sx={{ mt: 3,  padding:' 0 55px'}}>
                                <Button sx={{width: '150px',
                                    height: '50px' ,
                                    background: '#F15525',
                                    borderRadius: '82px',
                                    color: '#FFFFFF',
                                    ml: 58,
                                    mt: -3
                                }}>

                                    Далее
                                </Button>

                            </Typography>



                    </Box>
                </Fade>
            </Modal>





            <Button onClick={handleOpens2}>Далее</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={opens2}
                onClose={handleCloses2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >


                <Fade in={opens2}>
                    <Box sx={styles2}>
                        <Typography sx={{ mt:5,   padding:' 0 55px',}}>
                            <Button sx={{width: '160px',
                                height: '40px' ,
                                background: '#EAEAEA',
                                borderRadius: '40px',
                                color: '#22253B',
                            }}>
                                Набрано 4/4

                            </Button>

                        </Typography>


                        <Typography id="transition-modal-description" sx={{mt: 2, padding:' 0 55px'}}>
                            Это великолепный результат! У вас есть все шансы стать отличным
                            программистом. Начните обучение прямо сейчас, доступ ко вводным
                            урокам уже открыт
                        </Typography>


                        <Typography sx={{ mt: 3,  padding:' 0 55px'}}>
                            <Button sx={{width: '290px',
                                height: '50px' ,
                                background: '#F15525',
                                borderRadius: '82px',
                                color: '#FFFFFF',

                            }}>

                                Начать учиться бесплатно
                            </Button>

                        </Typography>



                    </Box>
                </Fade>
            </Modal>

    </div>

    );
}






