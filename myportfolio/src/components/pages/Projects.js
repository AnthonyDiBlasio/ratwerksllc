import React from "react";
import ratwerkslogo from '../../images/ratwerkslogo.png'

export default function Projects() {
    return (
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">RatWerks</h2>
                        <p className="text-white-50">
                      coming soon!
                        </p>
                    </div>
                </div>
                <img className="img-fluid rounded-circle"
                    src={ratwerkslogo} alt="..." />
            </div>
        </section>

    );
}