import { CredentialsWithToken } from "../../util/interface/CredentialsWithToken"
import { User } from "../../util/interface/User"

export interface LoggedInState {
    isLoggedIn: true,
    token: CredentialsWithToken
}

export interface LoggedOutState {
    isLoggedIn: false,
    token: null
} 

export type AuthState = LoggedInState | LoggedOutState

export const initialState: AuthState = {
    isLoggedIn: false,
    token: null
}