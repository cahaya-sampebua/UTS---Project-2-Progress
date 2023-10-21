import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Tentang from "./About";
import Moviecard from "./Card";
import gambar1 from '../picture/card2.jpg'
import Footerfilm from "./Footer";
import React from 'react';
import styles from './MyComponent.module.css';
import gambar2 from '../picture/card-1.jpg'
import gambar3 from '../picture/hideen1.jpg'
import gambar4 from '../picture/lm.jpg'
import gambar5 from '../picture/Dawn of Justice1.jpg'
import gambar6 from '../picture/mini1.jpg'
import gambar7 from '../picture/fastx1.jpg'
import gambar8 from '../picture/civi war1.jpg'

export default function Home() {



    return(
        <div className={styles['my-component']}>
            <Banner></Banner>

        {/* About */}
            <Tentang></Tentang>
        
        {/* Movie Popular Card */}
            
        <Container fluid>
            <Container>
                <h3 className="text-center text-white mb-5">Popular Film</h3>
                
                <div className="row">

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar1} judul={'Assasin Creed'} rating={10} tahun={2015}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar2} judul={'Super Mario Bros'} rating={10} tahun={2023}></Moviecard>
                    </div>

                    
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar3} judul={'Hidden Strike'} rating={10} tahun={2023}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar4} judul={'Litte Mermaid'} rating={10} tahun={2023}></Moviecard>
                    </div>

                    
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar5} judul={'Dawn of Justice'} rating={10} tahun={2016}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar6} judul={'Despicable Me 3'} rating={10} tahun={2015}></Moviecard>
                    </div>

                    
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar7} judul={'Fast X'} rating={10} tahun={2023}></Moviecard>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Moviecard image={gambar8} judul={'Civil War'} rating={10} tahun={2016}></Moviecard>
                    </div>

                </div>

            </Container>
        </Container>

        <Footerfilm></Footerfilm>

        </div>
    )
}