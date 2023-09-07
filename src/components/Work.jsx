import React from 'react'
import Tesla from '../assets/testaLp.png'
import TicTac from '../assets/tictactoe.png'
import Agenda from '../assets/agenda.png'
import Weather from '../assets/weather.png'
import passWord from '../assets/password.png'
import QR from '../assets/qr.png'


const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#00CFC8] text-gray-300'>Work</p>
                    <p className='py-4'>Check out some of my recent work</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 rounded-md'>
                    {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${Tesla})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Tesla Landing Page clone
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://timely-manatee-e7aae8.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Page</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${TicTac})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Tic Tac Toe Game
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://reliable-naiad-cd2527.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Page</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Agenda})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React Agenda
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://preeminent-sfogliatella-a92a5d.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Page</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${Weather})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Weather App
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://abrahandev-weather-app.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Page</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${passWord})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Password Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://unique-profiterole-59c788.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Page</button>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div
                        style={{ backgroundImage: `url(${QR})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                QR Generator
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://graceful-torte-148d3a.netlify.app/" target="_blank">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Page</button>
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work
