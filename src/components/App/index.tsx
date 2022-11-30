import Header from '../Header';
import Hero from '../Hero';
import LinkForm from '../ShortenedLinks/LinkForm';
import Features from '../Features';

import './style.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <LinkForm />
      <Features />
    </div>
  );
}

export default App;
