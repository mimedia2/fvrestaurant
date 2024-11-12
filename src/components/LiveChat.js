import React, { useState, useRef, useEffect } from 'react';

const LiveChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatWindowRef = useRef(null);

  // Function to append a new message
  const appendMessage = (message, sender) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: sender },
    ]);
  };

  // Handle sending the message
  const handleSendMessage = () => {
    if (input.trim()) {
      appendMessage(input, 'user');
      setInput(''); // Clear the input

      // Simulate bot response
      setTimeout(() => {
        appendMessage('This is a bot response.', 'bot');
      }, 1000);
    }
  };

  // Scroll to the bottom of the chat window when new messages arrive
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      {/* Fullscreen chat container */}
      <div className="w-full h-full md:max-w-2xl md:h-5/6 bg-white shadow-lg rounded-lg flex flex-col">
        {/* Chat Header */}
        <div className="bg-blue-600 p-4 rounded-t-lg flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-white">Live Chat</h2>
          <button className="text-white focus:outline-none">
            {/* Add a logout or close button if needed */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Chat Messages Window */}
        <div
          ref={chatWindowRef}
          className="flex-1 bg-gray-100 p-4 overflow-y-auto"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 mb-3 rounded-lg max-w-xs break-words ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white self-end ml-auto'
                  : 'bg-gray-300 text-gray-800'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Chat Input and Send Button */}
        <div className="bg-gray-200 p-4 rounded-b-lg">
          <div className="flex items-center">
            <input
              id="chatInput"
              type="text"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-600"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') handleSendMessage();
              }}
            />
            <button
              id="sendButton"
              className="ml-3 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none"
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;

