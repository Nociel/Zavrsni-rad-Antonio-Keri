import "./MessageText.styles.scss";

import { MessageMetadata } from "../MessageMetadata";

export function MessageText(props) {
  return (
    <div className="message-text">
      <MessageMetadata
        displayName={props.displayName}
        time={props.time}
      />
      <div className="message-text__content">
        {props.children}
      </div>
    </div>
  );
}
