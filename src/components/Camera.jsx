import { useEffect, useRef } from "react";

function Camerae({ onToggle }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;

    async function startCamera() {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      videoRef.current.srcObject = stream;
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const toggleCamera = () => {
    const stream = videoRef.current.srcObject;
    const videoTrack = stream.getVideoTracks()[0];
    videoTrack.enabled = !videoTrack.enabled;
  };

  // 🔥 Pass function to parent
  useEffect(() => {
    if (onToggle) onToggle(() => toggleCamera);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="rounded-4xl"
    />
  );
}

export default Camerae;
