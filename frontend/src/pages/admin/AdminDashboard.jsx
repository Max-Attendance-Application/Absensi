import { NavLink } from 'react-router-dom'
import './Admin.css'
import { FaCaretRight, FaUserFriends } from 'react-icons/fa'
import { TbArrowsSort } from 'react-icons/tb'
import userprofile from '../../assets/images/Ellipse.png'
import { useEffect, useState } from 'react'
import { FaRegCalendarCheck } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe} from '../../features/authSlice';
import { getallemployee } from '../../features/authSlice'

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError, employeeList} = useSelector((state => state.auth));
    

    useEffect(()=>{
        dispatch(getMe());
        dispatch(getallemployee())
    }, [dispatch]);


    useEffect(()=>{
        if(isError){
            navigate("/login");
        }
    }, [isError, navigate]);

    const [month, setMonth] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // your code
    }

    const dataDummy = [
        {
            id: 1,
            name: 'Lee Hee Seung',
            username: 'heeseungmanda',
            hke: 4,
            position: 'UI/UX Designer',
        },
        {
            id: 2,
            name: 'Lee Hee Seung',
            username: 'heeseungmanda',
            hke: 4,
            position: 'UI/UX Designer',
        },
        {
            id: 3,
            name: 'Lee Hee Seung',
            username: 'heeseungmanda',
            hke: 4,
            position: 'UI/UX Designer',
        },
    ]

    return <div>
        <h2 className="fw-bold">Home Dashboard</h2>
        <div className='breadcrumbs'>
            <NavLink to="/admin/dashboard" className={({isActive}) => isActive && 'active-breadcrumbs'}>Home Dashboard</NavLink> /
        </div>
        <br />
        <div>
            <section className='dashboard-section'>
                <h5>Month</h5>
                <form onSubmit={handleSubmit} className="w-100 p-0 mt-4  d-flex align-items-center justify-content-between">
                    {/* <label htmlFor="month-search" className='px-3 py-1 rounded text-secondary d-flex align-items-center' style={{border: '1px solid #aaa'}}>Placeholder&emsp;&emsp;<FaRegCalendarCheck /></label>
                    <input type="date" id='month-search' value={month} onChange={e=>setMonth(e.target.value)} placeholder='Placeholder'/> */}
                    <input type="month" id='month-search' value={month} onChange={e=>setMonth(e.target.value)} placeholder='Placeholder' className='rounded px-3 py-1 text-secondary'
                    style={{border: '1px solid #aaa'}}
                    />
                    <button type="submit" className='btn btn-success'>Search</button>
                </form>
            </section>

            <section className='w-100 my-3 d-flex gap-3'>
                <div className='w-75'>
                    <div className='d-flex gap-3'>
                        <div className="section-card">
                            <div>
                                <span className='fw-semibold' style={{color: 'gray'}}>Total Entry</span><br />
                                <span className="fw-bold fs-4">30</span>
                            </div>
                            <div className='users-icon'><FaUserFriends style={{color: '#8280FF'}} /></div>
                        </div>
                        <div className="section-card">
                            <div>
                                <span className='fw-semibold' style={{color: 'gray'}}>Employee Active</span><br />
                                <span className="fw-bold fs-4">30</span>
                            </div>
                            <div className='users-icon'><FaUserFriends style={{color: '#8280FF'}} /></div>
                        </div>
                        <div className="section-card">
                            <div>
                                <span className='fw-semibold' style={{color: 'gray'}}>Employee Suspend</span><br />
                                <span className="fw-bold fs-4">30</span>
                            </div>
                            <div className='users-icon'><FaUserFriends style={{color: '#8280FF'}} /></div>
                        </div>
                    </div>
                    <div className='mt-3 d-flex gap-3'>
                        <div className="section-card">
                            <div>
                                <span className='fw-semibold' style={{color: 'gray'}}>HKA</span><br />
                                <span className="fw-bold fs-4">30</span>
                            </div>
                            <div className='users-icon'><FaUserFriends style={{color: '#8280FF'}} /></div>
                        </div>
                        <div className="section-card">
                            <div>
                                <span className='fw-semibold' style={{color: 'gray'}}>HKE</span><br />
                                <span className="fw-bold fs-4">30</span>
                            </div>
                            <div className='users-icon'><FaUserFriends style={{color: '#8280FF'}} /></div>
                        </div>
                        <div className="section-card">
                            <div>
                                <span className='fw-semibold' style={{color: 'gray'}}>Hari Libur</span><br />
                                <span className="fw-bold fs-4">30</span>
                            </div>
                            <div className='users-icon'><FaUserFriends style={{color: '#8280FF'}} /></div>
                        </div>
                    </div>
                </div>
                <div className='w-25 section-card fw-bold fs-5 d-flex align-items-center justify-content-center'>
                    Untuk Widget Finance
                </div>
            </section>

            <section className="section">
                <div className='d-flex align-items-center justify-content-between'>
                    <h4 className='fw-bold'>Employee</h4>
                    <button className='text-light border-0 rounded-pill py-2 px-3' style={{backgroundColor: '#A14FBC'}}>Filter & Sort&ensp;<TbArrowsSort /></button>
                </div>
                <table className='tb-rounded mt-3'>
                    <thead style={{color: 'gray'}}>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>HKE</th>
                            <th>Position</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {employeeList && employeeList.map((employee, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'tr-purple' : ''}>
                            <td><img src={userprofile} alt="" /></td>
                            <td>{employee.name}</td>
                            <td>{employee.username}</td>
                            <td>{employee.hke || 'N/A'}</td>
                            <td>{employee.position}</td>
                            <td><FaCaretRight /></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </section>
        </div>
    </div>
}

export default AdminDashboard