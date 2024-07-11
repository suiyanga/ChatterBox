'use client'

import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = ({params}) => {
  const roomID = params.roomid;
    const myMeeting = async (element) => {
      const appID = +process.env.NEXT_PUBLIC_APPID;
      const serverSecret = process.env.NEXT_PUBLIC_SERVER_SECRET;
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID, 
        serverSecret, 
        roomID,  
        Date.now().toString(),
        "suiyanga"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
    });
  };


  return (
    <div 
    ref={myMeeting}
    className="w-[100w] h-[100vh] flex items-center flex-col justify-center bg-custom-image bg-cover bg-center bg-no-repeat">
    </div>
  )
};

export default Room;