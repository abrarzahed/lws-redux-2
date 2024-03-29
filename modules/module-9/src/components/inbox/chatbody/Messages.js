import { useSelector } from "react-redux";
import Message from "./Message";

export default function Messages({ messages = [] }) {
   const { user } = useSelector((state) => state.auth) || {};
   const { email: authUserEmail } = user;
   return (
      <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
         <ul className="space-y-2">
            {messages
               .slice()
               .sort((a, b) => a.timestamp - b.timestamp)
               .map((m) => {
                  const { id, message } = m || {};
                  const justify =
                     authUserEmail === m.sender.email ? "end" : "start";
                  return (
                     <Message key={id} justify={justify} message={message} />
                  );
               })}
         </ul>
      </div>
   );
}
