const Email = (props) => {
  const clickedEmail = props.clickedEmail;
  const isOpen = props.isOpen;
  return (
    <div>
      <h2>{clickedEmail.title}</h2>
      <p>{clickedEmail.sender}</p>
      <button onClick={() => isOpen("")}>Back</button>
    </div>
  );
};

export default Email;
