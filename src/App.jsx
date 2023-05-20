import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { NotFound } from 'pages/NotFound';
import { Home } from 'pages/Home/Home';
import { Profile } from 'pages/Profile';
import { FindCar } from 'pages/FindCar';
import { News } from 'pages/News/News';
import { Services } from 'pages/Services';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Favorites } from 'pages/Favorites';
import { OwnCars } from 'pages/OwnCars';
import { AddCar } from 'pages/AddCar';
import { CarDetails } from 'pages/CarDetails';
// import { PrivateRoute } from 'shared/PrivateRoute';
import { RestrictedRoute } from 'shared/RestrictedRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={<Home />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/notices" element={<FindCar />} />
          <Route path="notices/:noticeId" element={<CarDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/services" element={<Services />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/posts" element={<OwnCars />} />
          <Route path="/add-notice" element={<AddCar />} />

          <Route
            path="/register"
            element={<RestrictedRoute component={Register} redirectTo="/profile" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={Login} redirectTo="/notices" />}
          />
        </Route>
      </Routes>
    </>
  );
};
