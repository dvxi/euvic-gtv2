import { Routes, Route } from "react-router-dom";

import { Main, DataView, Landing, NotFound } from "../../pages/";

const Router = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/main" element={<Main />} />
    <Route path="/about" element={<DataView />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Router;
