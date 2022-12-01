import Header from '../Header';
import Hero from '../Hero';
import LinkForm from '../ShortenedLinks/LinkForm';
import Features from '../Features';
import BoostSection from '../BoostSection';
import Footer from '../Footer';

import './style.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <LinkForm />
      <Features />
      <BoostSection />
      <Footer />
    </div>
  );
}

export default App;
