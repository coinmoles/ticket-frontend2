import { CredentialsWithToken } from "../interface/CredentialsWithToken";
import { getRefreshTokenFromDB } from "./getRefreshTokenFromDB";
import { getTokenFromCode } from "./getTokenFromCode"

export const googleLogin = async (code: string): Promise<CredentialsWithToken> => {
    const token = await getTokenFromCode(code);
    
    if (token.access_token === null || token.access_token === undefined) {
        throw new Error();
    }
    else if (token.refresh_token === null || token.refresh_token === undefined) {
        token.refresh_token = await getRefreshTokenFromDB(token.access_token)
    }
    
    return token as CredentialsWithToken
}