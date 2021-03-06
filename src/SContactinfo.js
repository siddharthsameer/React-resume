const SContactinfo = ({ Contactinfo }) => {
  return (
    <div className="contactInfo">
      <h3 className="title">Contact Info</h3>
      <ul>
        {Contactinfo.map((info) => (
          <li key={info.Icon}>
            <span className="icon">
              <i className={"fa fa-" + info.Icon} aria-hidden="true"></i>
            </span>
            <span className="text">{info.Text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SContactinfo;
