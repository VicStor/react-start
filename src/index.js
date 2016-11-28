import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './components/app';

render(
  <App />
  , global.document.getElementById('app'));

  // <Provider store={store}>
  //   <Router history={history}>
  //     <Route path='/' component={App}>
  //       <IndexRoute component={AllNews} />
  //       <Route path='/brands' component={Brands} />
  //       <Route path='/news' component={AllNews} />
  //       <Route path='/:makerName' component={MakerPage}>
  //         <IndexRoute component={CardsList} />
  //         <Route path='news/' component={MakerNews} />
  //         <Route path='contacts/' component={MakerNews} />
  //         <Route path=':path/*' component={CardsList} />
  //       </Route>
  //     </Route>
  //   </Router>
  // </Provider>
