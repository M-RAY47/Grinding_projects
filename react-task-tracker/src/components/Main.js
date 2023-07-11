const Main = () => {
  const title = "Fun Facts about programming";
  const mainQuotes = [
    "Pain Can Keep the mind awake.",
    "Very little is needed to make happy life",
    "The Impediment to action advances action. What stands in the way becomes the way",
    "Do something everyday that you don't want to do, this is the golden rule for aquiring the habit of doing your duty",
    "Don't judge your gretness by your shadow at the sunset",
    "Never discouraged any one who continually makes progress no matter how slow it is, even if it is yourself",
    "The calmer you are the clear you think",
  ];
  const main = mainQuotes.map((list) => <li key={list}>{list}</li>);
  return (
    <main>
      <div>
        <div className="title">{title}</div>
        <ul className="main-content">{main}</ul>
      </div>
    </main>
  );
};
export default Main;

