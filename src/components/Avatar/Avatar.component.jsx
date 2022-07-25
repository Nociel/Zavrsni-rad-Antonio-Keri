import "./Avatar.styles.scss";

export function Avatar(props) {
  const style = {
    backgroundColor: props.backgroundColor,
  };

  return (
    <div className="avatar" style={style}>
      {props.text}
    </div>
  );
}
