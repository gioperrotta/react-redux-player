import ReactPlayer from 'react-player'

export function Video() {
  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height='100%'
        controls
        url="https://www.youtube.com/watch?v=CCBpw5MyN30&list=RDCCBpw5MyN30&start_radio=1"
      />
    </div>
  )
}