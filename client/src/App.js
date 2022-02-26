import React, { Suspense, lazy, useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";

//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from "./utils/setAuthToken";

import Header from "./Component/Header/Header";
import CovidHead from "./Component/CovidHead/CovidHead";
import PopupMain from "./Component/Popups/PopupMain";
import Whatsapp from "./Component/Whatsapp/Whatsapp";
import Callnow from "./Component/Call Now/Callnow";
import Register from "./Component/adminAccount/Register";
import Login from "./Component/adminAccount/Login";
import Alert from "./Component/Alert/Alert";
import Dashboard from "./Component/dashboard/Dashboard";
import CreateProfile from "./Component/profile-forms/CreateProfile";
import EditProfile from "./Component/profile-forms/EditProfile";
import PrivateRoute from "./Component/routing/PrivateRoute";

const Home = lazy(() => import("./Pages/Home"));
const Gallery = lazy(() => import("./Component/Gallery/Gallery"));
const Aboutus = lazy(() => import("./Component/About Us/Aboutus"));
const Deluxe = lazy(() => import("./Pages/BookNow/Deluxe"));
const SuperiorKing = lazy(() => import("./Pages/BookNow/SuperiorKing"));
const SuperiorQueen = lazy(() => import("./Pages/BookNow/SuperiorQueen"));
const Executive = lazy(() => import("./Pages/BookNow/Executive"));
const Queen = lazy(() => import("./Pages/BookNow/Queen"));
const King = lazy(() => import("./Pages/BookNow/King"));
const Offers = lazy(() => import("./Component/Offers/Offers"));
const CovidUpdate = lazy(() => import("./Component/CovidUpdate/CovidUpdate"));
const Feedback = lazy(() => import("./Component/Feedback/Feedback"));
const Spa = lazy(() => import("./Component/Spa/Spa"));
const Activities = lazy(() => import("./Component/Activities/Activities"));
const Dining = lazy(() => import("./Component/Dining/Dining"));
const Tourism = lazy(() => import("./Component/Tourism/Tourism"));
const Policies = lazy(()=> import("./Pages/Policies/Policies"));



if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

   useEffect(() => {
     store.dispatch(loadUser())
   }, []);

  return (
    <Provider store={store}>
      <HashRouter>
        <CovidHead />
        <Header />
        <PopupMain />
        <Whatsapp />
        <Callnow />
        <Alert />

        <Suspense fallback={<div>Loading.....</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Aboutus" element={<Aboutus />} />
            <Route path="/Offers" element={<Offers />} />
            <Route path="/Deluxe" element={<Deluxe />} />
            <Route path="/SuperiorKing" element={<SuperiorKing />} />
            <Route path="/SuperiorQueen" element={<SuperiorQueen />} />
            <Route path="/Executive" element={<Executive />} />
            <Route path="/Queen" element={<Queen />} />
            <Route path="/King" element={<King />} />
            <Route path="/CovidUpdate" element={<CovidUpdate />} />
            <Route path="/Feedback" element={<Feedback />} />
            <Route path="/Spa" element={<Spa />} />
            <Route path="/Activities" element={<Activities />} />
            <Route path="/Dining" element={<Dining />} />
            <Route path="/Tourism" element={<Tourism />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/create-profile" element={<PrivateRoute component={CreateProfile} />} />
            <Route path="/edit-profile" element={<PrivateRoute component={EditProfile} />} />
            <Route path="/Policies" element={<Policies />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </Provider>
  );
}

export default App;
