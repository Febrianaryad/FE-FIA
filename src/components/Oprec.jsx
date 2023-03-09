import React, { useEffect } from 'react'
import logobunga from '../images/logobunga.png'
import { useState } from 'react'
import '../index.css'

import "../css/navbar.css"
import "../css/oprec.css"

const Oprec = () => {
    const [selectOne, setSelectsOne] = useState("Departemen Seni Budaya")
    const [selectTwo, setSelectsTwo] = useState("Departemen Seni Budaya")
    const [nama, setNama] = useState()
    const [jurusan, setJurusan] = useState()
    const [angkatan, setAngkatan] = useState()
    const [npm, setNPM] = useState()
    const [linkDoc, setLinkDoc] = useState()
    const [disabledButton, setDisabledButton] = useState(true)
    useEffect(() => {
        if (selectOne && selectTwo && nama && jurusan && angkatan && npm && linkDoc) {
            setDisabledButton(false)
        }
        else {
            setDisabledButton(true)
        }
    }, [selectOne, selectTwo, nama, jurusan, angkatan, npm, linkDoc]);
    function fetchPostData() {
        console.log(selectOne)
        fetch('https://bem-fia-be.herokuapp.com/api/form-registrasi/', {
            method: 'POST',
            body: JSON.stringify({
                "name": nama,
                "major": jurusan,
                "year": angkatan,
                "student_id": npm,
                "first_choice": selectOne,
                "second_choice": selectTwo,
                "supporting_file": linkDoc
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then(
                (response) => {
                    setNama("")
                    setAngkatan("")
                    setJurusan("")
                    setLinkDoc("")
                    setNPM("")
                    console.log(response)
                },
                (error) => {
                    console.log(error)
                }
            )
    }
    const handleChangeNama = (event) => {
        setNama(event.target.value);
    };

    const handleChangeJurusan = (event) => {
        setJurusan(event.target.value);
    };

    const handleChangeAngkatan = (event) => {
        setAngkatan(event.target.value);
    };

    const handleChangeNPM = (event) => {
        setNPM(event.target.value);
    };

    const handleChangelinkDoc = (event) => {
        setLinkDoc(event.target.value);
    };


    return (
        <div className=" montserrat grid md:flex  flex h-screen w-full font-bold">
            <div className='left-section basis-3/5 flex justify-center text-white flex-col
             bg-gradient-to-t from-[#732E8B] to-[#E2514A]'>
                <div className="title-container ml-2">
                    <img src={logobunga} className="w-80" alt="logo fia" />
                    <div className="title font-medium text-7xl tracking-wider">
                        BEM FIA UI
                    </div>
                    <div className="title font-medium text-7xl tracking-wider">
                        2023
                    </div>
                    <div className="title text-5xl tracking-wider">
                        Gelorakan Visi, Satukan Aksi
                    </div>
                </div>
            </div>
            <div className="right-section basis-1/2 bg-white flex justify-center items-center" id='montserratLight'>
                <div className="form-daftar" >
                    <div className="nama" >
                        Nama Lengkap
                    </div>
                    <input value={nama} className="border-2 border-purple-500 w-80 h-8 rounded-lg" onChange={handleChangeNama}>
                    </input>

                    <div className="jurusan">
                        Jurusan
                    </div>
                    <input value={jurusan} className="border-2 border-purple-500 w-80 h-8 rounded-lg" onChange={handleChangeJurusan}>
                    </input>

                    <div className="angkatan">
                        Angkatan
                    </div>
                    <input value={angkatan} className="border-2 border-purple-500 w-80 h-8 rounded-lg" onChange={handleChangeAngkatan}>
                    </input>

                    <div className="npm">
                        NPM
                    </div>
                    <input value={npm} className="border-2 border-purple-500 w-80 h-8 rounded-lg" onChange={handleChangeNPM}>
                    </input>

                    <div className="firstBiro">
                        Pilihan Biro Departemen 1
                    </div>
                    <div>
                        <select className="border-2 border-purple-500 w-80 h-8 rounded-lg"
                            value={selectOne} onChange={e => setSelectsOne(e.target.value)}>
                            <option>Departemen Sosial Masyarakat Lingkungan</option>
                            <option>Departemen Seni Budaya</option>
                            <option>Departemen Pengembangan Karir</option>
                            <option>Departemen Olahraga</option>
                            <option>Departemen Kajian Aksi Strategis</option>
                            <option>Departemen Ilmiah Pendidikan</option>
                            <option>Departemen Advokasi Kesejahteraan Mahasiswa</option>
                            <option>Biro Pengembangan Sumber Daya Manusia</option>
                            <option>Biro Penelitian</option>
                            <option>Biro Multimedia</option>
                            <option>Biro Keuangan</option>
                            <option>Biro Keseretariatan</option>
                            <option>Biro Hubungan Masyarakat</option>
                        </select>
                    </div>

                    <div className="secBiro">
                        Pilihan Biro Departemen 2
                    </div>
                    <div>
                        <select className="border-2 border-purple-500 w-80 h-8 rounded-lg"
                            value={selectTwo} onChange={e => setSelectsTwo(e.target.value)}>
                            <option>Departemen Sosial Masyarakat Lingkungan</option>
                            <option>Departemen Seni Budaya</option>
                            <option>Departemen Pengembangan Karir</option>
                            <option>Departemen Olahraga</option>
                            <option>Departemen Kajian Aksi Strategis</option>
                            <option>Departemen Ilmiah Pendidikan</option>
                            <option>Departemen Advokasi Kesejahteraan Mahasiswa</option>
                            <option>Biro Pengembangan Sumber Daya Manusia</option>
                            <option>Biro Penelitian</option>
                            <option>Biro Multimedia</option>
                            <option>Biro Keuangan</option>
                            <option>Biro Keseretariatan</option>
                            <option>Biro Hubungan Masyarakat</option>
                        </select>
                    </div>

                    <div className="dokumen">
                        Link Dokumen
                    </div>
                    <input value={linkDoc} className="border-2 border-purple-500 w-80 h-8 rounded-lg" onChange={handleChangelinkDoc}>
                    </input>

                    <div className='submitBtn py-6 px-20'>
                        <button disabled={disabledButton} className='button-post bg-black text-white w-40 h-8 rounded-lg' onClick={() => fetchPostData()}>Submit</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Oprec
