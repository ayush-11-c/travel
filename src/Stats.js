export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add something to list</em>
      </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const per = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {per === 100
          ? "You can leave now"
          : `You have ${numItem} items on your list,and already packed ${numPacked}(${per}
      %)`}
      </em>
    </footer>
  );
}
