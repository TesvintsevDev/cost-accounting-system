import './App.css';
import CostItem from "./components/CostItem";

function App() {

    const costs = [
        {
            date: new Date(2022, 5, 16),
            description: 'Холодильник',
            amount: '999.99'
        },
        {
            date: new Date(2021, 9, 12),
            description: 'MacBook Pro',
            amount: '1799.50'
        },
        {
            date: new Date(2022, 5, 15),
            description: 'JBL Wave 200TWS',
            amount: '49.99'
        }
    ]

  return (
    <div className="App">
      <h1>Cost Accounting System</h1>
        <CostItem date={costs[0].date} description={costs[0].description} amount={costs[0].amount}/>
        <CostItem date={costs[1].date} description={costs[1].description} amount={costs[1].amount}/>
        <CostItem date={costs[2].date} description={costs[2].description} amount={costs[2].amount}/>
    </div>
  );
}

export default App;
