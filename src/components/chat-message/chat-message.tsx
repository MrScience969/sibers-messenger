import { Message } from "../../types/message";

type ChatMessageProps = {
    message: Message
}


function ChatMessage ({message}: ChatMessageProps): JSX.Element {
    const {name} = message;

    return (
        <div className="chat-message" tabIndex={0}>
            <span className="chat-message-name">
                {name}
            </span>
            <p className="chat-message-text">
                {message.posts[0].sentences}
            </p>
            <button className="chat-message-button" type="button">
                Удалить
            </button>
      </div>
    )
}

export default ChatMessage;