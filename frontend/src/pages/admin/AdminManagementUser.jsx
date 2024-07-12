import { NavLink } from 'react-router-dom'
import './Admin.css'
import userprofile from '../../assets/images/Ellipse.png'
import { FaCaretRight } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'

const AdminManagementuser = () => {

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

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return <div>
        <h2 className="fw-bold">Employee Recap</h2>
        <div className='breadcrumbs'>
            <NavLink to="/admin/employee" className='active-breadcrumbs'>Management User</NavLink>&ensp;/&ensp;
            <NavLink to="/admin/employee/profile">Profile Emmployee</NavLink>&ensp;/&ensp;
            <NavLink to="/admin/employee/add">Add Employee</NavLink>
        </div>
        <hr />
        
        <section className='section'>
                <form onSubmit={handleSubmit} className='p-0 m-0 d-flex align-items-center justify-content-between'>
                    <h4 className='fw-bold'>List Employee</h4>
                    <div className='px-3 py-1 w-50 text-secondary rounded-pill d-flex gap-3' style={{border: '1px solid #ddd'}}>
                        <label htmlFor="search"><IoSearchSharp /></label>
                        <input type="search" id='search' name='search' placeholder='Search' className='w-100 input-nama-id' style={{border: 'none', background: 'transparent', outline: 'none'}}/>
                    </div>
                    <button className="btn btn-success">+ Add Employee</button>
                </form>
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
                        {dataDummy.map((data, index) => {
                            return <tr key={index} className={index%2==0&&'tr-purple'}>
                                <td><img src={userprofile} alt="" /></td>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.hke}</td>
                                <td>{data.position}</td>
                                <td><a href="/admin/employee/profile" className='text-reset'><FaCaretRight /></a></td>
                            </tr>
                        })}
                    </tbody>
                </table>
        </section>
    </div>
}

export default AdminManagementuser