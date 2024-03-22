"use client";
import Header from "@/Components/Header";
import LeftMenu from "@/Components/LeftMenu";
import React, {ReactNode} from "react";
import { useState } from "react";

type LayoutProps = {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <main>
            <div className="w-screen h-screen  bg-gray-500 flex ">
                <LeftMenu isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
                <div className=" w-full">
                <Header isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
                {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;