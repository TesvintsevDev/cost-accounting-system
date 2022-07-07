import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";

const App = () => {
  const costs = [
    {
      id: "c1",
      date: new Date(2020, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: "c2",
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

  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("App Component");
  };

  return (
      <div>
        <NewCost onAddCost={addCostHandler} />
        <Costs costs={costs} />
      </div>
  );
};

export default App;


