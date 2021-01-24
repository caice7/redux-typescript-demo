import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import configStore from './commons/configStore';

const store = configStore();

function renderApp(app: JSX.Element) {
  rederDom(app);
}

function rederDom(app: any) {
  ReactDOM.render(
    app,
    document.getElementById('root') as HTMLElement
  );
}

renderApp(<App store={store} />);