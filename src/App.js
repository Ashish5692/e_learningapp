import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";

import {
  BrowserRouter, createBrowserRouter, RouterProvider,
} from 'react-router-dom';

function App() {

  const browserRouter = createBrowserRouter([
    {
      path: '/',
      element: <Nav/>,
      children:[
        { index:true, element: <Hero />},
        {
          path: '/courses',
          children:[
            { index:true, element: <Courses/>},
            {
              path:":courseId",
              element: <Details />, //want to fetch details after clicking on individal course
            },
          ],
          },
        ],
    },
  ]);

  return (
    <RouterProvider router = {browserRouter}/>
  );
}

export default App;
