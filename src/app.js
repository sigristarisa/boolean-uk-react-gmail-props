import { useState } from "react";

import initialEmails from "./data/emails";
import Header from "./Header/Header";
import NaviBar from "./NaviBar/NaviBar";
import Main from "./Main/Main";

import "./styles/app.css";

const App = () => {
  const [emails, setEmails] = useState(initialEmails);
  const [hideRead, setHideRead] = useState(false);
  const [currentTab, setCurrentTab] = useState("inbox");
  const [openEmail, setOpenEmail] = useState(false);

  const unreadEmails = emails.filter((email) => !email.read);
  const starredEmails = emails.filter((email) => email.starred);
  const getReadEmails = (emails) => emails.filter((email) => !email.read);
  const getStarredEmails = (emails) => emails.filter((email) => email.starred);
  const isOpen = () => setOpenEmail(!openEmail);

  const toggleStar = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id
          ? { ...email, starred: !email.starred }
          : email
      );
    setEmails(updatedEmails);
  };

  const toggleRead = (targetEmail) => {
    const updatedEmails = (emails) =>
      emails.map((email) =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      );
    setEmails(updatedEmails);
  };

  let filteredEmails = emails;
  if (hideRead) filteredEmails = getReadEmails(filteredEmails);
  if (currentTab === "starred")
    filteredEmails = getStarredEmails(filteredEmails);

  return (
    <div className="app">
      <Header />
      <NaviBar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        hideRead={hideRead}
        setHideRead={setHideRead}
        unreadEmails={unreadEmails}
        starredEmails={starredEmails}
      />
      <Main
        filteredEmails={filteredEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
        openEmail={openEmail}
        isOpen={isOpen}
      />
    </div>
  );
};

export default App;
