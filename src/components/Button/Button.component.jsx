import "./Button.styles.scss";

export function Button(props) {
  const className = `button button--${props.variant}`;

  return (
    <button className={className}>
      {props.children}
    </button>
  )
}