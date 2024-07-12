import { NavLink } from 'react-router-dom'
import './Admin.css'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import userprofile from '../../assets/images/heeseung_satu (1).png'
import success from '../../assets/images/Mask group.png'
import failed from '../../assets/images/carbon_warning-filled.png'

const AdminManagementUserProfile = () => {

    const dataDummy = {
        id: '040803APH',
        name: 'Lee Hee Seung',
        username: 'heeseungmanda',
        phoneNumber: '085158443573',
        email: 'heeseungmanda@gmail.com',
        position: 'UI/UX Designer',
        gender: 'Man',
        pin: '040803',
    }
        

    const handleDelete = (e) => {
        e.preventDefault()
    }
    const handleSuspend = (e) => {
        e.preventDefault()
    }

    return <div>
        <h2 className="fw-bold">Management User</h2>
        <div className='breadcrumbs'>
            <NavLink to="/admin/employee">Profile Employee</NavLink>&ensp;/&ensp;
            <NavLink to="/admin/employee/profile" className='active-breadcrumbs'>Profile Emmployee</NavLink>&ensp;/&ensp;
            <NavLink to="/admin/employee/add">Add Employee</NavLink>
        </div>
        <hr />
        
        <section className='section'>
            <div className='d-flex align-items-center justify-content-between'>
                <h4 className='fw-bold'>List Employee</h4>
                <div className='d-flex align-items-center justify-content-between gap-2'>
                    <a href="/admin/employee/profile/edit" className="btn btn-success text-light d-flex align-items-center"><FiEdit />&ensp;Edit Employee</a>
                    <button type='button' className="btn btn-danger d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#deleteModal"><FaRegTrashAlt />&ensp;Delete Employee</button>
                    <form onSubmit={handleSuspend} className='p-0 m-0'>
                        <button type='submit' className="btn btn-dark"><span className='fw-semibold'>✕</span>&ensp;Suspend Employee</button>
                    </form>
                </div>
            </div>
            <div className='mt-5'>
                <div className="d-flex justify-content-center">
                    <img src={userprofile} alt="" className='w-25'/>
                </div>
                <div className='mt-5'>
                    <div className='d-flex align-items-center px-3 py-2 rounded' style={{backgroundColor: '#F3D2FB'}}>
                        <div className='w-25 fw-bold'>Full Name</div>
                        <div>{dataDummy.name}</div>
                    </div>
                    <div className='d-flex align-items-center px-3 py-2 rounded'>
                        <div className='w-25 fw-bold'>ID</div>
                        <div>{dataDummy.id}</div>
                    </div>
                    <div className='d-flex align-items-center px-3 py-2 rounded' style={{backgroundColor: '#F3D2FB'}}>
                        <div className='w-25 fw-bold'>Position</div>
                        <div>{dataDummy.position}</div>
                    </div>
                    <div className='d-flex align-items-center px-3 py-2 rounded'>
                        <div className='w-25 fw-bold'>E-Mail</div>
                        <div>{dataDummy.email}</div>
                    </div>
                    <div className='d-flex align-items-center px-3 py-2 rounded' style={{backgroundColor: '#F3D2FB'}}>
                        <div className='w-25 fw-bold'>Username</div>
                        <div>{dataDummy.username}</div>
                    </div>
                    <div className='d-flex align-items-center px-3 py-2 rounded'>
                        <div className='w-25 fw-bold'>Number Handphone</div>
                        <div>{dataDummy.phoneNumber}</div>
                    </div>
                    <div className='d-flex align-items-center px-3 py-2 rounded' style={{backgroundColor: '#F3D2FB'}}>
                        <div className='w-25 fw-bold'>Gender</div>
                        <div>{dataDummy.gender}</div>
                    </div>
                    <div className='d-flex align-items-center px-3 py-2 rounded'>
                        <div className='w-25 fw-bold'>PIN</div>
                        <div>{dataDummy.pin}</div>
                    </div>
                </div>
            </div>
        </section>

        {/* modal */}
        <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <div className="mb-2 fw-semibold fs-5">Delete Employee</div>
                        Are you sure you want to delete this data?
                        <div className='mt-3 d-flex align-items-center justify-content-center gap-2'>
                            <button type="button" className="btn btn-sm btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                            <form onSubmit={handleDelete} className='p-0 m-0'>
                                <button type="submit" className="btn btn-sm btn-danger">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="modal fade" id="successModal" tabIndex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <img src={success} alt="" className='w-25 mb-4'/>
                        <div className="fw-bold fs-3">Success!</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="failedModal" tabIndex="-1" aria-labelledby="failedModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body text-center">
                        <img src={failed} alt="" className='w-25 mb-4'/>
                        <div className="fw-bold fs-3">Failed!</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
}

export default AdminManagementUserProfile