function SnackList() {
  const snacks = [
    { name: 'Chips and Dip', rank: 3 },
    { name: 'Chocolate covered Craisins', rank: 2 },
    { name: 'Fruit', rank: 1 },
    { name: 'Popcorn', rank: 5 },
    { name: 'Fruit snacks', rank: 4 },
  ];

  const snackOrder = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {snackOrder.map((snack) => (
        <li key={snack.name}>
          {snack.name} - Rank {snack.rank}
        </li>
      ))}
    </ol>
  );
}

export default SnackList;
