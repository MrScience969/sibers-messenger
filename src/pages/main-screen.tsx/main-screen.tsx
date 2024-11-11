import ChatsBlock from "../../components/chats-block/chats-block";
import Header from "../../components/header/header";
import MessagesBlock from "../../components/messages-block/messages-block";

type MainScreenProps = {
    loginData: {email: string, userName: string}
}

function MainScreen ({loginData}: MainScreenProps): JSX.Element {

    console.log(loginData);
    
    return (
        <div className="wrapper">
            <Header/>
            <ChatsBlock/>
            <MessagesBlock/>
        </div>
    )
}

export default MainScreen;