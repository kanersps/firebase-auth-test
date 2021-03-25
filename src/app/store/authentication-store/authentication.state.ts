export interface State {
  authenticating: boolean,
  authenticated: boolean,
  email: string,
  error: string
}

export const initialState: State = {
  authenticating: false,
  authenticated: false,
  email: "",
  error: ""
}