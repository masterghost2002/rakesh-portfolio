import { lazy, Suspense } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Splash from './component/Splash';
import RootLayout from './component/RootLayout';
import RouteError from './Pages/RouteError';
import { AnimatePresence } from 'framer-motion';
const Home = lazy(()=> import('./Pages/Home'));
const Skills = lazy(()=> import('./Pages/Skills'));
import 'animate.css';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<RootLayout />} errorElement={<RouteError/>}>
    <Route index element={<Home/>}/>
    <Route path='skills' element={<Skills/>}/>
  </Route>
));
function App() {
  return (
    <Suspense fallback={<Splash/>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
