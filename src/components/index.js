import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Feed from "./Feed";
import Contact from "./Contact";
import Footer from "./Footer";

export const HeaderComponent = ( { items } ) => <Header items={ items }/>;
export const HomeComponent = () => <Home />;
export const AboutComponent = () => <About />;
export const FeedComponent = ({ userName }) => <Feed userName = { userName } />;
export const ContactComponent = () => <Contact />;
export const FooterComponent = () => <Footer />;