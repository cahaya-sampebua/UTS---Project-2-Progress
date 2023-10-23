import { Container } from "react-bootstrap";
import Formulirakun from "./Formaccount";
import './formulir.css'

export default function Formakun(){
    return(
        <Container fluid>
            <Container className="my-5">
                <h2 className="text-center text-light mb-5">Login</h2>
                <div className="kotak">
                    <div className="col-lg-4 warna py-5 px-5">
                        <Formulirakun></Formulirakun>
                    </div>
                </div>
            </Container>
        </Container>
    )
}