import { NavLink } from 'react-router-dom'
import './Admin.css'
import userprofile from '../../assets/images/heeseung_satu (1).png'

const AdminAbsensiEmployee = () => {

    return <div>
        <h2 className="fw-bold">Employee Recap</h2>
        <div className='breadcrumbs'>
            <NavLink to="/admin/absensi" >Home</NavLink>&ensp;/&ensp;
            <NavLink to="/admin/absensi/employee" className='active-breadcrumbs'>Employee</NavLink> 
        </div>
        <hr />
        
        <section className='section'>
            <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15852.913305595388!2d106.78244315!3d-6.6185320999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1719507232381!5m2!1sid!2sid"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="mt-5 absen-card d-flex justify-content-between">
                <div className='w-fit pe-3'><img src={userprofile} alt="" /></div>
                <div className='w-100 d-flex align-items-center' style={{gap: '20%'}}>
                    <div className='w-50'>
                        Absent Date
                        <div className="mb-3 fw-bold">3 May 2024</div>
                        Type <br />
                        <div className="mb-3 btn btn-sm btn-danger">OUT</div> <br />
                        Timing
                        <div className="mb-3 fw-bold">10:40:35</div>
                        Location <br />
                        <div className="fw-bold" >Jl. Sadewa Raya No.3, RT.05/RW.14, Tegal Gundil, Kec. Bogor Utara, Kota Bogor, Jawa Barat 16153</div>
                    </div>
                    <div className='w-50'>
                        Full Name
                        <div className="mb-3 fw-bold">Jake Sim</div>
                        ID
                        <div className="mb-3 fw-bold">82137987642</div>
                        Position
                        <div className="mb-3 fw-bold">Data Analyst</div>
                        E-Mail
                        <div className="mb-3 fw-bold">jakepricia@gmail.com</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default AdminAbsensiEmployee