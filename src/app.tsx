
import React from 'react';
import "@blueprintjs/core/lib/css/blueprint.css";
import { Provider } from 'react-redux';
import Layout from './layout/layout'

declare global {
  interface Window { SYSTEM_CONFIGS: any, user: any }
}

export default function APP(props: any) {
  document.title = window.SYSTEM_CONFIGS.title;
  return <Provider store={props.store}>
    <div className="outside">
      <Layout />
    </div>
  </Provider>
}
