import { Audio } from "react-loader-spinner";
function Loading() {
  return (
    <div className="loader">
      <Audio
        height="150"
        width="150"
        radius="20"
        color="green"
        ariaLabel="loading"
      />
      <h1>Please Wait </h1>
    </div>
  );}

export default Loading;
