// src/Projects.js
import React from 'react';

// นำเข้า CSS ที่จำเป็น
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'; 
// หากคุณต้องการใช้ Font Awesome จาก CDN
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/adminlte.min.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';

const Projects = () => {
    return (
        <div className="wrapper">
            {/* Navbar */}
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                {/* Left navbar links */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </ul>
                {/* Right navbar links */}
                <ul className="navbar-nav ml-auto">
                    {/* Search */}
                    <li className="nav-item">
                        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                            <i className="fas fa-search"></i>
                        </a>
                        <div className="navbar-search-block">
                            <form className="form-inline">
                                <div className="input-group input-group-sm">
                                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    {/* Messages Dropdown */}
                    {/* ... add other navigation items ... */}
                </ul>
            </nav>
            {/* Main Sidebar */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="#" className="brand-link">
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user (optional) */}
                    {/* ... add sidebar content ... */}
                </div>
            </aside>

            {/* Content Wrapper */}
            <div className="content-wrapper">
                {/* Content Header */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Projects</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Projects</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">Projects</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus"></i>
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{ width: '1%' }}>#</th>
                                        <th style={{ width: '20%' }}>Project Name</th>
                                        <th style={{ width: '30%' }}>Team Members</th>
                                        <th>Project Progress</th>
                                        <th style={{ width: '8%' }} className="text-center">Status</th>
                                        <th style={{ width: '20%' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* แสดงข้อมูลโปรเจกต์ */}
                                    {Array(5).fill(0).map((_, index) => (
                                        <tr key={index}>
                                            <td>#</td>
                                            <td>
                                                <a>AdminLTE v3</a>
                                                <br />
                                                <small>Created 01.01.2019</small>
                                            </td>
                                            <td>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item">
                                                        <img alt="Avatar" className="table-avatar" src="../../dist/img/avatar.png" />
                                                    </li>
                                                    {/* เพิ่มรายชื่อสมาชิกทีม */}
                                                </ul>
                                            </td>
                                            <td className="project_progress">
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{ width: '57%' }}></div>
                                                </div>
                                                <small>57% Complete</small>
                                            </td>
                                            <td className="project-state">
                                                <span className="badge badge-success">Success</span>
                                            </td>
                                            <td className="project-actions text-right">
                                                <a className="btn btn-primary btn-sm" href="#">
                                                    <i className="fas fa-folder"></i> View
                                                </a>
                                                <a className="btn btn-info btn-sm" href="#">
                                                    <i className="fas fa-pencil-alt"></i> Edit
                                                </a>
                                                <a className="btn btn-danger btn-sm" href="#">
                                                    <i className="fas fa-trash"></i> Delete
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="main-footer">
                <div className="float-right d-none d-sm-block">
                    <b>Version</b> 3.2.0
                </div>
                <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
            </footer>

            {/* Control Sidebar */}
            <aside className="control-sidebar control-sidebar-dark"></aside>
        </div>
    );
};

export default Projects;