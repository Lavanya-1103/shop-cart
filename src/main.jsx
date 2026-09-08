import React, { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import './index.css';
import App from "./App.jsx";
import { RouterProvider} from 'react-router-dom';
import router from './Router.jsx';
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ErrorBoundary from "./component/ErrorBoundary.jsx";



//Provide router to app
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
     <ErrorBoundary>
       <RouterProvider router={router} />
     </ErrorBoundary>  
  </ThemeProvider>
);