import React from 'react';

const AdminLayout = () => {
  return (
    <div className="wrapper">
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Navbar content */}
        <a className="navbar-brand" href="#">AdminLTE</a>
        {/* เพิ่มส่วนเมนูเพิ่มเติมที่นี่ */}
      </nav>

      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <span className="brand-text font-weight-light">AdminLTE</span>
        </a>
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <p>Dashboard</p>
                </a>
              </li>
              {/* เพิ่มเมนูอื่น ๆ ที่นี่ */}
            </ul>
          </nav>
        </div>
      </aside>

      <div className="content-wrapper">
        <section className="content">
          {/* Content here */}
          <h1>Hello, Admin!</h1>
        </section>
      </div>

      <footer className="main-footer">
        <strong>Copyright &copy; 2023 <a href="#">Your Company</a>.</strong>
        All rights reserved.
      </footer>
    </div>
  );
};

export default AdminLayout;