import { Fragment, Suspense, lazy } from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
import { Toaster } from "react-hot-toast";
import LazyLoader from "./components/LazyLoader";

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route
            path="/register"
            element={
              <Suspense fallback={<LazyLoader />}>
                <RegistrationPage />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<LazyLoader />}>
                <LoginPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
