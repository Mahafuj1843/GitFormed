import { Fragment, Suspense, lazy, useEffect } from "react";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MyRepoPage = lazy(() => import("./pages/MyRepoPage"));
const WatchingRepoPage = lazy(() => import("./pages/WatchingRepoPage"));
const CreateRepoPage = lazy(() => import("./pages/CreateRepoPage"));
const SingleRepo = lazy(() => import("./pages/SingleRepoPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));
const PullReqListPage = lazy(() => import("./pages/PullReqListPage"));
const CreatePullReqPage = lazy(() => import("./pages/CreatePullReqPage"));
import { Toaster } from "react-hot-toast";
import LazyLoader from "./components/LazyLoader";
import ScreenLoader from "./components/ScreenLoader";
import ProtectedRoute from "./components/ProtectedRoute";
import { getToken, getUserDetails } from "./helpers/sessionHelper";
import io from "socket.io-client"

const ENDPOINT = "http://localhost:8081"
export var socket

function App() {
  useEffect(()=>{
    socket = io(ENDPOINT)
    if(getToken()){
      socket.emit("setup", getUserDetails())
    }
  }, [])

  return (
    <Fragment>
      <BrowserRouter>
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
                <ProtectedRoute path="/myRepo">
                  <MyRepoPage />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/myWatchRepo"
            element={
              <Suspense fallback={<LazyLoader />}>
                <ProtectedRoute path="/myWatchRepo">
                  <WatchingRepoPage />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/createRepo"
            element={
              <Suspense fallback={<LazyLoader />}>
                <ProtectedRoute path="/createRepo">
                  <CreateRepoPage />
                </ProtectedRoute>
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
            path="/profile"
            element={
              <Suspense fallback={<LazyLoader />}>
                <ProtectedRoute path="/profile">
                  <ProfilePage />
                </ProtectedRoute>
              </Suspense>
            }
          />
          <Route
            path="/repository/:id/pull"
            element={
              <Suspense fallback={<LazyLoader />}>
                  <PullReqListPage />
              </Suspense>
            }
          />
          <Route
            path="/repository/:id/createPullReq"
            element={
              <Suspense fallback={<LazyLoader />}>
                <ProtectedRoute path="/repository/:id/createPullReq">
                  <CreatePullReqPage />
                </ProtectedRoute>
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <ScreenLoader />
      <Toaster position="top-center" />
    </Fragment>
  )
}

export default App
