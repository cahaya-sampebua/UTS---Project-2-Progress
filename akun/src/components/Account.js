import { Container } from "react-bootstrap";
import Deskripsiakun from "./Akundeskrip";

export default function Akuns(){
 return(
    <Container fluid>
        <Container className="my-5">
            <h2 className="mb-5 text-light text-center ">Account</h2>
            <Deskripsiakun></Deskripsiakun>
        </Container>
    </Container>
 )
}