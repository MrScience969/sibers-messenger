import { Link } from "react-router-dom";
import { Message } from "../../types/message";

type ChatsListProps ={
    loginData: Message
}

function ChatsList ({loginData}: ChatsListProps): JSX.Element {
    return (
    <div className="chats_list-wrapper">
        <ul className="chats_list">
            {loginData.posts.map((post, index) => (
            <li className="chat" key={index}>
                {post.words[0]}
            </li>
            ))}
        </ul>
    </div>
    )
}

export default ChatsList;