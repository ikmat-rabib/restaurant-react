import React from 'react';
import backgroundImage from '../../assets/banner.png';


const Header = () => {
    return (
        <div
            className="hero min-h-screen bg-repeat bg-auto"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: `110px`,

            }}>
            <div className="hero-overlay bg-red-700 bg-opacity-90"></div>
            <div className="hero-content ">
                <div className="max-w-[945px]">
                    <h1 className="mb-5 text-8xl font-poppins font-bold">Taste the authentic <br />
                        Saudi cuisine</h1>
                    <p className="mb-5 font-roboto font-normal text-2xl">
                        Among the best Saudi chefs in the world, serving <br /> you something beyond flavor.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;