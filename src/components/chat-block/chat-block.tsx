import { Message } from '../../types/message';
import ChatMessage from '../chat-message/chat-message';
import './chat-block.css';

type ChatBlockProps = {
    messagesList: Message[] | null
    setMessagesList: (loginData: Message[] | null) => void;
}


function ChatBlock ({messagesList, setMessagesList}: ChatBlockProps): JSX.Element {

    const onClickDelete = (evt) => {
        evt.target.parentElement.remove();
    }

    const onClickAdd = () => {
        console.log('добвление');
        
    }

    return (
        <div className="chat_messages-wrapper">
            <h1 className="visually-hidden">Чат</h1>
            <div className="chat-content">
                {messagesList && messagesList.map((message) => (
                    <ChatMessage message={message} key={message.id} onClickDelete={onClickDelete}/>
                ))}
            </div>

            <form className="chat-form" action="https://echo.htmlacademy.ru" method="post">
                <input className="chat-form-input" type="text" aria-label="Ваше сообщение" placeholder="Напишите что-нибудь" required>
                </input>
            <button
                className="chat-form-button"
                type="submit"
                onClick={onClickAdd}
            >
                Отправить
            </button>
            </form>
        </div>

    )
}

export default ChatBlock;