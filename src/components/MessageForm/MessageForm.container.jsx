import { useState } from "react";
import { MessageForm as Component } from "./MessageForm.component";

const initialFormState = { message: '' };

export function MessageForm(props) {
  const [state, setState] = useState(initialFormState);

  const submitForm = (event) => {
    event.preventDefault();
    props.onSend(state);
    setState(initialFormState);
  }

  const updateState = (event) => {
    setState((state) => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  }

  return (
    <Component
      onSubmit={submitForm}
      onChange={updateState}
      formState={state}
    />
  );
}
