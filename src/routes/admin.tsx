import AdminPage from "../page/admin/admin"
import TableCourse from '../components/Table/TableCourse/TableCourse';
const routesAdmin = [
    {
        path: "/admin/dashboard",
        exact: false,
        component: AdminPage
    },
    {
        path: "/admin/dashboardCourse",
        exact: false,
        component: TableCourse
    },

];

export { routesAdmin }