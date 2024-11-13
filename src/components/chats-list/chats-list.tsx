import { Message } from "../../types/message";
import './chats-list.css'

type ChatsListProps ={
    loginData: Message
    onChatClick: () => void;
}

function ChatsList ({loginData, onChatClick}: ChatsListProps): JSX.Element {
    return (
    <div className="chats_list-wrapper">
        <h1 className="visually-hidden">Список чатов</h1>
        <div className="chats-content">
            <ul className="chats_list">
                {loginData.posts.map((post, index) => (
                <li className="chat" key={index} onClick={onChatClick}>
                    {post.words[0]}
                </li>
                ))}
            </ul>
        </div>
    </div>
    )
}

export default ChatsList;