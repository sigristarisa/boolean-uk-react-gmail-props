import EmailList from "./EmailList";
import "./Main.css";

const Main = (props) => {
  const filteredEmails = props.filteredEmails;
  const toggleRead = props.toggleRead;
  const toggleStar = props.toggleStar;
  const openEmail = props.openEmail;
  const isOpen = props.isOpen;

  return (
    <main className="emails">
      {openEmail ? (
        <div>
          <p>just Kidding!</p>
          <button onClick={() => isOpen()}>Back</button>
        </div>
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
