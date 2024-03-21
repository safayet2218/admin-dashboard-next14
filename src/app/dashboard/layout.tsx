import Header from "@/Components/Header";
import LeftMenu from "@/Components/LeftMenu";
import React, {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <main>
            
            <div className="w-screen h-screen  bg-gray-500 flex ">
                <LeftMenu />
                <div className=" w-full">
                <Header />
                {children}
                </div>
            </div>
        </main>
    );
};

export default Layout;