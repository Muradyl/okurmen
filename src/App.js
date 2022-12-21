import { Container } from '@mui/material';
import Courses from './Components/Courses';
import Header from './Components/Header';
import Info from './Components/Info'
import StadyCards from './Components/StadyCards';
import Promo from './Components/Promo'
import Modals from './Components/Modals';
import Price from './Components/Price';
import Footer from './Components/Footer';
import Support from './Components/Support';
// import MediaBlock from './Components/MediaBlock';


function App() {
  return (
    <Container maxWidth='lg'>
      <Header/>
      <Info/>
      <Courses/>
      <StadyCards/>
      {/* <MediaBlock/> */}
      <Promo/>
      <Modals/>
      <Price/>
      <Support/> 
      <Footer/>
    </Container>
  );
}

export default App;
