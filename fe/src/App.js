/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { HomeProvider } from "./context/HomeContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NightOut from "./pages/NightOut";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <HomeProvider>
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              </HomeProvider>
            }
          />
          <Route
            exact
            path="/nightout/:id"
            element={
              <PrivateRoute>
                <NightOut />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path="/user"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />

          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
