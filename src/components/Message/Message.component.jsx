import "./Message.styles.scss";

import { Avatar } from "../Avatar";
import { MessageText } from "../MessageText";
import { useEffect } from "react";
import { useRef } from "react";

export function Message(props) {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div ref={ref} className="message">
      <div className="message__avatar">
        <Avatar
          backgroundColor={props.avatarBackgroundColor}
          text={props.avatarText}
        />
      </div>
      <div className="message__text">
        <MessageText
          displayName={props.displayName}
          time={props.time}
        >
          {props.children}
        </MessageText>
      </div>
    </div>
  );
}
