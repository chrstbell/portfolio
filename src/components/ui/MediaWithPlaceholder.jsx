import { useState } from 'react'
import { ImageIcon, Play, Video } from 'lucide-react'
import { getMediaFilename } from '../../utils/media'

export default function MediaWithPlaceholder({
  src,
  alt = '',
  type = 'image',
  className = '',
  mediaClassName = '',
  objectFit = 'cover',
  onClick,
  showPlayIcon = false,
  playing = false,
}) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const filename = getMediaFilename(src)

  const placeholder = (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-slate-100 text-slate-400">
      {type === 'video' ? (
        <Video className="h-8 w-8 shrink-0 opacity-60" strokeWidth={1.5} />
      ) : (
        <ImageIcon className="h-8 w-8 shrink-0 opacity-60" strokeWidth={1.5} />
      )}
      <span className="max-w-[90%] truncate px-2 font-body text-[10px] font-medium sm:text-xs">
        {filename}
      </span>
    </div>
  )

  if (type === 'video' && playing) {
    return (
      <video
        src={src}
        controls
        autoPlay
        className={`h-full w-full object-contain bg-black ${mediaClassName}`}
        onClick={(e) => e.stopPropagation()}
      />
    )
  }

  if (type === 'video') {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group relative h-full w-full overflow-hidden ${className}`}
        aria-label={alt || filename}
      >
        {placeholder}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/25">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
            <Play className="ml-0.5 h-5 w-5 fill-primary-blue text-primary-blue" />
          </span>
        </span>
      </button>
    )
  }

  const fitClass = objectFit === 'contain' ? 'object-contain' : 'object-cover'

  const showPlaceholder = failed || !loaded

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {showPlaceholder && placeholder}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        onClick={onClick}
        className={`h-full w-full ${fitClass} transition-opacity duration-300 ${
          showPlaceholder ? 'absolute inset-0 opacity-0' : 'opacity-100'
        } ${onClick ? 'cursor-pointer' : ''} ${mediaClassName}`}
      />
      {showPlayIcon && !showPlaceholder && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/15">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-md">
            <Play className="ml-0.5 h-4 w-4 fill-primary-blue text-primary-blue" />
          </span>
        </span>
      )}
    </div>
  )
}
