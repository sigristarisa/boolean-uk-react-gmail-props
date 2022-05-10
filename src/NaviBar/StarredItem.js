const StarredItem = (props) => {
  const currentTab = props.currentTab;
  const setCurrentTab = props.setCurrentTab;
  const starredEmails = props.starredEmails;

  return (
    <li
      className={`item ${currentTab === "starred" ? "active" : ""}`}
      onClick={() => setCurrentTab("starred")}
    >
      <span className="label">Starred</span>
      <span className="count">{starredEmails.length}</span>
    </li>
  );
};

export default StarredItem;
