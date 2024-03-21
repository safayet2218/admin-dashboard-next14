import LeftMenu from "@/Components/LeftMenu";
import React, {ReactNode} from "react";

type LayoutProps = {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <main>
            hsd
            <div className="w-screen h-screen  bg-gray-500 flex gap-4">
                <LeftMenu />
                {children}
            </div>
        </main>
    );
};

export default Layout;