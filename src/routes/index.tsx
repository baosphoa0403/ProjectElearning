import HomePage from "../page/homepage/home";
import DetailCourse from "../page/detailcourses/detailcourse";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/FormSignIn/signin"
import VerticalTabs from "../components/InforUsers/listInfor";
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
    component: Login,
  },
  {
    path: "/signUp",
    exact: false,
    component: SignUp,
  },
  {
    path: "/profile",
    exact: false,
    component: VerticalTabs,
  }

];
export { routesHome };
