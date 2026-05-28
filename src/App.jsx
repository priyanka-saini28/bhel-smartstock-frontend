import React from "react";
import SRV from "./pages/SRV";
import Analytics from "./pages/Analytics";
import PendingSIV from "./pages/PendingSIV";
import { Toaster } from "react-hot-toast";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import SIV from "./pages/SIV";

function App() {

  return (

    <BrowserRouter>
      <Toaster
          position="top-center"
          reverseOrder={false}
      />

      <Routes>

        {/* Dashboard */}
        <Route
          path="/"
          element={<Dashboard />}
        />

        {/* SIV Page */}
        <Route
          path="/siv"
          element={<SIV />}
        />
        <Route
          path="/srv"
          element={<SRV />}
        />
        <Route
            path="/analysis"
            element={<Analytics />}
        />
        <Route
          path="/pending-siv"
          element={<PendingSIV />}
        />
      </Routes>

    </BrowserRouter>

  );
}

export default App;