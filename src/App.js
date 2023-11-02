import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import NewsPage from "./pages/News"
import AuthorisationPage from "./pages/Authorisation";
import RegistrationPage from "./pages/Registration";
import Registrationcode from "./pages/Registrationcode";
import NewsDetailPage from "./pages/NewsDetail";
import Root from "./pages/Root";

const router =  createBrowserRouter([
  {path: '/',
   element: <Root />,
   children: [
    {path: '/',element: <HomePage /> },
    {path: '/aboutus', element: <AboutUsPage />},
    {path: '/news', element: <NewsPage />},
    {path: '/news/:newsId', element: <NewsDetailPage />},
    {path: '/registration', element: <RegistrationPage />},
    {path: '/registrationcode', element: <Registrationcode />},
    {path: '/authorisation', element: <AuthorisationPage />}
    
   ],
},
  
])


function App() {
  return <RouterProvider router={router}/>
}

export default App;
