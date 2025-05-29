import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

export function Loading() {
  return (
    <div className="flex justify-center items-center h-full">
      <Lottie animationData={loadingAnimation} loop={true} style={{ width: "60vw", height: "auto" }} />
    </div>
  );
}
