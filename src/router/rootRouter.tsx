import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { HomePage } from '../pages/homePage/homePage';
import { AboutPage } from '../pages/aboutPage/aboutPage';
import { NotFound } from '../pages/notFoundPage/notFoundPage';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<NotFound />} path="*" />
      </Route>
    </Routes>
  );
};

export default RootRouter;
