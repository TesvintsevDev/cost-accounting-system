import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      date: new Date(2020, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 11, 25),
      description: "MacBook Pro",
      amount: 3254.72,
    },
    {
      date: new Date(2022, 5, 14),
      description: "JBL Wave 200TWS",
      amount: 49.99,
    },
  ];

  return (
    <div>
      <NewCost />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
