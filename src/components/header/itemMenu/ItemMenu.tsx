import Image from "next/image";
import React from "react";
import Arrow from "@/assets/arrow-down.svg";

type Props = {
  name: string;
};

const ItemMenu = ({ name }: Props) => {
  return (
    <button className="flex items-center gap-3 mr-3">
      <span className="text-white font-bold">{name}</span>
      <Image src={Arrow} alt="Arrow dropdown" />
    </button>
  );
};

export default ItemMenu;
