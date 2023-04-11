import About from './Componants/About/About';
import BorderlessCommerce from './Componants/BorderlessCommerce/BorderlessCommerce';
import CraeteNow from './Componants/CraeteNow/CraeteNow';
import EaseofPurchase from './Componants/EaseofPurchase/EaseofPurchase';
import Easyintegration from './Componants/Easyintegration/Easyintegration';
import Footer from './Componants/Footer/Footer';
import Header from './Componants/Header/Header';
import LandingPage from './Componants/Landing/LandingPage';
import MarketingSolutions from './Componants/MarketingSolutions/MarketingSolutions';
import Offers from './Componants/Offers/Offers';
import SecurePayHub from './Componants/SecurePayHub/SecurePayHub';
import SuccessPartners from './Componants/SuccessPartners/SuccessPartners';
import TwilightCustomizer from './Componants/TwilightCustomizer/TwilightCustomizer';

function App() {
  return (
    <div className="App">
        <Header />
        <LandingPage />
        <About />
        <Offers />
        <TwilightCustomizer />
        <BorderlessCommerce />
        <SecurePayHub />
        <Easyintegration />
        <MarketingSolutions />
        <EaseofPurchase />
        <SuccessPartners />
        <CraeteNow />
        <Footer />
    </div>
  );
}

export default App;
