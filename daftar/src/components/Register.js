import { Container } from "react-bootstrap";
import Regisform from "./Formulirregis";
import './register.css'

export default function Registerform(){
    return(
        <Container fluid>
            <Container className="my-5">
                <h2 className="text-center text-light mb-5">Register</h2>
                <div className="kotak">
                    <div className="col-lg-4 warna py-5 px-5">
                        <Regisform></Regisform>
                    </div>
                </div>
            </Container>
        </Container>
    )
}