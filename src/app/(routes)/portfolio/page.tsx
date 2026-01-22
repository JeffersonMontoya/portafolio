import Image from "next/image";
import Link from "next/link";
import AvatarPortfolio from "@/components/AvatarPortfolio";
import CircleImage from "@/components/TransitionPage";
import ContainerPage from "@/components/Container";
import PortfolioBox from "@/components/PortfolioBox";
import { dataPortfolio } from "@/data/data";
import TransitionPage from "@/components/TransitionPage";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <CircleImage />
      <div className="flex flex-col justify-start px-4 -mt-14">
        <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-2">
          Mis últimos{" "}
          <span className="font-bold text-secondary">trabajos realizados</span>
        </h1>

        <div className="relative z-10 px-4 py-10 mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
