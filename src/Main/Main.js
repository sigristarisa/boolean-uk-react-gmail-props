import EmailList from "./EmailList";
import Email from "../Email/Email";
import "./Main.css";

const Main = (props) => {
  const filteredEmails = props.filteredEmails;
  const toggleRead = props.toggleRead;
  const toggleStar = props.toggleStar;
  const openEmail = props.openEmail;
  const clickedEmail = props.clickedEmail;
  const isOpen = props.isOpen;

  return (
    <main className="emails">
      {openEmail ? (
        <Email clickedEmail={clickedEmail} isOpen={isOpen} />
      ) : (
        <EmailList
          filteredEmails={filteredEmails}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          isOpen={isOpen}
        />
      )}
    </main>
  );
};

export default Main;
