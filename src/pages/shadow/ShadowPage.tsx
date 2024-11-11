import "./ShadowPageStyle.css";

interface ItemType {
  id: number;
  title: string;
}

const items: ItemType[] = [
  {
    id: 1,
    title: "Implement user authentication",
  },
  {
    id: 2,
    title: "Set up CI/CD pipeline",
  },
  {
    id: 3,
    title: "Optimize database queries",
  },
];

const ShadowPage = () => {
  return (
    <div className="shadow_container">
      <div className=" mb-4">box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;</div>
      <div className="shadow_panel">
        {items.map((item) => (
          <div key={item.id} className="shadow_item">
            <input type="checkbox" className="shadow_checkbox" />
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShadowPage;
