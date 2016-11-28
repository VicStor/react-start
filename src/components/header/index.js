import React from 'react';

const Header = () => (
  <div className='page-header w-max frn aic jcs fixed w-max top_0 left_0'>
    <div className='logo-wrapper fn mr_20'>
      <div className='main-logo'>
        <img className='img-fit' alt='' src='img/logo.svg' />
      </div>
    </div>
    <div className='fn mr_20'>
      <ul className='lang-menu fcn no_style'>
        <li className='mr_20'>rus</li>
        <li className='mr_20'>eng</li>
        <li className='mr_20'>it</li>
      </ul>
    </div>
    <div className='fm abs right_0'>
      <ul className='main-nav frn no_style sserif'>
        <li className='mr_20'>
          <a href='#'>Проекты</a>
        </li>
        <li className='mr_20'>
          <a href='#'>Услуги</a>
        </li>
        <li className='mr_20'>
          <a href='#'>Цены</a>
        </li>
        <li className='mr_20'>
          <a href='#'>О нас</a>
        </li>
        <li className='mr_20'>
          <a href='#'>Контакты</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Header;
