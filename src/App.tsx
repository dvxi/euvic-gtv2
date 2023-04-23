import React from 'react';
import { Layout } from 'antd';

import { MenuHeader, Router } from './components/';

const App: React.FC = () => {
  return (
      <Layout style={{ minHeight: '100vh' }}>
        <MenuHeader />
        <Router />
      </Layout>
  );
};

export default App;