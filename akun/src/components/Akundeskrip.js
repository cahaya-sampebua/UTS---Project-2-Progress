import { Button } from "react-bootstrap"
import gambar1 from '../image/download.jpeg'
import './image.css'
export default function Deskripsiakun(){
    return(
        <div >
            <div >
                <div className="gbr mb-5">
                    <img className="gambar" src={gambar1}></img>
                    <Button variant="success ms-3">Pilih foto</Button>
                    
                {/* <span>ukuran gambar maksimal 2 mb</span> */}
                </div>
            </div>

            <div className="row">

                

                    <div className="col-lg-6 text-light gbr">
                        <div>
                            <p className="text-success fw-bold">Nama lengkap</p>
                            <p>wiliam rama</p>

                            <p className="text-success fw-bold">tanggal lahir</p>
                            <p>24 juni 2020</p>

                            <p className="text-success fw-bold">jenis kelamin</p>
                            <p>laki</p>

                            <p className="text-success fw-bold">Username</p>
                            <p> xxxx</p>
                        </div>

                    </div>
                

                

                    <div className="col-lg-6 text-light gbr">
                        <div>
                            <p className="text-success fw-bold"> password</p>
                            <p>xxxxxx</p>

                            <p className="text-success fw-bold">
                                telphone
                            </p>
                            <p>734598732498749</p>

                            <p className="text-success fw-bold">
                                Email
                            </p>
                            <p>Wlliam@gmail.com</p>

                            <Button variant="outline-success">Change</Button>
                        </div>
                    </div>
                
            </div>
        </div>
        
    )
}