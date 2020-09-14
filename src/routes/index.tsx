import HomePage from "../page/homepage/home";
import DetailCourse from "../page/detailcourses/detailcourse";
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
    path: "/signIn",
    exact: false,
    component: Login
  }
];
export { routesHome };
