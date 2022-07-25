import "./MessageForm.styles.scss";

import { InputElement } from "../InputElement";
import { Button } from "../Button";
import { Icon } from "../Icon";

export function MessageForm(props) {
  return (
    <form
      className="message-form"
      autoComplete="off"
      onSubmit={props.onSubmit}
    >
      <div className="message-form__input">
        <InputElement
          name="message"
          onChange={props.onChange}
          value={props.formState.message}
          required
        />
      </div>
      <div className="message-form__button">
        <Button variant="icon"><Icon variant="send" /></Button>
      </div>
    </form>
  );
}
