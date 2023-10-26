import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import NewsPage from "./pages/News"
import AuthorisationPage from "./pages/Authorisation";
import RegistrationPage from "./pages/Registration";
import NewsDetail from "./pages/NewsDetail";
import Root from "./pages/Root";

const router =  createBrowserRouter([
  {path: '/',
   element: <Root />,
   children: [
    {path: '/',element: <HomePage /> },
    {path: '/aboutus', element: <AboutUsPage />},
    {path: '/news', element: <NewsPage />},
    {path: '/news/newsdetail', element: <NewsDetail />},
    {path: '/registration', element: <RegistrationPage />},
    {path: '/authorisation', element: <AuthorisationPage />}
    
   ],
},
  
])


function App() {
  return <RouterProvider router={router}/>
}

export default App;
