import "./MessageMetadata.styles.scss";

export function MessageMetadata(props) {
  return (
    <span className="message-metadata">
      <span className="message-metadata__display-name">
        {props.displayName}
      </span>
      <span className="message-metadata__time">
        {props.time}
      </span>
    </span>
  );
}
