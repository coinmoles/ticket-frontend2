import React from "react";
import { useDispatch } from "react-redux";
import { Dropdown } from "semantic-ui-react";
import { logout } from "../../../redux/auth/authSlice";
import { composeAltCode } from "../../../util/helper/composeAltCode";
import { getUserDataFromDB } from "../../../util/user/getUserDataFromDB"

export const LoginStatus: React.FC = () => {
    
    const userData = getUserDataFromDB();
    const dispatch = useDispatch();

    const dropDownItems = [
        <Dropdown.Item key="edit" icon="pencil" text="회원정보 수정" onclick={() => null} />,
        <Dropdown.Item key="logout" icon="sign out" text="로그아웃" onClick={() => dispatch(logout())} />
    ]

    if (userData.kind === "student") {
        const { grade, class_, number_, name } = userData
        return (
            <Dropdown item text={`${composeAltCode(grade, class_, number_)} ${name}`}>
                <Dropdown.Menu>
                    {dropDownItems}
                </Dropdown.Menu>
            </Dropdown>
        )
    }
    else {
        const { name } = userData;
        return (
            <Dropdown item text={`${name}`}>
                <Dropdown.Menu>
                    {dropDownItems}
                </Dropdown.Menu>
            </Dropdown>
        )
    } 
}