'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="flex items-center justify-center bg-blue-600 text-white rounded-2xl p-2.5 shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-105">
                            <lord-icon
                                src="https://cdn.lordicon.com/uppnozfl.json"
                                trigger="hover"
                                style={{ width: "42px", height: "42px" }}
                                colors="primary:#ffffff"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">DocAppoint</h1>
                            <p className="text-[10px] text-gray-500 -mt-1">Find Your Doctor</p>
                        </div>
                    </Link>

                    {/* Mobile Hamburger Button - শুধু মোবাইলে দেখাবে */}
                    <button 
                        className="md:hidden p-3 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6h12v12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>

                    {/* Desktop Menu - বড় স্ক্রিনে দেখাবে */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-700">
                            <li><Link href="/" className="hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">Home</Link></li>
                            <li><Link href="/allappointments" className="hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">All Appointments</Link></li>
                            <li><Link href="/dashboard" className="hover:text-blue-600 transition-colors duration-200 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 hover:after:w-full after:transition-all">Dashboard</Link></li>
                        </ul>

                        <div className="flex items-center gap-3">
                            <Button variant="ghost" className="font-medium text-gray-700 hover:bg-gray-100 px-5 py-2.5 rounded-xl">
                                Login
                            </Button>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl shadow-md shadow-blue-500/30">
                                Register
                            </Button>
                        </div>
                    </div>
                </div>

                {/* ====================== MOBILE MENU ====================== */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
                        <ul className="flex flex-col gap-4 text-[15px] font-medium text-gray-700">
                            <li>
                                <Link href="/" className="block py-3 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/allappointments" className="block py-3 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                                    All Appointments
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard" className="block py-3 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                                    Dashboard
                                </Link>
                            </li>

                            <li className="pt-4 border-t border-gray-100">
                                <Button 
                                    variant="ghost" 
                                    className="w-full justify-start text-left font-medium py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </Button>
                            </li>
                            <li>
                                <Button 
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Register
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;