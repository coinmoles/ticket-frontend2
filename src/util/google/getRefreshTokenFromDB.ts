import { DB } from "../../DB"

export const getRefreshTokenFromDB = async (accessToken: string): Promise<string> => {
    return DB.refreshToken
}