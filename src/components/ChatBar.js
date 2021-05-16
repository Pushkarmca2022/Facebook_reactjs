import React from "react";

const ChatBar = (props) => {
  const [state, setState] = React.useState([
    { id: 1, image: "/images/fawad1.jpg", name: "Pushkar kumar" },
    { id: 2, image: "/images/fawad2.jpg", name: "Rahul kumar" },
    { id: 3, image: "/images/fawad3.jpg", name: "Rahul Raj" },
    { id: 4, image: "/images/fawad4.jpg", name: "Java Deploper" },
    { id: 5, image: "/images/imran1.jpg", name: "Pushkar kumar" },
    { id: 6, image: "/images/imran2.jpg", name: "Sarita kumari" },
    { id: 6, image: "/images/imran3.jpg", name: "Pushkar kumar" },
    { id: 7, image: "/images/profile.jfif", name: "Jule kumari" },
    { id: 8, image: "/images/fawad1.jpg", name: "Tahir Khan" },
    { id: 9, image: "/images/fawad2.jpg", name: "Megha kumari" },
    { id: 10, image: "/images/fawad3.jpg", name: "Rahul Raj" },
  ]);
  const openChat = (user) => {
    props.openChat(user);
  };
  return (
    <div className="chatBar">
      {state.map((user) => (
        <div
          className="chatBar__list"
          key={user.id}
          onClick={() => openChat(user)}
        >
          <div className="chatBar__list-img">
            <img src={user.image} alt="user" />
            <span className="status"></span>
          </div>
          <div className="chatBar__list-name">{user.name}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatBar;
