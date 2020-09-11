import HomePage from "../page/homepage/home";
import DetailCourse from "../page/detailcourses/detailcourse";
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
];
export { routesHome };
