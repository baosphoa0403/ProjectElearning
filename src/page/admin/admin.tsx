import React from 'react'
import NavbarAdmin from "../../components/NavbarAdmin/NavbarAdmin";
import TableUser from "../../components/Table/TableUser/TableUser"
export default function AdminPage() {
    return (
        <React.Fragment>
            <NavbarAdmin />
            <TableUser />
        </React.Fragment>
    )
}
