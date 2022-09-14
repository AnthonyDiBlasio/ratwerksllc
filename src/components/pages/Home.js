import React from "react";
import ratwerkslogo from '../../images/ratwerkslogo.png'

export default function Home() {
    return (
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
            <img style = {{ padding:"20px",margin:"10px"}}className="img-fluid"
                    src={ratwerkslogo} alt="..." />
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <p  style = {{fontSize: "45px", padding:"50px", display: "contents"}}className="text-dark">
                      coming soon
                        </p>
                    </div>
                </div>
              
            </div>
        </section>

    );
}