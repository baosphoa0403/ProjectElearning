import HomePage from "../page/homepage/home";
import DetailCourse from "../page/detailcourses/detailcourse";
import searchForCourse from "../page/searchforcourse/searchForCourse";

import Login from "../components/FormSignIn/signin";
const routesHome = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/home",
    exact: true,
    component: HomePage,
  },
  {
    path: "/detail/:id",
    exact: false,
    component: DetailCourse,
  },
  {
    path: "/allcourse",
    exact: false,
    component: searchForCourse,
  },
  {
    path: "/signIn",
    exact: false,
    component: Login,
  },
];
export { routesHome };
