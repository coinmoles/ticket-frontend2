import axios, { AxiosError } from "axios";
import { TICKET_BACKEND_URI } from "../../util/helper/constants";

export const book = async (hakId: string, password: string, performanceName: string | null) =>  {
    if (hakId === ""){
        alert("교번을 입력해 주세요");
        return;
    }
    if (password === ""){
        alert("비밀번호를 입력해 주세요");
        return;
    }
    if (performanceName === null){
        alert("공연을 선택해 주세요")
        return;
    }

    try {
        await axios.post(TICKET_BACKEND_URI + "/ticket", {
            hakId,
            password,
            performanceName
        }) 
    } catch(err) {
        if ((err as AxiosError).response !== undefined) {
            const statusCode = (err as AxiosError).response?.status;
            if (statusCode === 404)
                alert("공연을 찾을 수 없어요!");
            else if (statusCode === 406) 
                alert("이 공연은 정원이 초과됐어요!")
            else if (statusCode === 409)
                alert("이미 같은 그룹의 공연을 예매했어요!");
            else
                alert("Something Went Wrong...!");
        }

        return;
    }

    alert("예매에 성공했어요!")
    return;
}