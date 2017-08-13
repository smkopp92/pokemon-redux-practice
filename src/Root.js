import React from 'react'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

const Root = ({store, history, routes}) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          {routes}
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default Root;
