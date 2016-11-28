import React from 'react';

import Header from './header';
// import Pannel from './pannel';
// import Dialog from './dialogs';
// import Notifications from './notifications';

const App = ({ children }) => (
  <div className='app h-max w-max fcn ofh rel'>
    <Header />
    <h1>Here is my React new app</h1>
    {children}
  </div>
);

export default App;
