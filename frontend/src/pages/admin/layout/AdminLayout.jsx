import { NavLink, Outlet, useNavigate } from "react-router-dom"
import logoHitam from '../../../assets/images/logo-hitam.png'
import profileNav from '../../../assets/images/profile-nav.png'
import profile from '../../../assets/images/Profile.png'
import { RxHamburgerMenu } from "react-icons/rx"
import { IoChevronDownCircleOutline } from "react-icons/io5"
import { useState, useEffect } from "react"
import './AdminLayout.css'
import { MdOutlineDashboard } from "react-icons/md"
import { LuClipboardCheck, LuLogOut } from "react-icons/lu"
import { FaUser, FaUserGear } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, getMe, reset } from '../../../features/authSlice';


const AdminLayout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    const { user, isLoading, isSuccess, IsError, message } = useSelector((state) => state.auth);

    const Logout = () =>{
        dispatch(LogOut());
        dispatch(reset());
        navigate("/login");
    }
    
    const [openSidebar, setOpenSidebar] = useState(true)

    const activeLink = () => {
        console.log('active');
    }

    return (
        <div className="master-layout">
            <div className="headbar px-3 py-1 bg-light d-flex align-items-center justify-content-between shadow-lg">
                <div className="d-flex align-items-center gap-3">
                    <a href="/"><img src={logoHitam} alt="" style={{ width: '180px' }} /></a>
                    <button onClick={() => setOpenSidebar(!openSidebar)} className="border-0 bg-transparent"><RxHamburgerMenu style={{ width: '25px', height: '25px' }} /></button>
                </div>
                <div className="p-2 d-flex align-items-center justify-content-center gap-3">
                    <div><img src={profileNav} alt="" style={{ backgroundColor: 'gray', borderRadius: '100%', width: '40px' }} /></div>
                    <div className="d-flex flex-column justify-content-center" style={{ fontSize: '12px' }}>
                    <span className="fw-bold">{user ? user.username : ''}</span>
                    <span>{user ? user.position : ''}</span>
                    </div>
                    <button className="border-0 bg-transparent"><IoChevronDownCircleOutline style={{ width: '25px', height: '25px' }} /></button>
                </div>
            </div>

            <div className="w-100 h-100 d-flex justify-content-between">
                <div className={`p-4`} style={{ backgroundColor: '#562266', color: 'white', width: openSidebar ? '300px' : 'fit-content', height: '91.3vh' }}>
                    <div className="d-flex flex-column align-items-center gap-3">
                        <img src={profile} alt="" style={{ width: !openSidebar && '30px' }} />
                        {openSidebar && <div className="fw-semibold">{user ? user.name : ''}</div>}
                    </div>
                    <hr style={{ opacity: 1 }} />
                    <div className="d-flex flex-column gap-2">
                        <NavLink to={'/admin/dashboard'} className={({ isActive }) => `navlink ${isActive ? 'activelink' : ''}`}>
                            <MdOutlineDashboard />
                            {openSidebar && <span>Home Dashboard</span>}
                        </NavLink>
                        <NavLink to={'/admin/absensi'} className={({ isActive }) => `navlink ${isActive ? 'activelink' : ''}`}>
                            <LuClipboardCheck />
                            {openSidebar && <span>Absensi</span>}
                        </NavLink>
                        <NavLink to={'/admin/employee'} className={({ isActive }) => `navlink ${isActive ? 'activelink' : ''}`}>
                            <FaUser />
                            {openSidebar && <span>Management User</span>}
                        </NavLink>
                        <NavLink to={'/admin/admin'} className={({ isActive }) => `navlink ${isActive ? 'activelink' : ''}`}>
                            <FaUserGear />
                            {openSidebar && <span>Admin</span>}
                        </NavLink>
                        <NavLink to={'/admin/rekap-gaji'} className={({ isActive }) => `navlink ${isActive ? 'activelink' : ''}`}>
                            <FaUserGear />
                            {openSidebar && <span>Rekap Gaji</span>}
                        </NavLink>
                    </div>
                    <hr style={{ opacity: 1 }} />
                    <form className="p-0 m-0">
                        <button
                            type="submit"
                            onClick={Logout}
                            className="w-100 navlink border-0 bg-transparent text-light">
                            <LuLogOut />
                            {openSidebar && <span>Logout</span>}
                        </button>
                    </form>
                </div>

                <div className="w-100 h-100 p-4" style={{ overflowY: 'scroll' }}>
                    <Outlet />
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    );
}

export default AdminLayout