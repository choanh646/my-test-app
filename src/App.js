import { BrowserRouter, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

//Layout
import AppLayout from "./Layouts/AppLayout";

//Pages
const Home = lazy(() => import("./Pages/Home"));
const InfoUser = lazy(() => import("./Pages/InfoUser"));
const AdminUsers = lazy(() => import("./Pages/AdminUsers"));
//Component App
function App() {
  return (
    <Suspense fallback>
      <BrowserRouter>
        <AppLayout>
          <Switch>
            {/* Route DashBoard */}
            <Route path="/" exact>
              <Home />
            </Route>
            {/* Route InfoUser */}
            <Route path="/info-user">
              <InfoUser />
            </Route>
            {/* Route AdminUsers */}
            <Route path="/admin-users">
              <AdminUsers />
            </Route>
          </Switch>
        </AppLayout>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
