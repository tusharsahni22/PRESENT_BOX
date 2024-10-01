import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Products from './Components/Products';
import Profile from './Components/MyProfile';
import NotFound from './Components/Notfound404';
import { ROUTES } from './Utils/ApplicationConstant';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.Products} element={<Products />} />
        <Route path={ROUTES.profile} element={<Profile />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
