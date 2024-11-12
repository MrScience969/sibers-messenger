/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../../components/header/header";
import MessagesBlock from "../../components/messages-block/messages-block";
import { Message } from "../../types/message";
import UserData from "../../components/user-data/user-data";
import ChatsList from "../../components/chats-list/chats-list";

type MainScreenProps = {
    loginData: Message
    messagesList: Message[]
}

function MainScreen ({loginData, messagesList}: MainScreenProps): JSX.Element {

    console.log(loginData);
    
    return (
        <div className="main-wrapper">
            <Header/>
            {/* <ChatsBlock/>
            <MessagesBlock/> */}
            <div className="messenger-wrapper">
                <UserData loginData={loginData}/>
                <div className="chat_info-wrapper">
                    информация о чате
                </div>
                <ChatsList loginData={loginData}/>
                <div className="chat_messages-wrapper">
                    сообщения
                </div>
            </div>
        </div>
    )
}

export default MainScreen;