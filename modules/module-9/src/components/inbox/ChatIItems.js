import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversations/conversationsApi";
import ChatItem from "./ChatItem";
import moment from "moment";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";

export default function ChatItems() {
   const { user } = useSelector((state) => state.auth);
   const {
      isLoading,
      isSuccess,
      data: conversations,
      isError,
      error,
   } = useGetConversationsQuery(user?.email);

   // decide what to render
   let content;
   if (isLoading) {
      content = <li className="m-2 text-center">Loading...</li>;
   } else if (!isLoading && isError) {
      content = <li className="m-2 text-center"> {error?.data} </li>;
   } else if (!isLoading && !isError && conversations.length === 0) {
      content = <li className="m-2 text-center"> Start a new conversation </li>;
   } else {
      content = conversations.map((conversation) => {
         const { name: otherUserName, email: otherUserEmail } =
            conversation.users.find(
               (currentUser) => currentUser.email !== user.email
            );
         return (
            <li key={conversation.id}>
               <Link to={`/inbox/${conversation.id}`}>
                  <ChatItem
                     avatar={gravatarUrl(otherUserEmail, {
                        size: 80,
                     })}
                     name={otherUserName}
                     lastMessage={conversation.message}
                     lastTime={moment(conversation.timestamp).fromNow()}
                  />
               </Link>
            </li>
         );
      });
   }

   return <ul>{content}</ul>;
}
