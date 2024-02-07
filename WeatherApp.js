import React from 'react';
import './WeatherApp.css';

const WeatherApp = () => {



    let api_key = "228a2eecdd2e3b3a08de12d08a681ac5";

    const search = () => {


    }

    return (
        <>
            <div className='container'>
                <div className='top-bar'>
                    <input type="text" classmate="cityInput" placeholder='Search' />
                    <div className='search-icon'>


                    </div>
                </div>
                <div className='weather-image'>
                    <img src="" />
                </div>
                <div className='weather-temp'>24</div>
                <div className='weather-location'>London</div>
                <div className='data-container'>
                    <div className='element'>
                        <img src="" alt="" className='icon' />
                        <div className='data'>
                            <div className='humidity-percentage'>64%</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src="" alt="" className='icon' />
                        <div className='data'>
                            <div className='humidity-percentage'>18 km/hr</div>
                            <div className='text'>Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeatherApp;