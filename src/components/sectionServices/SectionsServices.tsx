import React from "react";
import Container from "../container/Container";

import PhoneIcon from "@/assets/icon-phone.svg";
import SolutionsIcon from "@/assets/icon-solutions.svg";
import OptionsIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";
import Image from "next/image";

import ImgPhone from "@/assets/phone.png";

const SectionsServices = () => {
  return (
    <section className="m-full h-[965px] pt-32 relative">
      <Container>
        <div className="flex-1 max-w-[594px]">
          <span className=" block text-primary-orange text-sm font-bold uppercase mb-9">
            serviços exclusivos
          </span>
          <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">
            Gerencie suas finanças sem sair de casa
          </h2>
          <p className="text-lg max-w-[554px] mb-16 text-second-gray">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor, no conforto da sua casa.
          </p>
          <ul className="flex flex-col items-start gap-9">
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={PhoneIcon} alt="Icon phone" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhar sua conta, fazer transferência e pagamentos de onde
                estiver
              </p>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={SolutionsIcon} alt="Icon phone" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Soluções de empréstimos e renegociação para organizar suas
                finanças
              </p>
            </li>
            <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={OptionsIcon} alt="Icon phone" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Diversas opções de investimento, de acordo com o seu perfil de
                investidor
              </p>
            </li>
            <li className="flex items-center gap-9 ">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={CardIcon} alt="Icon phone" />
              </div>
              <p className="flex-1 text-txt-gray pr-2">
                Acompanhe a fatura do seu cartão de crédito e faça compras
                online com seu cartão virtual
              </p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="absolute top-0 right-0 flex items-center  h-full w-[32%] bg-gray-phone ">
        <Image src={ImgPhone} alt="Phone" className="translate-x-[-50%]" />
      </div>
    </section>
  );
};

export default SectionsServices;
