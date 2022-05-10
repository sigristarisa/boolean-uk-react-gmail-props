import EmailItem from "./EmailItem";

const EmailList = (props) => {
  const filteredEmails = props.filteredEmails;
  const toggleRead = props.toggleRead;
  const toggleStar = props.toggleStar;

  return (
    <ul>
      {filteredEmails.map((email, index) => (
        <EmailItem
          key={index}
          toggleRead={toggleRead}
          toggleStar={toggleStar}
          email={email}
        />
      ))}
    </ul>
  );
};

export default EmailList;
