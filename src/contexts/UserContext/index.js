import { useContext } from "react";
import { Context as UserContext } from "./UserContext";

export { UserContext };
export { Provider as UserProvider } from "./UserContext";

export function useUser() {
  return useContext(UserContext);
}
