const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef }) => {

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
      };

    return (
    <div>
         <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}/>
        <div className="audio-info"> 
        </div>
        <div className="text">
            <p className="title" id="track_title">{currentTrack.title}</p>
        </div>
    </div>
    );
  };
  export default DisplayTrack;