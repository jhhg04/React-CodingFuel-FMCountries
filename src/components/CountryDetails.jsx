import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react';

const CountryDetails = () => {
  return (
    <div className='country_details'>
      <button className='back'>
        <ArrowBackIcon />
        <p>Go Back</p>
      </button>
      <div className='country_details_body'>
        <div className='img_container'>
          <img src='https://flagcdn.com/as.svg' alt='' />
        </div>

        <div className='info'>
          <h2>Name</h2>
          <div className='info_container'>
            <div className='left_info'>
              <p>
                Native Name:<span className='values'>Test</span>
              </p>
              <p>
                Population:<span className='values'>Test</span>
              </p>
              <p>
                Region:<span className='values'>Test</span>
              </p>
              <p>
                Sub Region :<span className='values'>Test</span>
              </p>
            </div>
            <div className='right_info'>
              <p>
                Capital:<span className='values'>Test</span>
              </p>
              <p>
                Top-level Domain:<span className='values'>Test</span>
              </p>
              <p>
                Currencies:<span className='values'>Test</span>
              </p>
              <p>
                Languages :<span className='values'>Test</span>
              </p>
            </div>
          </div>
          Border Countries:
          <div className='border_country'>
            <p>Test</p>
          </div>
          <div className='border_country'>
            <p>Test</p>
          </div>
          <div className='border_country'>
            <p>Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
