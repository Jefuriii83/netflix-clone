import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState} from 'react'
import { Video, ResizeMode} from 'expo-av'
import { Playback } from 'expo-av/build/AV'

interface VideoPlayerProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video:string,
    }
}

const VideoPlayer = (props: VideoPlayerProps) => {

    const {episode} = props;
    const [status, setStatus] = useState({});

    const video = useRef<Playback>(null);
    useEffect(() => {
      if(!video)
      {
        return;
      }
      (
        async () => {
          await video?.current?.unloadAsync();
          await video?.current?.loadAsync({
            uri: episode.video
          }, {}, false);
        }
      )()
    }, [episode]);
  return (

      <Video
      ref={video}
        className='w-[100%] aspect-video'
        source={{
          uri: episode.video,
        }}
        posterSource={{
            uri: episode.poster,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={true}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
    />

  )
}

export default VideoPlayer