const Notification = (props) => {
  return (
    <li className={`${props.className}`}>
      <img src={`${props.image}`} />
      <p>{props.text}</p>
    </li>
  );
};

const element = (
  <div className="notification_container">
    <h1>Notifications</h1>
    <ul>
      <Notification
        className="box1"
        text="Information Message"
        image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="box2"
        text="Success Message"
        image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="box3"
        text="Warning Message"
        image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="box4"
        text="Error Message"
        image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
