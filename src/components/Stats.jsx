import Card from "./Card";

function Stats({ items = [] }) {
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {items.map((it, idx) => (
        <Card key={idx} className="text-center w-40">
          <div className="text-2xl font-bold text-emerald-700">{it.value}</div>
          <div className="text-sm text-gray-600 mt-1">{it.label}</div>
        </Card>
      ))}
    </div>
  );
}

export default Stats;
