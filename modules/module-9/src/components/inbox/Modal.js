import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../features/users/usersApi";
import { isValidEmail } from "../../utils/isValidEmail";
import Error from "../ui/Error";

export default function Modal({ open, control }) {
   const [to, setTo] = useState("");
   const [message, setMessage] = useState("");
   const [userCheck, setUserCheck] = useState(false);

   const { email: authUserEmail, name: authUserName } =
      useSelector((state) => state.auth) || {};

   const { data: participant } = useGetUserQuery(to, {
      skip: !userCheck,
   });

   useEffect(() => {
      if (participant?.length > 0) {
         // check conversation existence
      }
   }, [participant]);

   const debounceHandler = (fn, delay) => {
      let timeoutId;
      return (...args) => {
         clearTimeout(timeoutId);
         timeoutId = setTimeout(() => {
            fn(...args);
         }, delay);
      };
   };

   const doSearch = (value) => {
      if (isValidEmail(value)) {
         // check user API
         setUserCheck(true);
         setTo(value);
      }
   };

   const handleSearch = debounceHandler(doSearch, 500);

   return (
      open && (
         <>
            <div
               onClick={control}
               className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
            ></div>
            <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Send message
               </h2>
               <form className="mt-8 space-y-6">
                  <div className="rounded-md shadow-sm -space-y-px">
                     <div>
                        <label htmlFor="to" className="sr-only">
                           To
                        </label>
                        <input
                           id="to"
                           name="to"
                           type="email"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                           placeholder="Send to"
                           onChange={(e) => handleSearch(e.target.value)}
                        />
                     </div>
                     <div>
                        <label htmlFor="message" className="sr-only">
                           Message
                        </label>
                        <textarea
                           id="message"
                           name="message"
                           type="text"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                           placeholder="Message"
                           value={message}
                           onChange={(e) => setMessage(e.target.value)}
                        />
                     </div>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                     >
                        Send Message
                     </button>
                  </div>

                  {participant?.length === 0 && (
                     <Error message="This user does not exist!" />
                  )}
                  {participant?.[0]?.email === authUserEmail && (
                     <Error message="You cant send message to yourself" />
                  )}
               </form>
            </div>
         </>
      )
   );
}
