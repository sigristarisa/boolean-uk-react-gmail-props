const Main = (props) => {
  const filteredEmails = props.filteredEmails;
  const toggleRead = props.toggleRead;
  const toggleStar = props.toggleStar;

  return (
    <main className="emails">
      <ul>
        {filteredEmails.map((email, index) => (
          <li key={index} className={`email ${email.read ? "read" : "unread"}`}>
            <div className="select">
              <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => toggleRead(email)}
              />
            </div>
            <div className="star">
              <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => toggleStar(email)}
              />
            </div>
            <div className="sender">{email.sender}</div>
            <div className="title">{email.title}</div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
