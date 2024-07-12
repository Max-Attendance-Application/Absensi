import { NavLink } from 'react-router-dom'
import './Admin.css'
import userprofile from '../../assets/images/Ellipse.png'
import { FaCaretRight } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { useState } from 'react'
import { BsDot } from 'react-icons/bs'

const AdminAdmin = () => {

    const dataDummy = [
        {
            id: 1,
            hka: 20,
            periode: 2024,
            bulan: 'mei',
            hari_libur: [
                {tanggal: '1 Mei 2024', keterangan: 'Hari Libur ...'},
                {tanggal: '5 Mei 2024', keterangan: 'Hari Libur ...'},
                {tanggal: '10 Mei 2024', keterangan: 'Hari Libur ...'},
            ],
        },
        {
            id: 1,
            hka: 20,
            periode: 2024,
            bulan: 'mei',
            hari_libur: [
                {tanggal: '1 Mei 2024', keterangan: 'Hari Libur ...'},
                {tanggal: '5 Mei 2024', keterangan: 'Hari Libur ...'},
                {tanggal: '10 Mei 2024', keterangan: 'Hari Libur ...'},
            ],
        },
    ]

    const [sortDate, setSortdate] = useState({
        fromDate: '',
        toDate: '',
    })

    // const hkaLiburKosong = {id: '', hka: '', hari_libur: ''}
    const [showAllMonthHka, setShowAllMonthHka] = useState(false)
    const [hka, setHka] = useState([])
    const [currentPeriode, setCurrentPeriode] = useState('')

    const [hariLibur, setHariLibur] = useState()

    let tahun = []
    for (let i = 1900; i <= 2099; i++) {
        tahun.push(i)
    }

    const handleChangeBulanHka = (e) => {
        const data = hka.find(i => i.periode == currentPeriode && i.bulan == e.target.id)
        // const bulan = 
        if (!data) {
            setHka([
                ...hka,
                {
                    periode: currentPeriode,
                    bulan: e.target.id,
                    jumlah: e.target.value,
                }
            ])
        }else {
            setHka(prevData => {
                return prevData.map(item => {
                    if (item.periode == currentPeriode && item.bulan == e.target.id) {
                        return {
                            ...item,
                            jumlah: e.target.value,
                        }
                    }
                })
            })
        }
        // console.log(data);
        // console.log(hka.find(c => c.periode == currentPeriode && c.bulan == e.target.id));
    }

    console.log(hka);

    const handelChangeSortDate = e => {
        setSortdate({ ...sortDate, [e.target.name]: e.target.value });
    }

    const handleSubmitSort = (e) => {
        e.preventDefault()
    }
    const handleSubmitHka = (e) => {
        e.preventDefault()
        setCurrentPeriode('')
        setHka([])
    }
    const handleSubmitLibur = (e) => {
        e.preventDefault()
    }

    return <div>
        <h2 className="fw-bold">Admin</h2>
        <div className='breadcrumbs'>
            <NavLink to="/admin/admin" className='active-breadcrumbs'>Admin</NavLink>&ensp;/
        </div>
        <hr />
        
        <section style={{backgroundColor: 'white', borderRadius: '20px 20px 0 0'}}>
            <form onSubmit={handleSubmitSort} className='p-4 d-flex align-items-end justify-content-between shadow-sm' style={{
                // padding: '20px',
                backgroundColor: 'white',
                borderRadius: '20px 20px 0 0'
            }}>
                <div className='d-flex align-items-center gap-5'>
                    <div>
                        <label htmlFor="fromDate" className='fw-semibold'>From Date</label><br />
                        {/* <input type="date" id='fromDate' name='fromDate' value={sortDate.fromDate} /> */}
                        <input type="date" name='fromDate' id='fromDate' value={sortDate.fromDate} onChange={handelChangeSortDate} placeholder='Placeholder' className='rounded px-3 py-1 text-secondary'
                        style={{border: '1px solid #aaa', backgroundColor: '#eee'}}
                        />
                    </div>
                    <div>
                        <label htmlFor="toDate" className='fw-semibold'>To Date</label><br />
                        {/* <input type="date" id='toDate' name='toDate' value={sortDate.toDate} /> */}
                        <input type="date" name='toDate' id='toDate' value={sortDate.toDate} onChange={handelChangeSortDate} placeholder='Placeholder' className='rounded px-3 py-1 text-secondary'
                        style={{border: '1px solid #aaa', backgroundColor: '#eee'}}
                        />
                    </div>
                </div>
                <button className="btn btn-success">Search</button>
            </form>

            <div style={{padding: '20px'}}>
                <div className='d-flex align-items-center justify-content-end gap-3'>
                    <button className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#addHkaModal" onClick={()=>setShowAllMonthHka(false)}>+ Add HKA</button>
                    <button className="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#addLiburModal">+ Add Hari Libur</button>
                </div>

                <table className='mt-3'>
                    <thead style={{borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc'}}>
                        <tr>
                            <th>No</th>
                            <th>HKA</th>
                            <th>Jumlah Hari Libur</th>
                            <th>Hari Libur</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataDummy && dataDummy.map((data, i) => {
                            return data.hari_libur && data.hari_libur.map((libur, j) => { 
                                return <tr key={j} className={(j+i)%2==1 ? 'tr-purple' : ''} style={{borderBottom:(j+i)%2==1 && '2px solid #ccc'}}>
                                    <td>{j==0 && i+1}</td>
                                    <td>{j==0 && data.hka + ' Hari'}</td>
                                    <td>{j==0 && data.hari_libur.length}</td>
                                    <td ><BsDot />&ensp;{libur.tanggal} - {libur.keterangan}</td>
                                </tr>
                            })
                        })}
                    </tbody>
                </table>
            </div>
        </section>

        {/* modals */}
        <div className="modal fade" id="addHkaModal" tabIndex="-1" aria-labelledby="addHkaModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content w-100 bg-light d-flex flex-column align-items-center justify-content-center rounded-5 border-0">
                    <div style={{backgroundColor: '#51AB8C'}} className='w-100 rounded-top-5 px-3 py-2 text-center text-light fw-bold fs-5'>
                        HKA
                    </div>
                    <form className='m-3'>

                        <div className='d-flex align-items-center justify-content-center gap-5'>
                            <div className="d-flex flex-column align-items-center gap-3" style={{width: '300px'}}>
                                <div className='w-100 d-flex align-items-center justify-content-between'>
                                    <label htmlFor="periode" className='fw-bold'>Periode</label>
                                    {/* <input type="number" name="periode" id="periode"/> */}
                                    <select name="periode" id="periode" onChange={(e)=>setCurrentPeriode(e.target.value)}>
                                        <option value=""></option>
                                        {tahun.map((t)=>{
                                            return <option key={t} value={t}>{t}</option>
                                        })}
                                    </select>
                                </div>
                                <div className='w-100 d-flex align-items-center justify-content-between'>
                                    <label htmlFor="jan" className='fw-semibold'>Jan</label>
                                    <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="jan" onChange={e => setHka([
                                        ...hka,
                                        {
                                            periode: currentPeriode, 
                                            bulan: e.target.id, 
                                            jumlah: e.target.value
                                        }
                                    ])}/>
                                </div>
                                <div className='w-100 d-flex align-items-center justify-content-between'>
                                    <label htmlFor="feb" className='fw-semibold'>Feb</label>
                                    <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="feb" onChange={handleChangeBulanHka}/>
                                </div>
                                <div className='w-100 d-flex align-items-center justify-content-between'>
                                    <label htmlFor="mar" className='fw-semibold'>Mar</label>
                                    <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="mar" onChange={handleChangeBulanHka}/>
                                </div>
                                <div className='w-100 d-flex align-items-center justify-content-between'>
                                    <label htmlFor="apr" className='fw-semibold'>Apr</label>
                                    <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="apr"/>
                                </div>
                                {showAllMonthHka && <div className='w-100 d-flex flex-column align-items-center gap-3'>
                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                        <label htmlFor="mei" className='fw-semibold'>Mei</label>
                                        <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="mei"/>
                                    </div>
                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                        <label htmlFor="jun" className='fw-semibold'>Jun</label>
                                        <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="jun"/>
                                    </div>
                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                        <label htmlFor="jul" className='fw-semibold'>Jul</label>
                                        <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="jul"/>
                                    </div>
                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                        <label htmlFor="agu" className='fw-semibold'>Agu</label>
                                        <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="agu"/>
                                    </div>
                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                        <label htmlFor="sep" className='fw-semibold'>Sep</label>
                                        <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="sep"/>
                                    </div>
                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                        <label htmlFor="okt" className='fw-semibold'>Okt</label>
                                        <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="okt"/>
                                    </div>
                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                        <label htmlFor="nov" className='fw-semibold'>Nov</label>
                                        <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="nov"/>
                                    </div>
                                    <div className='w-100 d-flex align-items-center justify-content-between'>
                                        <label htmlFor="des" className='fw-semibold'>Des</label>
                                        <input type="number" name="bulan" disabled={currentPeriode == ''} placeholder='Text' id="des"/>
                                    </div>
                                </div>}
                            </div>
                        </div>
                        
                        {!showAllMonthHka && <div 
                            className='d-flex justify-content-end align-items-center mt-3 fw-bold'
                                style={{userSelect: 'none', cursor: 'pointer', fontSize: '12px'}}
                                onClick={()=>setShowAllMonthHka(true)}
                            >More Detail {'>>'}</div>}

                        <div className="d-flex justify-content-center mt-3">
                            <button type="submit" className="btn btn-success">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div className="modal fade" id="addLiburModal" tabIndex="-1" aria-labelledby="addLiburModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content w-100 bg-light d-flex flex-column align-items-center justify-content-center rounded-5 border-0">
                    <div style={{backgroundColor: '#51AB8C'}} className='w-100 rounded-top-5 px-3 py-2 text-center text-light fw-bold fs-5'>
                        Hari Libur
                    </div>
                    <div className='w-100 p-4'>
                        <form className='w-100 d-flex flex-column gap-3'>
                            <div className='d-flex align-items-center justify-content-between gap-3'>
                                <div className='w-100 d-flex flex-column'>
                                    <label htmlFor="fromLibur" className='fw-semibold'>From Date</label>
                                    <input type="date" id='fromLibur' className='w-100 rounded px-3 py-1 text-secondary' style={{border: '1px solid #aaa'}}/>
                                </div>
                                <div className='w-100 d-flex flex-column'>
                                    <label htmlFor="toLibur" className='fw-semibold'>To Date</label>
                                    <input type="date" id='toLibur' className='w-100 rounded px-3 py-1 text-secondary' style={{border: '1px solid #aaa'}}/>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor="keterangan" className='fw-semibold'>Keterangan</label>
                                <textarea name="" id="keterangan" className='w-100 rounded px-3 py-1 text-secondary' style={{border: '1px solid #aaa'}}/>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    </div>
}

export default AdminAdmin