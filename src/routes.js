// ### routes.js

// You'll be adding the routes you create to this file and saving them within the
// `routes` variable. You'll need to provide routes for `/`, `/directors`,
// `/actors`, and `/movie`. The `/movie` route should also include a URL parameter
// called `id`. Don't forget that you'll need to import components into this file!

import Home from "./pages/Home"
import Directors from "./pages/Directors"
import Actors from "./pages/Actors"
import Movie from "./pages/Movie"
import ErrorPage from "./pages/ErrorPage"


const routes = [  
  
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />


    },
      {
        path: '/Directors',
        element: <Directors />
      },
      {
        path: '/Actors',
        element: <Actors /> 
      },
      {
        path: '/Movie/:id',
        element: <Movie />
      }
    

   
  ];

export default routes;