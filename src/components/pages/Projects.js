import React from "react";
import ratwerkslogo from '../../images/ratwerkslogo.png'

export default function Projects() {
    return (
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 style = {{fontSize: "90px"}}className="text-white mb-4">RatWerks</h2>
                        <p  style = {{fontSize: "50px"}}className="text-white">
                      coming soon
                        </p>
                    </div>
                </div>
                <img className="img-fluid"
                    src={ratwerkslogo} alt="..." />
            </div>
        </section>

    );
}