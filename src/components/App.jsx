import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import NotFound from 'pages/NotFound';
import HomePage from 'pages/HomePage';
import MoviesPage from 'pages/MoviesPage';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <Layout />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
