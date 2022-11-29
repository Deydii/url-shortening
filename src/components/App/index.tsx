import Header from '../Header';
import Hero from '../Hero';
import LinkForm from '../ShortenedLinks/LinkForm';

import './style.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <LinkForm />
    </div>
  );
}

export default App;
