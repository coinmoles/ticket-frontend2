import axios from "axios"
import { Credentials } from "google-auth-library"
import { GOOGLE_AUTH_CLIENT_ID, GOOGLE_AUTH_CLIENT_SECRET, REDIRECT_URI } from "../../secret"

export const getTokenFromCode = async (code: string): Promise<Credentials> => {
    const response = await axios.post<Credentials>(
        "https://oauth2.googleapis.com/token",
        null,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            params: {
                client_id: GOOGLE_AUTH_CLIENT_ID,
                client_secret: GOOGLE_AUTH_CLIENT_SECRET,
                code,
                grant_type: "authorization_code",
                redirect_uri: REDIRECT_URI
            }
        }
    )

    return response.data
}