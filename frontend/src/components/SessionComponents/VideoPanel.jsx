import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast"
import { VolumeOff,Volume2 ,Video,
  VideoOff,Cast, Maximize, Minimize} from "lucide-react";


export default function VideoPanel({ socket, roomId }) {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerConnection = useRef(null);
  const pendingCandidates = useRef([]);
const [micOn, setMicOn] = useState(true);
const [remoteConnected, setRemoteConnected] = useState(false);
  const [cameraOn, setCameraOn] = useState(true);
const [screenSharing, setScreenSharing] = useState(false);

const [fullscreenVideo, setFullscreenVideo] = useState(null);




const toggleFullscreen = async (videoRef, type) => {
  if (fullscreenVideo === type) {
    await document.exitFullscreen();
    setFullscreenVideo(null);
    return;
  }

  if (videoRef.current) {
    await videoRef.current.requestFullscreen();
    setFullscreenVideo(type);
  }
};
  // Create Offer
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

  
  // Create Answer
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

  // Start Camera
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

  
  // Receive Offer
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

  // Receive Answer
  
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

  // Receive ICE
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

  // User Joined
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


// mic toggle

const toggleMic = () => {
  const stream = localVideoRef.current?.srcObject;

  if (!stream) return;

  stream.getAudioTracks().forEach((track) => {
    track.enabled = !track.enabled;
  });

  setMicOn((prev) => !prev);
};

// CAMERA TOGGLE

const toggleCamera = () => {
  const stream = localVideoRef.current?.srcObject;

  if (!stream) return;

  stream.getVideoTracks().forEach((track) => {
    track.enabled = !track.enabled;
  });

  setCameraOn((prev) => !prev);
};

const startScreenShare = async () => {
  try {
    const screenStream =
      await navigator.mediaDevices.getDisplayMedia({
        video: true,
      });

    console.log("Screen sharing started");

    const screenTrack = screenStream.getVideoTracks()[0];

    const videoSender = peerConnection.current
      ?.getSenders()
      .find(
        (sender) =>
          sender.track &&
          sender.track.kind === "video"
      );

    if (!videoSender) {
      console.error("Video sender not found");
      return;
    }

    await videoSender.replaceTrack(screenTrack);

    localVideoRef.current.srcObject = screenStream;

    setScreenSharing(true);

    console.log("Camera track replaced with screen track");

    screenTrack.onended = async () => {
      console.log("Screen sharing stopped");

      await stopScreenShare(videoSender);
    };
  } catch (error) {
    console.error("Screen sharing error:", error);
  }
};



// Stop scrren sharing

const stopScreenShare = async (videoSender) => {
  try {
    const cameraStream =
      await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

    const cameraTrack =
      cameraStream.getVideoTracks()[0];

    await videoSender.replaceTrack(cameraTrack);

    localVideoRef.current.srcObject = cameraStream;

    setScreenSharing(false);

    console.log("Camera restored");
  } catch (error) {
    console.error("Failed to restore camera:", error);
  }
};

  return (
    <div className="h-full bg-base-200 flex flex-col p-4 gap-4">

      {/* Local Video */}
      <div>
        <h2 className="font-semibold text-lg mb-2">
          You
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

      
      <button
  className="btn btn-sm btn-outline"
  onClick={() => toggleFullscreen(localVideoRef, "local")}
      >
  {fullscreenVideo === "local" ? (
    <Minimize size={16} />
  ) : (
    <Maximize size={16} />
  )}

  {fullscreenVideo === "local" ? "Exit" : "Full Screen"}
</button>

      {/* Remote Video */}
      <div>
        <h2 className="font-semibold text-lg mb-2">
          Other Participant
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

      <button
  className="btn btn-sm btn-outline"
  onClick={() => toggleFullscreen(remoteVideoRef, "remote")}
>
  {fullscreenVideo === "remote" ? (
    <Minimize size={16} />
  ) : (
    <Maximize size={16} />
  )}

  {fullscreenVideo === "remote" ? "Exit" : "Full Screen"}
</button>
     <div className="flex justify-center gap-4 mt-4">

  <button
    className="btn btn-circle btn-primary"
    onClick={toggleMic}
  >
    {micOn ? <Volume2 size={20} /> : <VolumeOff size={20} />}
  </button>

  <button
    className="btn btn-circle btn-primary"
    onClick={toggleCamera}
  >
    {cameraOn ? <Video size={20} /> : <VideoOff size={20} />}
  </button>

  <button
  className="btn btn-circle btn-primary"
  onClick={startScreenShare}
>
  <Cast size={20} />
</button>

</div>

    </div>
  );
}