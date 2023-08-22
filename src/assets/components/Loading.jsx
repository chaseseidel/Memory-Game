import SpongeGif from "../img/loading.gif";

export default function Loading() {
  return (
    <>
      <div id="loading">
        <img src={SpongeGif} alt="" id="loading-icon" />
        <p>Loading...</p>
      </div>
    </>
  );
}
