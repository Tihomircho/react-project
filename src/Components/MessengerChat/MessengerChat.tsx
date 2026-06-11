"use client";

import Image from "next/image";
import style from "./MessengerChat.module.scss";
import ViberChatIcon from "../../assets/ViberChatIcon";
import FmessengerIcon from "../../assets/FmessengerIcon";

interface MessengerChatProps {
  pageId?: string;
  viberNumber?: string;
}

export default function MessengerChat({
  pageId,
  viberNumber,
}: MessengerChatProps) {
  // Официалният линк за директен чат с вашата страница
  const messengerUrl = `https://m.me/61590852535733`;
  const viberUrl = `viber://chat?number=${viberNumber}`;
  return (
    <div className={style.chatWrapepr}>
      <a
        href={viberUrl}
        className="chat-btn btn-viber"
        aria-label="Чат във Viber"
      >
        {/* <span className={style.btnAnime}></span> */}
        <ViberChatIcon widthSize={35} heightSize={35} />
      </a>
      <a
        href={messengerUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Чат с нас в Messenger"
      >
        {/* Пулсиращ ефект за привличане на вниманието */}
        {/* <span className={style.btnAnime}></span> */}
        <FmessengerIcon widthSize={37} heightSize={37} />
      </a>
    </div>
  );
}
