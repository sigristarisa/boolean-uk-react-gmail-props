const Email = (props) => {
  const clickedEmail = props.clickedEmail;
  const isOpen = props.isOpen;
  return (
    <div>
      <h2>{clickedEmail.title}</h2>
      <button onClick={() => isOpen("")}>Back</button>
    </div>
  );
};

export default Email;
