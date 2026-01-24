import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

const Camerae = forwardRef((props, ref) => {
  const videoRef = useRef(null);
  let streamRef = useRef(null);

  useEffect(() => {
    async function startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

        streamRef.current = stream;
        videoRef.current.srcObject = stream;
      } catch (error) {
        alert("Please allow camera access");
      }
    }

    startCamera();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const toggleCamera = () => {
    const videoTrack = streamRef.current?.getVideoTracks()[0];
    if (videoTrack) {
      videoTrack.enabled = !videoTrack.enabled;
    }
  };

  // 🔥 Expose function to parent
  useImperativeHandle(ref, () => ({
    toggleCamera,
  }));

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="rounded-4xl"
    />
  );
});

export default Camerae;
