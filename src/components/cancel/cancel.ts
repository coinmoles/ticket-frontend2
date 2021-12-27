import axios, { AxiosError } from "axios";
import { TICKET_BACKEND_URI } from "../../util/helper/constants";

export const cancel = async (hakId: string, password: string, performanceName: string | null) => {
    if (hakId === "") {
        alert("교번을 입력해 주세요");
        return;
    }
    if (password === "") {
        alert("비밀번호를 입력해 주세요");
        return;
    }
    if (performanceName === null) {
        alert("공연을 선택해 주세요")
        return;
    }

    try {
        await axios.delete(TICKET_BACKEND_URI + "/ticket", {
            data: {
                hakId,
                password,
                performanceName
            }
        })
    } catch (err) {
        if ((err as AxiosError).response !== undefined) {
            const statusCode = (err as AxiosError).response?.status;
            if (statusCode === 403)
                alert("비밀번호가 잘못됐어요!");
            else if (statusCode === 404)
                alert("예매 정보가 없어요!");
            else
                alert("Something Went Wrong");
        }

        return;
    }

    alert("예매를 취소했어요!")
    return;
}