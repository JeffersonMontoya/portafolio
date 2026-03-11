import ContainerPage from "@/components/Container";
import PortfolioBox from "@/components/PortfolioBox";
import { dataPortfolio } from "@/data/data";
import TransitionPage from "@/components/TransitionPage";

const PortfolioPage = () => {
  return (
    <ContainerPage>
      <TransitionPage />
      <div className="flex flex-col justify-center min-h-[60vh]">
        <div className="text-center mb-10">
          <h1 className="text-3xl leading-tight md:text-5xl font-bold mb-4">
            Proyectos <span className="text-secondary">destacados</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg italic">
            Selección de mis trabajos más recientes en desarrollo Fullstack.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto w-full mb-10">
          {dataPortfolio.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>
      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
