import { checkAccessTokenValidFromGoogle } from "./checkAccessTokenValidFromGoogle"
import { getTokenFromRefresh } from "./getTokenFromRefresh";
import { CredentialsWithToken } from "../interface/CredentialsWithToken";

export const checkAccessTokenValid = async (token: CredentialsWithToken): Promise<void> => {
    const tokenValidity = checkAccessTokenValidFromGoogle(token.access_token);
    
    if (!tokenValidity) {
        const newAccessToken = await getTokenFromRefresh(token.access_token);
        console.log(newAccessToken);
    }
}