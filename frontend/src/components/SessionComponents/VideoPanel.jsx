import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast"


export default function VideoPanel({ socket, roomId }) {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const pendingCandidates = useRef([]);
  const[remoteConnected,setRemoteConnected]=useState(false);

  // ==========================
  // Create Offer
  // ==========================
  const createOffer = async () => {
    if (!peerConnection.current) return;

    console.log("Creating Offer");

    const offer = await peerConnection.current.createOffer();

    await peerConnection.current.setLocalDescription(offer);

    socket.emit("offer", {
      roomId,
      offer,
    });

    console.log("Offer Sent");
  };

  // ==========================
  // Create Answer
  // ==========================
  const createAnswer = async () => {
    if (!peerConnection.current) return;

    console.log("Creating Answer");

    const answer = await peerConnection.current.createAnswer();

    await peerConnection.current.setLocalDescription(answer);

    socket.emit("answer", {
      roomId,
      answer,
    });

    console.log("Answer Sent");
  };

  // ==========================
  // Start Camera
  // ==========================
  useEffect(() => {
    let stream;

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream;
        }

        peerConnection.current = new RTCPeerConnection({
          iceServers: [
            {
              urls: "stun:stun.l.google.com:19302",
            },
          ],
        });
        socket.emit("ready", {
    roomId,
});

        // Local Tracks
        stream.getTracks().forEach((track) => {
          peerConnection.current.addTrack(track, stream);
        });

        // Remote Stream
        peerConnection.current.ontrack = (event) => {
          console.log("Remote Track Received");
          setRemoteConnected(true);

          if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = event.streams[0];
          }
        };

        // ICE Candidate
        peerConnection.current.onicecandidate = (event) => {
          if (!event.candidate) return;

          console.log("Sending ICE");

          socket.emit("ice-candidate", {
            roomId,
            candidate: event.candidate,
          });
        };
      } catch (error) {
        console.error("Camera Error:", error);
      }
    };

    startCamera();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());

      peerConnection.current?.close();
    };
  }, [socket, roomId]);

  // ==========================
  // Receive Offer
  // ==========================
  useEffect(() => {
    if (!socket) return;

    const handleOffer = async ({ offer }) => {
      console.log("Offer Received");

      await peerConnection.current.setRemoteDescription(offer);
      while (pendingCandidates.current.length > 0) {
  const candidate = pendingCandidates.current.shift();

  await peerConnection.current.addIceCandidate(candidate);
}

      await createAnswer();
    };

    socket.on("receive-offer", handleOffer);

    return () => {
      socket.off("receive-offer", handleOffer);
    };
  }, [socket]);

  // ==========================
  // Receive Answer
  // ==========================
  useEffect(() => {
    if (!socket) return;

    const handleAnswer = async ({ answer }) => {
      console.log("Answer Received");

      await peerConnection.current.setRemoteDescription(answer);
      while (pendingCandidates.current.length > 0) {
  const candidate = pendingCandidates.current.shift();

  await peerConnection.current.addIceCandidate(candidate);
}
    };

    socket.on("receive-answer", handleAnswer);

    return () => {
      socket.off("receive-answer", handleAnswer);
    };
  }, [socket]);

  // ==========================
  // Receive ICE
  // ==========================
  useEffect(() => {
    if (!socket) return;

   const handleCandidate = async ({ candidate }) => {
  if (!candidate) return;

  if (
    !peerConnection.current ||
    !peerConnection.current.remoteDescription
  ) {
    pendingCandidates.current.push(candidate);
    return;
  }

  await peerConnection.current.addIceCandidate(candidate);
};
    socket.on("receive-ice-candidate", handleCandidate);

    return () => {
      socket.off("receive-ice-candidate", handleCandidate);
    };
  }, [socket]);

  // ==========================
  // User Joined
  // ==========================
  useEffect(() => {

    if (!socket) return;

    const handlePeerReady = async () => {

        console.log("Peer Ready");

        await createOffer();

    };

    socket.on("peer-ready", handlePeerReady);

    return () => {

        socket.off("peer-ready", handlePeerReady);

    };

}, [socket]);


// waiting toast

useEffect(()=>{
  if(!remoteConnected){
    toast.loading("Waiting for another participant!!!",{
      id:"waiting-toast"
    });

  }
  else{
    toast.dismiss("waiting-toast");
    toast.success("Participant joined")
  }
},[remoteConnected]);

const handlePeerReady = async () => {
  setRemoteConnected(true);

  await createOffer();
};
useEffect(() => {
  return () => {
    toast.dismiss("waiting-toast");
  };
}, []);
  return (
    <div className="h-full bg-base-200 flex flex-col p-4 gap-4">

      {/* Local Video */}
      <div>
        <h2 className="font-semibold text-lg mb-2">
          Local Video
        </h2>

        <div className="rounded-xl overflow-hidden bg-black aspect-video">
          <video
            ref={localVideoRef}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Remote Video */}
      <div>
        <h2 className="font-semibold text-lg mb-2">
          Remote Video
        </h2>

        <div className="rounded-xl overflow-hidden bg-black aspect-video">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
}