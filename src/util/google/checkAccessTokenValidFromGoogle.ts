import axios from "axios";
import Ajv, { JSONSchemaType } from "ajv";

interface ValidityTemp {
    email: string
    user_id: string
}

const schema: JSONSchemaType<ValidityTemp> = {
    type: "object",
    properties: {
        email: { type: "string" },
        user_id: { type: "string" },
    },
    required: ["email", "user_id"],
    additionalProperties: false
}

const ajv = new Ajv();
const validate = ajv.compile(schema)

export const checkAccessTokenValidFromGoogle = async (accessToken: string): Promise<boolean> => {
    const tokenValidity = (await axios.get('https://www.googleapis.com/oauth2/v1/tokeninfo', {
        params: {
            access_token: accessToken
        }
    })).data

    return validate(tokenValidity);
}