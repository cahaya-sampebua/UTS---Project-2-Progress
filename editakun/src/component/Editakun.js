import { Button, Container } from "react-bootstrap"
import Akunedit from "./Formedit"
import './editakun.css'

export default function Edit(){
    return(
        <Container fluid>
            <Container className="my-5">
                <div className="kotak">
                    <div className="col-6 py-5 px-5 bingkai">
                        
                        <Button variant="outline-success mb-3">Kembali</Button>
                        <Akunedit></Akunedit>
                    </div>
                </div>
            </Container>
        </Container>
    )
}