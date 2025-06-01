import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

export function Loading() {
  return (
    <div className="flex justify-center items-center pt-4">
      <Lottie animationData={loadingAnimation} loop={true} style={{ width: "60%", height: "auto" }} />
    </div>
  );
}
