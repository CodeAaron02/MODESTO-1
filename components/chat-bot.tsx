"use client";

import { cn } from "@/lib/utils";
import { botReply, userMessage } from "@/utils/chat-bot";
import React, {
  ElementRef,
  FormEvent,
  Fragment,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoChatbubble, IoClose, IoSend } from "react-icons/io5";

const ChatBot = () => {
  const [inputValue, setInputValue] = useState("");
  const [chats, setChats] = useState<{ user: string; bot: string }[]>([]);
  const [isOpenChatBot, setOpenChatBot] = useState(false);
  const scrollRef = useRef<ElementRef<"div">>(null);

  const alternative = ["Did you spell it right?, can you repeat it again?"];

  const synth = window.speechSynthesis;

  function voiceControl(string: string) {
    let u = new SpeechSynthesisUtterance(string);
    u.text = string;
    u.lang = "en-GB";
    u.volume = 10;
    u.rate = 1;
    u.pitch = 1;
    synth.speak(u);
  }

  function output(e: FormEvent) {
    e.preventDefault();

    let product;

    let text = inputValue.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();

    let comparedText = compare(userMessage, botReply, text);

    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];

    setChats((prev) => [...prev, { user: inputValue, bot: product }]);
    setInputValue("");
    voiceControl(product);
  }

  function suggestionOutput(message: string) {
    let product;

    let text = message.toLowerCase().replace(/[^\w\s\d]/gi, "");

    text = text
      .replace(/[\W_]/g, " ")
      .replace(/ a /g, " ")
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .trim();

    let comparedText = compare(userMessage, botReply, text);

    product = comparedText
      ? comparedText
      : alternative[Math.floor(Math.random() * alternative.length)];

    setChats((prev) => [...prev, { user: message, bot: product }]);
    setInputValue("");
    voiceControl(product);
  }

  function compare(triggerArray: any, replyArray: any, string: string) {
    let item;
    for (let x = 0; x < triggerArray.length; x++) {
      for (let y = 0; y < replyArray.length; y++) {
        if (triggerArray[x][y] == string) {
          item = replyArray[x];
          item = item[Math.floor(Math.random() * item.length)];
        }
      }
    }
    //containMessageCheck(string);
    if (item) return item;
    else return containMessageCheck(string);
  }

  function containMessageCheck(string: string) {
    let expectedReply = [
      [
        "Good Bye, dude",
        "Bye, See you!",
        "Dude, Bye. Take care of your health in this situation.",
      ],
      ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
      ["Have a pleasant evening!", "Good evening too", "Evening!"],
      ["Good morning, Have a great day!", "Morning, dude!"],
      ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"],
    ];
    let expectedMessage = [
      ["bye", "tc", "take care"],
      ["night", "good night"],
      ["evening", "good evening"],
      ["morning", "good morning"],
      ["noon"],
    ];
    let item;
    for (let x = 0; x < expectedMessage.length; x++) {
      if (expectedMessage[x].includes(string)) {
        item = expectedReply[x];
        item = item[Math.floor(Math.random() * item.length)];
      }
    }
    return item;
  }

  useEffect(() => {
    if (scrollRef.current) {
      const scrollToBottom = scrollRef.current.scrollHeight;
      scrollRef.current.scrollTo({ top: scrollToBottom });
    }
  }, [chats.length]);

  useEffect(() => {
    if (isOpenChatBot) {
      document.body.style.overflow = "clip";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpenChatBot]);

  const suggestedQuestion = [
    "Where are you located?",
    "how do i book in your resort?",
    "what are your contacts",
    "what are your activities?",
    "ano ang packages niyo",
    "what are your rates",
  ];

  return (
    <>
      <button
        onClick={() => setOpenChatBot(true)}
        className={cn(
          "fixed right-10 bottom-10 z-[1000] duration-200",
          isOpenChatBot ? "scale-0" : "scale-1"
        )}
      >
        <IoChatbubble className="text-5xl text-green-500" />
      </button>

      <div
        className={cn(
          "fixed sm:right-10 right-0 flex flex-col sm:w-[28rem] bg-zinc-800 rounded-md z-[1001] duration-200",
          isOpenChatBot
            ? "sm:bottom-10 bottom-0 sm:top-12 top-0 visible opacity-100"
            : "bottom-0 top-[40rem] opacity-0 invisible"
        )}
      >
        <div className="flex items-center justify-between p-5">
          <h1 className="uppercase font-semibold text-lg">Modesto</h1>

          <button onClick={() => setOpenChatBot(false)} className="scale-[1.5]">
            <IoClose />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 p-5 text-black text-sm overflow-auto"
        >
          <p className="bg-white rounded-b-xl rounded-tr-xl mr-12 p-2">
            Hi, Goodmorning / Goodevening. Welcome to MODESTO&apos;s FARM AND
            RESORT. Kindly use the English language to avoid confusion. Thank
            you and have a great day!
          </p>

          {chats.map((chat, idx) => (
            <Fragment key={idx}>
              <div className={cn("flex flex-col", chat.user && "items-end")}>
                <p className="bg-white rounded-b-xl rounded-tl-xl ml-12 p-2 my-5">
                  {chat.user}
                </p>
              </div>
              <div className={cn("flex flex-col", chat.bot && "items-start")}>
                <p className="bg-white rounded-b-xl rounded-tr-xl mr-12 p-2 my-5">
                  {chat.bot}
                </p>
              </div>
            </Fragment>
          ))}

          <div className="flex flex-wrap gap-2 rounded-md mt-5">
            {suggestedQuestion.map((i) => (
              <button
                onClick={() => suggestionOutput(i)}
                key={i}
                className="text-white border border-white p-2"
              >
                {i}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={output} className="flex items-center gap-4 p-5">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            required
            className="bg-transparent text-white text-sm border-b p-2 outline-none flex-1"
          />
          <button
            disabled={!inputValue}
            type="submit"
            className="disabled:cursor-not-allowed"
          >
            <IoSend className="text-2xl" />
          </button>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
