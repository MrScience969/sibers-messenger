import ChatsBlock from "../components/chats-block/chats-block";
import Header from "../components/header/header";
import MessagesBlock from "../components/messages-block/messages-block";

function MainPage (): JSX.Element {
    return (
        <div className="wrapper">
            <Header/>
            <ChatsBlock/>
            <MessagesBlock/>
        </div>
    )
}

export default MainPage;