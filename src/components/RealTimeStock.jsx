// this was asked in Arrise Round-3, checks if you actually know how to implement React.memo() or not

// Problem - Build a real-time stock table where frequent price updates
// only re-render the rows whose data has changed, while avoiding unnecessary
// re-renders of the entire table

import { useEffect, useState, memo } from 'react';

const DATA = [
  {
    id: 1,
    name: 'Tesla',
    price: 102,
  },
  {
    id: 2,
    name: 'Netflix',
    price: 100,
  },
  {
    id: 3,
    name: 'Meta',
    price: 101,
  },
];

/**
 * Individual stock row
 * React.memo ensures that this component only re-renders
 * when its props actually change.
 */
const StockRow = memo(({ stock }) => {
  console.log('Rendering:', stock.name);

  return (
    <div>
      {stock.name} -- ${stock.price}
    </div>
  );
});

const RealTimeStock = () => {
  const [stockData, setStockData] = useState(DATA);

  /**
   * Update the price of a particular stock.
   *
   * IMPORTANT:
   * We create a NEW object only for the stock that changed.
   *
   * Unchanged stocks keep their old object reference.
   */
  const updateStockPrice = (id, newPrice) => {
    setStockData((prevStocks) =>
      prevStocks.map((stock) =>
        stock.id === id
          ? {
              ...stock,
              price: newPrice,
            }
          : stock,
      ),
    );
  };

  /**
   * Simulate realtime stock price updates.
   * In a real application this could be: WebSocket, SSE, polling, etc.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random stock
      const randomStock = DATA[Math.floor(Math.random() * DATA.length)];

      // Generate a random price
      const newPrice = Math.floor(90 + Math.random() * 30);

      console.log(`Price update: ${randomStock.name} -> $${newPrice}`);

      updateStockPrice(randomStock.id, newPrice);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Real Time Stock Data</h2>

      {stockData.map((stock) => (
        <StockRow key={stock.id} stock={stock} />
      ))}
    </div>
  );
};

export default RealTimeStock;
