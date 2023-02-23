import { Quote } from 'react-bootstrap-icons';
import image1 from '../assets/images/ComputerMap.png';
import { FaPlayCircle } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
const Header = () => {
  return (
    <div className='app-header'>
      <div className='div1'>
        <h2>
          Save Money with <br />
          <span>smart farming</span>
        </h2>
        <p>
          Optimise the efficiency of your entire tractor fleet with cutting edge
          GPS Technology and take the guesswork out of wine, fruit, and nut
          production. Monitor tractor activity, spraying, and productivity -
          intuitively, with complete accuracy in order to produce more - for
          less.
        </p>
        <button>
          <span className=''>
            <FaPlayCircle />
          </span>
          <span>Have a look</span>
        </button>
      </div>
      <div className='div2'>
        <img src={image1} alt='GPS tracking' />
        <div className='content'>
          <h4>
            Farmtrack's GPS tracking <br /> system ensures peace of mind
          </h4>
          <div className='line-col'>
            <span className='line'></span>
            <p>
              With Farmtrack® you can monitor your entire tractor fleet and gain
              powerful insight into spraying habits, driver activity, and
              performance. Calculate fuel and water refills. Detect neglected
              sections or missed rows. Spot movements in restricted areas and
              manage custom reports for export compliance. Having all of this
              information at your fingertips will revolutionise your approach to
              your business.
            </p>
          </div>
          <button>
            <span>Find out more</span>
          </button>
        </div>
      </div>
      <div className='div3'>
        <div className='quote-div'>
          <p>
            <Quote />
            Farmtrack® will enable you to review all your drivers’ activities
            and carefully monitor spraying habits from one centralised web
            dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
