import React, { Suspense, lazy } from "react";
import "./App.css";
import 'rsuite/dist/rsuite.min.css';
import "react-activity/dist/library.css";
import ActivityLoader from "../atoms/ActivityLoader/ActivityLoader";
import PrivateRoute from "./PrivateRoute";
// import PublicRoute from "./PublicRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MyErrorBoundary from "./MyErrorBoundary";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../../utils/store";
global.navigate = null;

const Login = lazy(() => import("../pages/authentication/login"));
const Dashboard = lazy(() => import("../pages/Dashboard/main"));
const Profile = lazy(() => import("../pages/profile"));


const NoMatchPage = () => {
  document.body.style.height = "100%";
  return <div className="noPageFound">Something Went Wrong</div>;
};
function App() {
  return (
    <div className="app">
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Router>
              {/* <MyProvider> */}
              <MyErrorBoundary>
                <Suspense
                  fallback={
                    <div
                      className={
                        "loaderBackground d-flex justify-content-center"
                      }
                    >
                      <ActivityLoader show={true} />
                    </div>
                  }
                >
                  <Switch>
                    <Route exact restricted path="/" component={Login} />
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <Route component={NoMatchPage} />
                  </Switch>
                </Suspense>
              </MyErrorBoundary>
              {/* </MyProvider> */}
            </Router>
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
}

export default App;
