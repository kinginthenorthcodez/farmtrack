import { Quote } from 'react-bootstrap-icons';
import image1 from '../assets/images/dev2.svg';
const Header = () => {
  return (
    <div className='app-header'>
      <div className='div1'>
        <h2>
          Save Money with <br />
          <span>smart farming</span>
        </h2>
        <p>
          TypeScript is programing languege that adds to shortcommings of
          javascript. Think of it like a sibling that is more principled than
          the other. It is build on top of javascript, and is superset of the
          javascript
        </p>
        <button>
          <span className=''>▶️</span>
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
              Decipline coding: Not for lazy programmers like John doe, who
              wanna get done things quickly. Working on large application or
              with other devs, you may end up wasting alot of time catching
              those bugs but typeScript saves you there
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
            These values are a source of bugs in most javascript code as other
            functions that might use a variable dont work on null or undefined.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
