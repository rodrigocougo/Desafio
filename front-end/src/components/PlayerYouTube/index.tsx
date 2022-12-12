import React from 'react'

interface PlayerYouTubeProps {
  urlVideo: string;
  heightScreen: string;
}

export default function PlayerYouTube(props: PlayerYouTubeProps) {
  const { urlVideo, heightScreen } = props;
  return (
    <iframe
        // style={loading ? { display: "none" } : {}}
        className="display-load"
        title="default"
        src={urlVideo + '?autoplay=0&mute=1'}
        width="100%"
        height={heightScreen}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        // onLoad={() => setLoading(false)}
    />
  )
}
