import React from 'react';
import heroimg from "../../assets/Group 1 (1).png";

function HeroSection() {
    return (
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-center">
            <div className="text-center text-md-start">
                <h4 className="fs-1" style={{ color: "#364547" }}>Fair price ride</h4>
                <h1 className="" style={{ color: "#364547", fontSize: "60px" }}>
                    Rent our <span style={{ color: "#EF8D21", fontSize: "60px" }}>Scooter</span>
                </h1>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the <br />
                    1500s, when an unknown printer took a galley of type and scrambled it to <br />
                    make a type specimen book.
                </p>
            </div>
            <div className="mt-4 mt-md-0">
                <img src={heroimg} alt="heroimg" className="img-fluid" />
            </div>
        </div>
    );
}

export default HeroSection;
