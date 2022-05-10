const EmailItem = (props) => {
  const toggleRead = props.toggleRead;
  const toggleStar = props.toggleStar;
  const email = props.email;
  const isOpen = props.isOpen;

  return (
    <li
      className={`email ${email.read ? "read" : "unread"}`}
      onClick={() => isOpen()}
    >
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
  );
};

export default EmailItem;
