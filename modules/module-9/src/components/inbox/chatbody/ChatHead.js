import { useSelector } from "react-redux";
import gravatarUrl from "gravatar-url";

export default function ChatHead({ message = {} }) {
   const { email: authUserEmail } = useSelector((state) => state.auth);
   const { email: otherUserEmail, name: otherUserName } = [
      message.sender,
      message.receiver,
   ].find((person) => person.email !== authUserEmail);
   return (
      <div className="relative flex items-center p-3 border-b border-gray-300">
         <img
            className="object-cover w-10 h-10 rounded-full"
            src={gravatarUrl(otherUserEmail)}
            alt={otherUserName}
         />
         <span className="block ml-2 font-bold text-gray-600">
            {otherUserName}
         </span>
      </div>
   );
}
