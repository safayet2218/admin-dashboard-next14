import MainContainer from "@/components/layouts/main-container";
import SideBar from "@/components/layouts/sidebar";
import React from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative">
        <MainContainer >
            <SideBar/>
            {children}
        </MainContainer>
      </div>
    </>
  );
}
