import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { HomePage } from '../pages/homePage/homePage';
import { AboutPage } from '../pages/aboutPage/aboutPage';
import { NotFound } from '../pages/notFoundPage/notFoundPage';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/marvel" element={<Layout />}>
        <Route element={<HomePage />} path="/marvel/" />
        <Route element={<AboutPage />} path="/marvel/about" />
        <Route element={<NotFound />} path="/marvel/*" />
      </Route>
    </Routes>
  );
};

export default RootRouter;
