import { MutatingDots } from "react-loader-spinner";
function LoaderSpinner() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <MutatingDots visible={true} width="100" height="100" color="#FFFF00" secondaryColor="#FFDA03" />
      </div>
    </>
  );
}
export default LoaderSpinner;
