import React, { useState } from 'react';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // เพิ่มการนำเข้าสไตล์
import UserDetails from './UserDetails'; // นำเข้า UserDetails
import Sidebar from './Sidebar';
import Dashboard from './Dashboard'; // นำเข้า Dashboard
import Main from './Main';
import EditUser from './EditUser'; // นำเข้า EditUser
import Navbar from './Navbar';


function App() {
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userList, setUserList] = useState([
        { id: 1, name: 'Tanasiri Benajareporn', status: 'Active' },
    ]);

    const handleToggle = () => {
        alert("Toggle status!");
    };

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleOpenEditModal = (user) => {
        setSelectedUser(user);
        setShowEditModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedUser(null);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setSelectedUser(null);
    };

    const handleUpdateUser = (updatedUser) => {
        const updatedUserList = userList.map(user => (user.id === updatedUser.id ? updatedUser : user));
        setUserList(updatedUserList);
        handleCloseEditModal(); // ปิด modal หลังจากอัพเดท
    };

    return (
        <div className="wrapper">
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                            <i className="fas fa-bars"></i>
                        </a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Members</a> {/* ลบ onClick handleReload */}
                    </li>
                </ul>
            </nav>

            {/* Side Bar */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="#" className="brand-link">
                    <span className="brand-text font-weight-light">ระบบคลังสินค้า</span>
                </a>
                <div className="sidebar">
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>สมาชิก</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Content Wrapper */}
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>ระบบคลังสินค้า</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">ระบบคลังสินค้า</a></li>
                                    <li className="breadcrumb-item active">สมาชิก</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Members</h3>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{ width: '10%' }}>No</th>
                                        <th style={{ width: '60%' }}>Name</th>
                                        <th style={{ width: '20%' }} className="text-center">Status</th>
                                        <th style={{ width: '10%' }} className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userList.map((user, index) => (
                                        <tr key={user.id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <a>{user.name}</a><br />
                                            </td>
                                            <td className="project-state text-center">
                                                <button className="btn btn-sm btn-success" onClick={handleToggle}>On</button>
                                                <button className="btn btn-sm btn-danger" onClick={handleToggle}>Off</button>
                                            </td>
                                            <td className="project-actions text-right">
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleOpenModal(user)}>
                                                        <i className="fas fa-folder"></i> View
                                                    </button>
                                                    <button className="btn btn-outline-info btn-sm" onClick={() => handleOpenEditModal(user)}>
                                                        <i className="fas fa-pencil-alt"></i> Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

            {/* Modal สำหรับแสดงข้อมูลสมาชิก */}
            {showModal && selectedUser && (
                <UserDetails user={selectedUser} onClose={handleCloseModal} />
            )}

            {/* Modal สำหรับแก้ไขข้อมูลสมาชิก */}
            {showEditModal && selectedUser && (
                <EditUser user={selectedUser} onUpdate={handleUpdateUser} onClose={handleCloseEditModal} />
            )}

            {/* Footer */}
            <footer className="main-footer">
                {/* ลบข้อความลิขสิทธิ์ออก */}
            </footer>
        </div>
    );
}

export default App;