import dva from 'dva';
import browserHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';

// import ReactDOM from 'react-dom';
// import React from 'react';


const app = dva({ history: browserHistory() });

// // 2. Plugins
app.use(createLoading());

// // 4. Model  用于全局页面之间的交互
// // app.model(require('./models/global').default);

// // 5. Router
app.router(require('./router').default);

// // 6. Start
app.start('#root');
export default app._store;
