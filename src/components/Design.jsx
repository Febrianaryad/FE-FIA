import "../css/design.css"
import React, {useState} from 'react'
import logo from '../images/logobunga.png'
import { FileUploader } from "react-drag-drop-files";


const Design = () => {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
    console.log(file)
  return (
    <div className="flex h-screen w-full">
        <div className='left-section basis-3/5 flex justify-center text-white flex-col'>
            <div className="title-container ml-10">
                <img src={logo} className="w-80" alt="logo fia"/>
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
        <div className="right-section basis-1/2 flex justify-center items-center">
            <div className="container-pdf">
                <div className="dokumen-title font-semibold ">
                    Dokumen
                </div>
                <div className="dokumen-description font-bold text-sm">
                    upload bukti status akademis. IKM aktif, dan sertifikat vaksin dalam satu PDF
                </div>
                <FileUploader handleChange={handleChange} >
                    <div className="box-input box w-[30rem] h-[30rem] border-2 border-violet-400 border-dashed rounded-lg flex justify-center items-center font-bold mt-5">
                        Drag and Drop your file or just click to upload
                    </div>
                </FileUploader>
            </div>
        </div>
    </div>
  )
}

export default Design
