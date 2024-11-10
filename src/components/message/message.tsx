import { Message } from "../../types/message";

type MessageProps = {
    message: Message;
  }
  


function MessageElement ({message}: MessageProps): JSX.Element {
    return (
        <div className="message-block">
            <div className="message_avatar">
                <img src="" className="message_avatar_img"></img>
            </div>
                <div className="comment">
                    <span className="message_name">{message.name}</span>
                    <span className="message_date">10 May, 11:45</span>
                    <div className="message">
                        Greetings, fellow colleagues. I would like to share my insights on this task. I reckon we should deal with at least half of the points in the plan without further delays. I suggest proceeding from one point to the next and notifying the rest of us with at least short notices. This way is best to keep track of who is doing what.
                    </div>
                </div>
        </div>
    )
}

export default MessageElement;