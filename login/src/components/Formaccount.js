import { Container,Form, Button } from "react-bootstrap";

export default function Formulirakun(){
    return(
        <div>
            <Form>
                <div>
                    <Form.Label className="text-light">Username</Form.Label>
                    <Form.Control type="text" placeholder="Masukan username" />   
                </div>
                <br></br>
                <div>
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control type="password" placeholder="Masukan password" />   
                </div>
                <div className="text-center mt-5">
                    <Button>Login</Button>
                </div>
            </Form> 
            <p className='ket text-center mt-3'>Belum punya akun? <a href='Daftar'>Daftar</a></p>
        </div>
    )
}