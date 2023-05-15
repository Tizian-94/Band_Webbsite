import { useRef, useState } from 'react';
import { tracks } from './audios.js';

import Controls from './Controls.js';
import DisplayTrack from './DisplayTrack';
import ProgressBar from './ProgressBar.js';


const Audiobar = () => {
  const [currentTrack] = useState(tracks[6]);

  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef();
  const progressBarRef = useRef();

  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack  {...{ currentTrack, audioRef, setDuration, progressBarRef }} />
        <Controls {...{ audioRef, progressBarRef, duration, setTimeProgress, tracks }} />
        <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
      </div>
    </div>
  );
};
export default Audiobar;