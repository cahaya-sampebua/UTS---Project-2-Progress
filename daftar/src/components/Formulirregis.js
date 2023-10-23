import { Form,Button } from "react-bootstrap"
export default function Regisform(){
    return(
        <div>
            <Form>
                <div>
                    <Form.Label className="text-light">Nama lengkap</Form.Label>
                    <Form.Control type="text" placeholder="Masukan nama lengkap" />   
                </div>
                <br></br>
                <div>
                    <Form.Label className="text-light">Tanggal lahir</Form.Label>
                    <Form.Control type="date" placeholder="Masukan tanggal lahir" />   
                </div>
                <br></br>
                <div>
                    <Form.Label className="text-light">Jenis Kelamin</Form.Label>
                    <Form.Control type="password" placeholder="Masukan jenis kelamin" />   
                </div>
                <br></br>
                <div>
                    <Form.Label className="text-light">Email</Form.Label>
                    <Form.Control type="email" placeholder="Masukan Email" />   
                </div>
                <br></br>
                <div>
                    <Form.Label className="text-light">Username</Form.Label>
                    <Form.Control type="text" placeholder="Masukan username" />   
                </div>
                <br></br>
                <div>
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control type="password" placeholder="Masukan Password" />   
                </div>
                <br></br>
                <div>
                    <Form.Label className="text-light">Telp</Form.Label>
                    <Form.Control type="text" placeholder="Masukan No Telp" />   
                </div>
                <div className="text-center mt-5">
                    <Button>Login</Button>
                </div>
            </Form>
            <p className='ket text-center mt-3'>Sudah punya akun? <a href='Masuk'>Masuk</a></p>
        </div>
    )
}