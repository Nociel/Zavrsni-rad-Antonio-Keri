import "./JoinForm.styles.scss";

import { InputFormField } from "../InputFormField";
import { Button } from "../Button";

export function JoinForm(props) {
  return (
    <form
      className="join-form"
      autoComplete="off"
      onSubmit={props.onSubmit}
    >
      <div className="join-form__field">
        <InputFormField
          label="Display name"
          name="displayName"
          id="display-name"
          onChange={props.onChange}
          value={props.formState.displayName}
          required
        />
      </div>
      <div className="join-form__field">
        <Button variant="text">Join</Button>
      </div>
    </form>
  );
}
