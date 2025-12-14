interface HeaderCarsProps {
  title: string;
}

export const HeaderCars = ({ title }: HeaderCarsProps) => {
  return (
    <div className=" my-8">
      <h1 className=" text-3xl font-bold">{title}</h1>
    </div>
  );
};
