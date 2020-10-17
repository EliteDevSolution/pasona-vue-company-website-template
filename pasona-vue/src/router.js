import VueRouter from 'vue-router';
// Pages
import ITStartup from './components/landing-pages/ITStartup';
import Developer from './components/landing-pages/Developer';
import WebHosting from './components/landing-pages/WebHosting';
import RepairCenter from './components/landing-pages/RepairCenter';
import Iot from './components/landing-pages/Iot';
import AiMachineLearning from './components/landing-pages/AiMachineLearning';
import MachineLearning from './components/landing-pages/MachineLearning';
import DigitalAgency from './components/landing-pages/DigitalAgency';
import AboutStyleOne from './components/other-pages/about/AboutStyleOne';
import AboutStyleTwo from './components/other-pages/about/AboutStyleTwo';
import AboutStyleThree from './components/other-pages/about/AboutStyleThree';
import Features from './components/other-pages/features/Features';
import FeatureDetails from './components/other-pages/features/FeatureDetails';
import ServicesOne from './components/other-pages/services/ServicesOne';
import ServicesTwo from './components/other-pages/services/ServicesTwo';
import ServicesThree from './components/other-pages/services/ServicesThree';
import ServicesFour from './components/other-pages/services/ServicesFour';
import ServicesFive from './components/other-pages/services/ServicesFive';
import ServiceDetails from './components/other-pages/services/ServiceDetails';
import ProjectStyleOne from './components/other-pages/projects/ProjectStyleOne';
import ProjectStyleTwo from './components/other-pages/projects/ProjectStyleTwo';
import ProjectDetails from './components/other-pages/projects/ProjectDetails';
import Team from './components/other-pages/team/Team';
import Pricing from './components/other-pages/pricing/Pricing';
import Faq from './components/other-pages/faq/Faq';
import NotFound from './components/other-pages/not-found/NotFound';
import ComingSoon from './components/other-pages/coming-soon/ComingSoon';
import BlogGrid from './components/other-pages/blog/BlogGrid';
import BlogRightSidebar from './components/other-pages/blog/BlogRightSidebar';
import BlogGridTwo from './components/other-pages/blog/BlogGridTwo';
import BlogRightSidebarTwo from './components/other-pages/blog/BlogRightSidebarTwo';
import BlogGridThree from './components/other-pages/blog/BlogGridThree';
import BlogRightSidebarThree from './components/other-pages/blog/BlogRightSidebarThree';
import BlogDetails from './components/other-pages/blog/BlogDetails';
import Contact from './components/other-pages/contact/Contact';
import Shop from './components/other-pages/product/Shop';
import Cart from './components/other-pages/product/Cart';
import Checkout from './components/other-pages/product/Checkout';
import ItemDetails from './components/other-pages/product/ItemDetails';

export const router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    scrollBehavior() {
      return { x: 0, y: 0 };
    },
    routes: [
      { path: '/', component: ITStartup },
      { path: '/developer', component: Developer },
      { path: '/web-hosting', component: WebHosting },
      { path: '/repair-center', component: RepairCenter },
      { path: '/iot', component: Iot },
      { path: '/ai-machine-learning', component: AiMachineLearning },
      { path: '/machine-learning', component: MachineLearning },
      { path: '/digital-agency', component: DigitalAgency },
      { path: '/about-style-one', component: AboutStyleOne },
      { path: '/about-style-two', component: AboutStyleTwo },
      { path: '/about-style-three', component: AboutStyleThree },
      { path: '/features', component: Features },
      { path: '/feature-details', component: FeatureDetails },
      { path: '/service-style-one', component: ServicesOne },
      { path: '/service-style-two', component: ServicesTwo },
      { path: '/service-style-three', component: ServicesThree },
      { path: '/service-style-four', component: ServicesFour },
      { path: '/service-style-five', component: ServicesFive },
      { path: '/service-details', component: ServiceDetails },
      { path: '/project-style-one', component: ProjectStyleOne },
      { path: '/project-style-two', component: ProjectStyleTwo },
      { path: '/project-details', component: ProjectDetails },
      { path: '/team', component: Team },
      { path: '/pricing', component: Pricing },
      { path: '/faq', component: Faq },
      { path: '/coming-soon', component: ComingSoon },
      { path: '/not-found', component: NotFound },
      { path: '/blog-grid', component: BlogGrid },
      { path: '/blog-right-sidebar', component: BlogRightSidebar },
      { path: '/blog-grid-two', component: BlogGridTwo },
      { path: '/blog-right-sidebar-two', component: BlogRightSidebarTwo },
      { path: '/blog-grid-three', component: BlogGridThree },
      { path: '/blog-right-sidebar-three', component: BlogRightSidebarThree },
      { path: '/blog-details', component: BlogDetails },
      { path: '/contact', component: Contact },
      { path: '/shop', component: Shop },
      { path: '/cart', component: Cart },
      { path: '/checkout', component: Checkout },
      { path: '/details', component: ItemDetails },
    ]
});