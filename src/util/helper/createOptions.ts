import axios from "axios"
import { Performance } from "../interfaces/Performance";
import { TICKET_BACKEND_URI } from "./constants";

export const createOptions = async () => {
    const performances: Performance[] = (await axios.get(TICKET_BACKEND_URI + "/performance")).data as Performance[];
    const options = performances.map((performance) => {
        return {
            key: performance.name,
            text: `${performance.name} (${performance.group}) (${performance.curTickets}/${performance.maxTickets})`,
            value: performance.name
        }
    })

    return options;
}