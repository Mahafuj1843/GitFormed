import { Fragment, Suspense, lazy } from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MyRepoPage = lazy(() => import("./pages/MyRepoPage"));
const WatchingRepoPage = lazy(() => import("./pages/WatchingRepoPage"));
const CreateRepoPage = lazy(() => import("./pages/CreateRepoPage"));
const SingleRepo = lazy(() => import("./pages/SingleRepoPage"));

const PullReqListPage = lazy(() => import("./pages/PullReqListPage"));
const CreatePullReqPage = lazy(() => import("./pages/CreatePullReqPage"));
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
          <Route
            path="/"
            element={
              <Suspense fallback={<LazyLoader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/myRepo"
            element={
              <Suspense fallback={<LazyLoader />}>
                {/* <ProtectedRoute path="/myRepo"> */}
                  <MyRepoPage />
                {/* </ProtectedRoute> */}
              </Suspense>
            }
          />
          <Route
            path="/myWatchRepo"
            element={
              <Suspense fallback={<LazyLoader />}>
                {/* <ProtectedRoute path="/myWatchRepo"> */}
                  <WatchingRepoPage />
                {/* </ProtectedRoute> */}
              </Suspense>
            }
          />
          <Route
            path="/createRepo"
            element={
              <Suspense fallback={<LazyLoader />}>
                {/* <ProtectedRoute path="/createRepo"> */}
                  <CreateRepoPage />
                {/* </ProtectedRoute> */}
              </Suspense>
            }
          />
          <Route
            path="/repository/:id"
            element={
              <Suspense fallback={<LazyLoader />}>
                  <SingleRepo />
              </Suspense>
            }
          />
          <Route
            path="/repository/:id/pull"
            element={
              <Suspense fallback={<LazyLoader />}>
                {/* <ProtectedRoute path="/createRepo"> */}
                  <PullReqListPage />
                {/* </ProtectedRoute> */}
              </Suspense>
            }
          />
          <Route
            path="/repository/:id/createPullReq"
            element={
              <Suspense fallback={<LazyLoader />}>
                  <CreatePullReqPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
