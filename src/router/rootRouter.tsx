import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { HomePage } from '../pages/homePage/homePage';
import { AboutPage } from '../pages/aboutPage/aboutPage';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
      </Route>
    </Routes>
  );
};

export default RootRouter;
