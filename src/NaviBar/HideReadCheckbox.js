const HideReadCheckBox = (props) => {
  const hideRead = props.hideRead;
  const setHideRead = props.setHideRead;

  return (
    <li className="item toggle">
      <label htmlFor="hide-read">Hide read</label>
      <input
        id="hide-read"
        type="checkbox"
        checked={hideRead}
        onChange={(e) => setHideRead(e.target.checked)}
      />
    </li>
  );
};

export default HideReadCheckBox;
