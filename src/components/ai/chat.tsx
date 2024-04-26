'use client';
 
import { useChat } from 'ai/react';
import { ScrollArea } from '../ui/scroll-area';
 
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
 
  return (
    <div className='w-[1400px] h-[800px] mx-auto bg-gradient-to-tr from-black/80 to-white/40 bg-zinc-500 rounded-lg my-10 flex flex-col justify-end'>
      <ScrollArea>

        <ul className='flex flex-col w-full'>
          {messages.map((message, index) => {
            if (message.role === 'user') {
              return (
                <li key={index} className='flex justify-end items-center'>
                  <span className='h-fit rounded-md px-2 text-button'>Username</span>
                  <span className='px-5 py-2 max-w-[50%] break-words bg-white/40 my-2 text-lg rounded-l-lg font-medium'>{message.content}</span>
                </li>
              )
            } else {
              return (
                <li key={index} className='flex justify-start items-center'>
                  {/* {message.role === 'user' ? 'User: ' : 'AI: '} */}
                  <span className='px-5 py-2 max-w-[50%] break-words bg-white/40 my-2 text-lg rounded-r-lg font-medium'>AI Support: {message.content}</span>
                  <span className='h-fit rounded-md px-2 text-button'>AI Assistent</span>
                </li>
              )
            }
          })}
        </ul>
      </ScrollArea>
      <form 
        onSubmit={handleSubmit} 
        className='w-full grid grid-cols-10 h-[50px] min-h-[50px]'
      >
        <div className='col-span-9 flex'>
          <input 
            id='message'
            value={input} 
            onChange={handleInputChange} 
            className='bg-white/80 outline-1 outline-none text-lg w-full px-5 hover:bg-white/60 transition-colors duration-300' 
          />
        </div>
        <button 
          type="submit" 
          className='bg-white/80 border-l-2 border-zinc-500 w-full tracking-wide font-medium text-lg hover:bg-white/60 animate-light-pulse'
        >
          Send
        </button>
      </form>
    </div>
  );
}