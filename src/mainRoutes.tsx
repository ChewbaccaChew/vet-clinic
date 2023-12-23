import { createBrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app/App";
import Landing from "./features/Landing/Landing";
import AdminPage from "./features/User/AdminPage/AdminPage";
import RequireAuth from "./hok/RequireAuth";
import DoctorPage from "./features/User/DoctorPage/DoctorPage";
import ClientPage from "./features/User/ClientPage/ClientPage";
import ManagerPage from "./features/User/ManagerPage/ManagerPage";
import ProfilePage from "./features/User/ProfilePage/ProfilePage";
import FormWrapper from "./widgets/Forms/FormWrapper";
import SignUpPage from "./view/SignUpPage";
import SignInPage from "./view/SignInPage/SignInPage";
import ForumWrapper from "./widgets/Forum/ForumWrapper/ForumWrapper";

const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: (
      <Routes>
        <Route path="/" element={<App />}>   
        <Route
            path="sign-in"
            element={
              <FormWrapper
                children={<SignInPage />}
                text={{ title: "Don't have an account?", linkText: "Sign Up" }}
                link="/sign-up"
              />
            }
          />
          
          <Route index element={<Landing />} />
          <Route
            path="sign-up"
            element={
              <FormWrapper
                children={<SignUpPage />}
                text={{ title: "Already have an account?", linkText: "Log in" }}
                link="/sign-in"
              />
            }
          />
          <Route
            path="admin/*"
            element={
              <RequireAuth>
                <Routes>
                  <Route index element={<AdminPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Routes>
              </RequireAuth>
            }
          />
          <Route
            path="doctor/*"
            element={
              <RequireAuth>
                <Routes>
                  <Route index element={<DoctorPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Routes>
              </RequireAuth>
            }
          />
          <Route
            path="client/*"
            element={
              <RequireAuth>
                <Routes>
                  <Route index element={<ClientPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Routes>
              </RequireAuth>
            }
          />
          <Route
            path="manager/*"
            element={
              <RequireAuth>
                <Routes>
                  <Route index element={<ManagerPage />} />
                  <Route path="profile" element={<ProfilePage />} />
                </Routes>
              </RequireAuth>
            }
          />
           <Route path="forum" element={<ForumWrapper />} />
        </Route>
      </Routes>
    ),
  },
]);

export default MainRoutes;
