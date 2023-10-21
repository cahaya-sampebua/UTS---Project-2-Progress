import { Container,Card, CardBody, Button } from "react-bootstrap";
import card from'./Kartu.module.css'
import bintang from '../Image/—Pngtree—vector complex star icon_4183954.png'

export default function Moviecard(props) {

    return(
        <div>
            {/* <Card className={card.bg + "mb-5"}> */}
            <Card className=' mb-5' style={{ borderColor: 'goldenrod' }}>
                <img src={props.image} className="card-img-top"></img>
                <Card.Body className={card.kartu + ' text-light text-center'}>
                    <Card.Title className="text-center fw-bold">{props.judul}</Card.Title>
                    <p className="card-text mt-3">Rating : <img src={bintang} className={card['logo']}></img> {props.rating}</p>
                    <p className="card-text">Tahun : {props.tahun}</p>
                    <Button variant="outline-success">Lihat</Button>
                </Card.Body>
            </Card>
        </div>
    )
}