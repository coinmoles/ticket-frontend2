import { Credentials } from "google-auth-library";

export interface CredentialsWithToken extends Credentials {
    access_token : string
    refresh_token : string
}