import BoxIcon from "@/Components/BoxIcon";
import React from "react";
import { LuCrown } from "react-icons/lu";

function Index() {
  return (
    <>
      <div className="w-screen h-screen justify-center items-center bg-black p-44">
        <BoxIcon
          icon={<LuCrown color="black" size={20} />}
          backgroundColor="WHITE"
        />
      </div>
    </>
  );
}

export default Index;
