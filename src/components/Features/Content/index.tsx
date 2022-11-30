import recognition_icon from '../../../assets/images/icon-brand-recognition.svg';
import records_icon from '../../../assets/images/icon-detailed-records.svg';
import customizable_icon from '../../../assets/images/icon-fully-customizable.svg';

import './style.scss';

const Content = () => {
  return(
    <div className="content">
      <div className="content__section">
        <div  className="content__icon">
          <img src={recognition_icon} alt="icon brand recognition" />
        </div>
        <h5 className="content__title">Brand Recognition</h5>
        <p className="content__text">Boost your brand recognition with eacg click.
          Generic links don't mean a thing. Branded links help
          instil confidence in your content.
        </p>
      </div>
      <div className="content__section">
        <div  className="content__icon">
          <img src={records_icon} alt="icon-detailed-records" />
        </div>
        <h5 className="content__title">Detailed Records</h5>
        <p className="content__text">Gain insights into who is clicking your
          links. Knowing when and where people engage with your content helps
          inform better decisions.
        </p>
      </div>
      <div className="content__section">
        <div  className="content__icon">
          <img src={customizable_icon} alt="icon fully customizable" />
        </div>
        <h5 className="content__title">Fully Customizable</h5>
        <p className="content__text">Improve brand awareness and content discoverability
          through customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  )
};

export default Content;