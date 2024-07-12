import { NavLink } from 'react-router-dom'
import './Admin.css'
import userprofile from '../../assets/images/heeseung_satu (1).png'
import { FaChevronRight } from 'react-icons/fa'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getallabsen } from '../../features/authSlice';


const AdminAbsensi = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { absenlist, isError} = useSelector((state => state.auth));
    console.log(absenlist);
    
    useEffect(()=>{
        dispatch(getallabsen())
    }, [dispatch]);

    
    useEffect(()=>{
        if(isError){
            navigate("/login");
        }
    }, [isError, navigate]);

    const [formData, setFormData] = useState({
        name: '',
        fromDate: '',
        toDate: ''
    })
    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        // your code
    }

    return <div>
        <h2 className="fw-bold">Employee Recap</h2>
        <div className='breadcrumbs'>
            <NavLink to="/admin/absensi" className='active-breadcrumbs'>Home</NavLink>&ensp;/&ensp;
            <NavLink to="/admin/absensi/employee">Employee</NavLink> 
        </div>
        <hr />
        
        <section className='section'>
            <form onSubmit={handleSubmit} className='form-absen'>
                <div>
                    <label htmlFor="name">Full Name/ID</label>
                    <input type="text" id='name' name='name' value={formData.name} placeholder='Placeholder' className='input-nama-id rounded px-3 py-1 text-secondary'
                    style={{border: '1px solid #aaa', backgroundColor: '#eee'}} />
                </div>
                <div>
                    <label htmlFor="fromDate">From Date</label>
                    {/* <input type="date" id='fromDate' name='fromDate' value={formData.fromDate} /> */}
                    <input type="date" name='fromDate' id='fromDate' value={formData.fromDate} onChange={e=>setMonth({...formData, fromDate: e.target.value})} placeholder='Placeholder' className='rounded px-3 py-1 text-secondary'
                    style={{border: '1px solid #aaa', backgroundColor: '#eee'}}
                    />
                </div>
                <div>
                    <label htmlFor="toDate">To Date</label>
                    {/* <input type="date" id='toDate' name='toDate' value={formData.toDate} /> */}
                    <input type="date" name='toDate' id='toDate' value={formData.toDate} onChange={e=>setMonth({...formData, toDate: e.target.value})} placeholder='Placeholder' className='rounded px-3 py-1 text-secondary'
                    style={{border: '1px solid #aaa', backgroundColor: '#eee'}}
                    />
                </div>
                <button type="submit" className='btn btn-success'>Submit</button>
            </form> 

            <div className='mt-5 d-flex flex-column align-items-center gap-3'>

                {
                    <div className="absen-card d-flex justify-content-between">
                        <div className='w-fit pe-3'><img src={userprofile} alt="" /></div>
                        <div className='w-100 d-flex align-items-center justify-content-between'>
                            <div>
                                Absent Date
                                <div className="mb-3 fw-bold">3 May 2024</div>
                                Type <br />
                                <div className="mb-3 btn btn-sm btn-danger">OUT</div> <br />
                                Timing
                                <div className="mb-3 fw-bold">10:40:35</div>
                                Location <br />
                                <a href='/admin/absensi/employee' className="fw-bold" style={{color: '#62BBE6', textDecoration: 'none'}}>View Location</a>
                            </div>
                            <div>
                                Full Name
                                <div className="mb-3 fw-bold">Jake Sim</div>
                                ID
                                <div className="mb-3 fw-bold">82137987642</div>
                                Position
                                <div className="mb-3 fw-bold">Data Analyst</div>
                                E-Mail
                                <div className="mb-3 fw-bold">jakepricia@gmail.com</div>
                            </div>
                            <a href='/admin/absensi/employee' className='pe-5 text-dark'>
                                <FaChevronRight />
                            </a>
                        </div>
                    </div>
                }

            </div>
        </section>
    </div>
}

export default AdminAbsensi