// import HomePage from "../page/homepage/home";
// import DetailCourse from "../page/detailcourses/detailcourse";
// import SignUp from "../components/SignUp/SignUp";
// import Login from "../components/FormSignIn/signin"
// import VerticalTabs from "../components/InforUsers/listInfor";
// import searchForCourse from "../page/searchforcourse/searchForCourse";
import React, { Suspense, lazy } from "react";

const HomePage = lazy(async () => {
  await new Promise((res) => setTimeout(res, 3000));
  return import('../page/homepage/home');
});
const DetailCourse = lazy(async () => {
  await new Promise((res) => setTimeout(res, 3000));
  return import('../page/detailcourses/detailcourse');
});
const SignUp = lazy(async () => {
  await new Promise((res) => setTimeout(res, 3000));
  return import('../components/SignUp/SignUp');
});
const Login = lazy(async () => {
  await new Promise((res) => setTimeout(res, 3000));
  return import('../components/FormSignIn/signin');
});
const VerticalTabs = lazy(async () => {
  await new Promise((res) => setTimeout(res, 3000));
  return import('../components/InforUsers/listInfor');
});

const searchForCourse = lazy(async () => {
  await new Promise((res) => setTimeout(res, 3000));
  return import('../page/searchforcourse/searchForCourse');
});

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
