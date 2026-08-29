import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute left-0 top-0 z-50 w-full">
                <Header />
            </div>
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;