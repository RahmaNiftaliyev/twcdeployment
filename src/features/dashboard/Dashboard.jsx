import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeDashboard from './../components/home/HomeDashboard';
import CareerDashboard from './../components/career/CareerDashboard';
import ContactDashboard from './../components/contact/ContactDashboard';
// !ABOUT US SECTION
import About from './../components/about/About';
import AboutOurTeam from './../components/about/AboutOurTeam';
import AboutTestimonials from './../components/about/AboutTestimonials';
import AboutPartneers from '../components/about/AboutPartneers';
// !SERVICES SECTION
import ServicesSalesAndMarketing from './../components/services/ServicesSalesAndMarketing';
import ServicesOrganization from './../components/services/ServicesOrganization';
import ServicesFinanceAndPayment from './../components/services/ServicesFinanceAndPayment';
import ServicesInvestment from './../components/services/ServicesInvestment';
import ServicesDoingBusinessInAzerbaijan from './../components/services/ServicesDoingBusinessInAzerbaijan';
import ServicesBusinessPlan from './../components/services/ServicesBusinessPlan';
import ServicesMarketResearch from './../components/services/ServicesMarketResearch';
// !INDUSTRY SECTION
import IndustryImmovableProperty from './../components/industry/IndustryImmovableProperty';
import IndustryFinancialService from './../components/industry/IndustryFinancialService';
import IndustryRetail from './../components/industry/IndustryRetail';
import IndustryProducts from '../components/industry/IndustryProducts';
import IndustryTechMediaAndFun from './../components/industry/IndustryTechMediaAndFun';
import IndustryTransPortationAndLogistics from './../components/industry/IndustryTransPortationAndLogistics';
import IndustrySupplements from './../components/industry/IndustrySupplements';
import IndustryFMCG from './../components/industry/IndustryFMCG';
import IndustryArchitect from './../components/industry/IndustryArchitect';
import IndustryManufacture from './../components/industry/IndustryManufacture';
import IndustryEducation from './../components/industry/IndustryEducation';
import IndustryEnergy from './../components/industry/IndustryEnergy';
// !ARTICLES SECTION
import Articles from '../components/articles/Articles';
import ArticlesStartup from '../components/articles/ArticlesStartup';
import ArticlesAlcohol from '../components/articles/ArticlesAlcohol';
import ArticlesLogistics from '../components/articles/ArticlesLogistics';
import ArticlesFinance from '../components/articles/ArticlesFinance';
import IndustryEcommerce from './../components/industry/IndustryEcommerce';
import Faq from './../components/privacy/Faq';
import Privacy from './../components/privacy/Privacy';
import SignUp from './../components/form/SignUp';
import SignIn from './../components/form/SignIn';
import BackToTop from '../toolbox/buttons/BackToTop';
import Vacantions from '../components/career/Vacantions';



const Dashboard = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleScroll = () => {
    if ((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) && !chatAppView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  const [chatBoxView, setChatBoxView] = React.useState(true);
  const [chatAppView, setChatAppView] = React.useState(false);
  const [isVisibleChat, setIsVisibleChat] = React.useState(false);

  const handleBoxView = () => {
    setChatBoxView(false);
    setChatAppView(true);
  };

  const handleAppView = () => {
    setChatBoxView(true);
    setChatAppView(false);
  };

  const homeProps = {
    chatBoxView,
    chatAppView,
    isVisibleChat,
    chatAppMethod: handleAppView,
    chatBoxMethod: handleBoxView,
    visibleChatMethod: setIsVisibleChat
  };

  return (
    <div>
      <BackToTop showMe={isVisible} />
      <Routes>
        <Route path="/" element={<HomeDashboard homeProps={homeProps} />} />
        <Route path="/contact" element={<ContactDashboard />} />
        <Route path="/career" element={<CareerDashboard />} />
        <Route path="/career/vacancies/:vacanciesId" element={<Vacantions />} />

        {/* !FIKIRLER */}
        <Route path="/ideas" element={<Articles />} />
        <Route path="/ideas/startup" element={<ArticlesStartup />} />
        <Route path="/ideas/alcohol" element={<ArticlesAlcohol />} />
        <Route path="/ideas/logistics" element={<ArticlesLogistics />} />
        <Route path="/ideas/finance" element={<ArticlesFinance />} />

        {/* !HAQQIMIZDA */}
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<AboutOurTeam />} />
        <Route path="/about/testimonials" element={<AboutTestimonials />} />
        <Route path="/about/partneers" element={<AboutPartneers />} />

        {/* !XİDMƏTLƏR */}
        <Route path="/services/marketing" element={<ServicesSalesAndMarketing />} />
        <Route path="/services/companyable" element={<ServicesOrganization />} />
        <Route path="/services/finance" element={<ServicesFinanceAndPayment />} />
        <Route path="/services/investmentable" element={<ServicesInvestment />} />
        <Route path="/services/businessazerbaijan" element={<ServicesDoingBusinessInAzerbaijan />} />
        <Route path="/services/businessplan" element={<ServicesBusinessPlan />} />
        <Route path="/services/marketresearch" element={<ServicesMarketResearch />} />

        {/* !SENAYE */}
        <Route path="/industry/immovableproperty" element={<IndustryImmovableProperty />} />
        <Route path="/industry/financialservice" element={<IndustryFinancialService />} />
        <Route path="/industry/retail" element={<IndustryRetail />} />
        <Route path="/industry/industryproducts" element={<IndustryProducts />} />
        <Route path="/industry/techmediaandfun" element={<IndustryTechMediaAndFun />} />
        <Route path="/industry/transportationandlogistics" element={<IndustryTransPortationAndLogistics />} />
        <Route path="/industry/supplements" element={<IndustrySupplements />} />
        <Route path="/industry/fmcg" element={<IndustryFMCG />} />
        <Route path="/industry/architect" element={<IndustryArchitect />} />
        <Route path="/industry/manufacture" element={<IndustryManufacture />} />
        <Route path="/industry/education" element={<IndustryEducation />} />
        <Route path="/industry/ecommerce" element={<IndustryEcommerce />} />
        <Route path="/industry/energy" element={<IndustryEnergy />} />

        {/* !FAQ PRIVACY LOGIN REGISTER */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
