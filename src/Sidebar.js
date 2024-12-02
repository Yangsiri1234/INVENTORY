import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/" className="brand-link">
                <span className="brand-text font-weight-light">ระบบคลังสินค้า</span>
            </a>
            <div className="sidebar">
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> {/* Dashboard */}
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/members" className="nav-link"> {/* Members */}
                                <i className="nav-icon fas fa-users"></i>
                                <p>สมาชิก</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;