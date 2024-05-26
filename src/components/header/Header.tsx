import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import ItemMenu from "./itemMenu/ItemMenu";
import Search from "./search/Search";

import icontUser from "@/assets/icon-user.svg";
import Container from "../container/Container";

const Header = () => {
  return (
    <>
      <header className=" flex items-center w-full h-20 bg-primary-orange">
        <Container>
          <div className="flex flex-1 items-center justify-between">
            <div className="flex items-center gap-14">
              <Image src={Logo} alt="logo" />
              <ul className="flex items-center">
                <li>
                  <ItemMenu name="Pra você" />
                </li>
                <li>
                  <ItemMenu name="Pra empresas" />
                </li>
                <li>
                  <ItemMenu name="Serviços" />
                </li>
                <li>
                  <ItemMenu name="Ajuda" />
                </li>
              </ul>
            </div>
            <Search />
          </div>
          <button className="flex items-center gap-4 bg-primary-blue h-20 pl-40 ">
            <Image src={icontUser} alt="Icon user" />
            <span className="text-white font-bold pr-6">Acessar conta</span>
          </button>
        </Container>
      </header>
    </>
  );
};

export default Header;
