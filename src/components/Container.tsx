interface ContainerPageProps {
  children: React.ReactNode;
}

const ContainerPage = (props: ContainerPageProps) => {
  const { children } = props;

  return (
    <div className="w-full max-w-6xl px-4 pb-28 mx-auto mt-24 md:mt-28 md:pb-28 md:px-6">
      {children}
    </div>
  );
};

export default ContainerPage;
