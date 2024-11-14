/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from "../../components/header/header";
import { Message } from "../../types/message";
import UserData from "../../components/user-data/user-data";
import ChatsList from "../../components/chats-list/chats-list";
import ChatBlock from "../../components/chat-block/chat-block";
import { useState } from "react";
import ChatInfo from "../../components/chat-info/chat-info";

type MainScreenProps = {
    loginData: Message;
    messagesList: Message[] | null;
    setMessagesList: (loginData: Message[] | null) => void;
}

function MainScreen ({loginData, messagesList, setMessagesList}: MainScreenProps): JSX.Element {
    const [currentChat, setCurrentChat] = useState<Message[] | null>(null)
    const [currentChatInfo, setCurrentChatInfo] = useState<Message | null>(null)

    const onChatClick = (evt) => {
        const userChat = evt.target.innerHTML
        const filteredChat = messagesList?.filter((message) => (message.posts.map((post) => post.words.includes(userChat))).includes(true))
        if (filteredChat) {setCurrentChat(filteredChat)}
    }
    
    return (
        <div className="main-wrapper">
            <Header/>
            {/* <ChatsBlock/>
            <MessagesBlock/> */}
            <div className="messenger-wrapper">
                <UserData loginData={loginData}/>
                <ChatInfo/>
                <ChatsList loginData={loginData} onChatClick={onChatClick}/>
                <ChatBlock messagesList={currentChat} setMessagesList={setMessagesList}/>
            </div>
        </div>
    )
}

export default MainScreen;