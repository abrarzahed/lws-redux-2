// import Blank from "./Blank";
import { useParams } from "react-router-dom";
import { useGetMessagesQuery } from "../../../features/messages/messagesApi";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";

export default function ChatBody() {
   const { id } = useParams();
   const {
      isLoading,
      data: messages,
      isError,
      error,
   } = useGetMessagesQuery(id);

   // decide what to render
   let content;
   if (isLoading) {
      content = <div>Loading...</div>;
   } else if (!isLoading && isError) {
      content = <div>{error.data}</div>;
   } else if (!isLoading && !isError && messages.length === 0) {
      content = <div>Send first text</div>;
   } else {
      content = (
         <>
            <ChatHead
               avatar="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
               name="Akash Ahmed"
            />
            <Messages messages={messages} />
            <Options />
         </>
      );
   }

   return (
      <div className="w-full lg:col-span-2 lg:block">
         <div className="w-full grid conversation-row-grid">
            {content}
            {/* <Blank /> */}
         </div>
      </div>
   );
}
