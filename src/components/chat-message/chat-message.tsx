import { Message } from "../../types/message";

type ChatMessageProps = {
    message: Message
    onClickDelete: () => void;
}


function ChatMessage ({message, onClickDelete}: ChatMessageProps): JSX.Element {
    const {name} = message;

    return (
        <div className="chat-message" tabIndex={0}>
            <span className="chat-message-name">
                {name}
            </span>
            <p className="chat-message-text">
                {message.posts[0].sentences}
            </p>
            <button
                className="chat-message-button"
                type="button"
                onClick={onClickDelete}
            >
                Удалить
            </button>
      </div>
    )
}

export default ChatMessage;