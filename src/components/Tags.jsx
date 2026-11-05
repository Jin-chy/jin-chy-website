// Reusable list of pill-shaped tags. Used by Skills and Projects.
export default function Tags({ items, small = false }) {
  return (
    <ul className={small ? "tags small" : "tags"}>
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}
