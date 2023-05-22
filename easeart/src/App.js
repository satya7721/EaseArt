import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './Pages/Login';

import './App.css';
import UserInput from "./Pages/UserInput";
import Canvas from "./Pages/Canvas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/main",
    element: <UserInput/>,
  },
  {
    path: "/create",
    element: <Canvas/>,
  },
]);
 
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
