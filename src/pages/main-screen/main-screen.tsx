/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../../components/header/header";
import MessagesBlock from "../../components/messages-block/messages-block";
import { Message } from "../../types/message";
import UserData from "../../components/user-data/user-data";
import ChatsList from "../../components/chats-list/chats-list";
import ChatBlock from "../../components/chat-block/chat-block";

type MainScreenProps = {
    loginData: Message;
    messagesList: Message[] | null;
    setMessagesList: (loginData: Message[] | null) => void;
}

function MainScreen ({loginData, messagesList, setMessagesList}: MainScreenProps): JSX.Element {

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
                <ChatBlock messagesList={messagesList} setMessagesList={setMessagesList}/>
            </div>
        </div>
    )
}

export default MainScreen;