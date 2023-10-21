import { Container, Pagination } from "react-bootstrap";
import './film.css'
import Filterfilms from "./Filterfilm";
import Moviecard from "./Card";
import gambar2 from '../Image/card-1.jpg'
import gambar1 from '../Image/ip.jpg'
import gambar3 from '../Image/mini1.jpg'
import gambar4 from '../Image/hary.jpg'
import gambar5 from '../Image/hideen1.jpg'
import gambar6 from '../Image/civi war1.jpg'
import gambar7 from '../Image/unduhan.jpeg'
import gambar8 from '../Image/The Maze Runner.jpeg'
import gambar9 from '../Image/minion2.jpg'
import gambar10 from '../Image/AI.jpg'
import gambar11 from '../Image/tron.jpg'
import gambar12 from '../Image/fast4.jpg'
import MyPagination from "./Pagination";


export default function Films(){
    return(
        <Container fluid className="bg py-5">
            <Container>
                <h2 className="text-light mb-5 text-center">Film</h2>

                <div className="col-md-5 col-lg-4 mb-5 mx-auto">
                    <Filterfilms></Filterfilms>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar1} judul={'IP Man 4'} rating={10} tahun={2019}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar2} judul={'The Mario Bross'} rating={10} tahun={2023}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar3} judul={'Despicable Me 3'} rating={10} tahun={2017}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar4} judul={'Harry Potter'} rating={10} tahun={2015}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar5} judul={'Hidden Strike'} rating={10} tahun={2023}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar6} judul={'Civil War'} rating={10} tahun={2015}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar7} judul={'Big Hero 6'} rating={9} tahun={2014}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar8} judul={'The Maze Runner'} rating={9} tahun={2015}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar9} judul={'Despicable Me 2'} rating={8} tahun={2015}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar10} judul={'AI'} rating={7} tahun={2001}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar11} judul={'Tron'} rating={7} tahun={2010}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar12} judul={'fast & furious 4'} rating={6} tahun={2015}></Moviecard>
                    </div> 

                </div>

                <div className="d-flex justify-content-center">
                        <div className="">
                            <div>
                                <MyPagination></MyPagination>
                            </div>
                        </div>
                </div>                   

            </Container>
        </Container>
    )
}