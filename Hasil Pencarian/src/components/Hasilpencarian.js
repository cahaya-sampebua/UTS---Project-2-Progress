import { Container } from "react-bootstrap";
import Moviecard from "./Card";
import './hasilpencarian.css'
import gambar1 from '../picture/mini1.jpg'
import gambar2 from '../picture/minion2.jpg'

export default function Hasilsearch(){
    return(
        <Container fluid className="bg">
            <Container className="py-5">
                <h2 className="text-light mb-5">Hasil Pencarian</h2>

                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <Moviecard judul='Despicable Me 3' image={gambar1} rating={10} tahun={2018}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <Moviecard judul='Despicable Me 2' image={gambar2} rating={8} tahun={2015}></Moviecard>
                    </div>
                </div>
            </Container>
        </Container>
    )
}