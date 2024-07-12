import { NavLink } from 'react-router-dom'
import './Admin.css'
import { useRef, useState } from 'react'
import { FaChevronDown, FaChevronUp, FaRegTrashAlt } from 'react-icons/fa'
import { FiUpload } from 'react-icons/fi'

const AdminManagementuserProfileAdd = () => {
    
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        username: '',
        phoneNumber: '',
        photo: '',
        email: '',
        position: '',
        gender: '',
        pin: '',
    })
    const [openDropdownGender, setOpenDropDownGender] = useState(false);
    const [openDropdownPosition, setOpenDropDownPosition] = useState(false);
    const inputRef = useRef(null)
    
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFormData({ ...formData, photo: e.dataTransfer.files[0] });
            inputRef.current.files = e.dataTransfer.files;
        }
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // your code
        // endpoint to add data
    }

    return <div>
        <h2 className="fw-bold">Management User</h2>
        <div className='breadcrumbs'>
            <NavLink to="/admin/employee">List Employee</NavLink>&ensp;/&ensp;
            <NavLink to="/admin/employee/profile">Profile Emmployee</NavLink>&ensp;/&ensp;
            <NavLink to="/admin/employee/add" className='active-breadcrumbs'>Add Employee</NavLink>
        </div>
        <hr />
        
        <section className='section'>
                <div className='p-0 m-0 d-flex align-items-center justify-content-between'>
                    <h4 className='fw-bold'>Add Employee</h4>
                </div>

                <form onSubmit={handleSubmit} className="mt-5 mx-0 mb-0 p-0" encType='multipart/form-data'>
                    <div className='mb-3'>
                        <label htmlFor="name" className='fw-bold'>Full Name</label>
                        <input type="text" name='name' id='name' className='w-100 px-3 py-1' style={{border: '1px solid #ccc', backgroundColor: '#eee', borderRadius: '5px'}} value={formData.name} onChange={handleOnChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="username" className='fw-bold'>Username</label>
                        <input type="text" name='username' id='username' className='w-100 px-3 py-1' style={{border: '1px solid #ccc', backgroundColor: '#eee', borderRadius: '5px'}} value={formData.username} onChange={handleOnChange}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email" className='fw-bold'>E-Mail</label>
                        <input type="email" name='email' id='email' className='w-100 px-3 py-1' style={{border: '1px solid #ccc', backgroundColor: '#eee', borderRadius: '5px'}} value={formData.email} onChange={handleOnChange}/>
                    </div>
                    
                    <div className=''>
                        <label htmlFor="photo" className='fw-bold'>Employee Photos</label>
                        {formData.photo && 
                            <div className='w-100 rounded px-3 py-1 mb-1 d-flex align-items-center justify-content-between' style={{border: '1px solid #ccc'}}>
                                <div className='d-flex align-items-center gap-3'>
                                    <img src={formData.photo instanceof File ? URL.createObjectURL(formData.photo) : formData.photo} alt="" style={{height: '70px'}}/>
                                    <div className='text-primary'>{formData.photo.name ? formData.photo.name : formData.photo}</div>
                                </div>
                                <div style={{cursor: 'pointer', userSelect: 'none'}} onClick={()=>setFormData({...formData, photo: ''})}>
                                    <FaRegTrashAlt className='text-danger'/>
                                </div>
                            </div>
                        }

                        <label htmlFor="photo" className='px-3 py-1 w-100 rounded-3' 
                            style={{
                                border: '2px dashed #ccc',
                                backgroundColor: '#eee',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '20px',
                                cursor: 'pointer',
                            }}
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                        >
                            <div className='text-secondary fs-3 d-flex align-items-center p-0 m-0'>
                                <FiUpload />
                            </div>
                            <div>
                                <div className="fw-bold">Drag & drop a [type of file]</div>
                                <div>or <span className="text-primary">browse</span> to choose a file</div>
                            </div>
                        </label>
                        <input 
                            ref={inputRef}
                            type="file" 
                            accept='.png, .jpg, .jpeg'
                            name="photo" 
                            id="photo" 
                            onChange={e=>setFormData({...formData, photo: e.target.files[0]})}
                            className='invisible' 
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="pin" className='fw-bold'>PIN</label>
                        <input type="text" name='pin' id='pin' className='w-100 px-3 py-1' style={{border: '1px solid #ccc', backgroundColor: '#eee', borderRadius: '5px'}}  value={formData.pin} onChange={handleOnChange}/>
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor="gender" className='fw-bold'>Gender</label>
                        <div className='w-100 px-3 py-1 d-flex align-items-center justify-content-between' style={{border: '1px solid #ccc', backgroundColor: '#eee', borderRadius: '5px', userSelect: 'none', cursor: 'pointer'}} onClick={()=>setOpenDropDownGender(!openDropdownGender)}>
                            {formData.gender ? formData.gender : 'Enter Gender'} {!openDropdownGender ? <FaChevronDown style={{fontSize: '12px'}}/> : <FaChevronUp  style={{fontSize: '12px'}}/>}
                        </div>
                        {openDropdownGender && <div className='px-3 py-1' style={{backgroundColor: '#eee'}}>
                            <div>
                                <input type="radio" name="gender" id="gender-man" value={'Man'} defaultChecked={formData.gender == 'Man'} onChange={(e)=>setFormData({...formData, gender: e.target.value})} />
                                &emsp;<label style={{width: '90%', cursor: 'pointer'}} htmlFor="gender-man">Man</label>
                            </div>
                            <div>
                                <input type="radio" name="gender" id="gender-woman" value={'Woman'} defaultChecked={formData.gender == 'Woman'} onChange={(e)=>setFormData({...formData, gender: e.target.value})} />
                                &emsp;<label style={{width: '90%', cursor: 'pointer'}} htmlFor="gender-woman">Woman</label>
                            </div>
                        </div>}
                    </div>
                    
                    <div className='mb-3'>
                        <label htmlFor="" className='fw-bold'>Position</label>
                        <div className='w-100 px-3 py-1 d-flex align-items-center justify-content-between' style={{border: '1px solid #ccc', backgroundColor: '#eee', borderRadius: '5px', userSelect: 'none', cursor: 'pointer'}} onClick={()=>setOpenDropDownPosition(!openDropdownPosition)}>
                            {formData.position ? formData.position : 'Enter Position'} {!openDropdownPosition ? <FaChevronDown style={{fontSize: '12px'}}/> : <FaChevronUp  style={{fontSize: '12px'}}/>}
                        </div>
                        {openDropdownPosition && <div className='px-3 py-1' style={{backgroundColor: '#eee'}}>
                            <div>
                                <input type="radio" name="position" id="position-uiux" value={'UI/UX Designer'} defaultChecked={formData.position == 'UI/UX Designer'} onChange={(e)=>setFormData({...formData, position: e.target.value})} />
                                &emsp;<label style={{width: '90%', cursor: 'pointer'}} htmlFor="position-uiux">UI/UX Designer</label>
                            </div>
                        </div>}
                    </div>

                    <div className='mb-3'>
                        <label htmlFor="phoneNumber" className='fw-bold'>Number Handphone</label>
                        <input type="text" name='phoneNumber' id='phoneNumber' className='w-100 px-3 py-1' style={{border: '1px solid #ccc', backgroundColor: '#eee', borderRadius: '5px'}} value={formData.phoneNumber} onChange={handleOnChange}/>
                    </div>

                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
        </section>
    </div>
}

export default AdminManagementuserProfileAdd