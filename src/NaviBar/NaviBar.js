import InboxItem from "./InboxItem";
import StarredItem from "./StarredItem";
import HideReadCheckBox from "./HideReadCheckbox";

const NaviBar = (props) => {
  const currentTab = props.currentTab;
  const setCurrentTab = props.setCurrentTab;
  const hideRead = props.hideRead;
  const setHideRead = props.setHideRead;
  const unreadEmails = props.unreadEmails;
  const starredEmails = props.starredEmails;

  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <InboxItem
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          unreadEmails={unreadEmails}
        />

        <StarredItem
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          starredEmails={starredEmails}
        />

        <HideReadCheckBox hideRead={hideRead} setHideRead={setHideRead} />
      </ul>
    </nav>
  );
};

export default NaviBar;
