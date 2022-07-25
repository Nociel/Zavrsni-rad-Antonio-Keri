import "./InputElement.styles.scss";

export function InputElement(props) {
  return (
    <input
      className="input-element"
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.value}
      required={props.required}
    />
  );
}
