import { Routes, Route } from 'react-router-dom';

import { Main, View, Landing, NotFound } from '../../pages/';

const Router = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/main" element={<Main />} />
    <Route path="/about" element={<View />} />
    <Route path="*" element={<NotFound/>} />
  </Routes>
);

export default Router;