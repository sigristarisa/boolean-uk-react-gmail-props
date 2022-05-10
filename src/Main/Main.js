import EmailList from "./EmailList";
import "./Main.css";

const Main = (props) => {
  const filteredEmails = props.filteredEmails;
  const toggleRead = props.toggleRead;
  const toggleStar = props.toggleStar;

  return (
    <main className="emails">
      <EmailList
        filteredEmails={filteredEmails}
        toggleRead={toggleRead}
        toggleStar={toggleStar}
      />
    </main>
  );
};

export default Main;
