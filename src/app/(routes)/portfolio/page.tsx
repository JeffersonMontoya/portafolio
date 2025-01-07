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
            <AvatarPortfolio />
            <CircleImage />
            <div className="flex flex-col justify-center h-full px-4">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
                </h1>

                <div className="relative z-10 grid gap-6 mx-auto mt-4 max-w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:ml-24 xl:ml-40">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;
