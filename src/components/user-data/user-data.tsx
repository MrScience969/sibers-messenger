import { Message } from "../../types/message";

type UserDataProps = {
    loginData: Message
}


function UserData ({loginData}: UserDataProps): JSX.Element {
    const {avatar, name} = loginData

    return (
    <div className="user_info-wrapper">
        <div className="user_avatar-wrapper">
            <img 
                className="user_avatar"
                src={avatar}
                alt="User Avatar"
            />
        </div>
        <div className="user_name-wrapper">
            {name}
        </div>
    </div>
    )
}

export default UserData;
