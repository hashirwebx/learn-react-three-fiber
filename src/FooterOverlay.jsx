import { useState } from 'react'

export default function FooterOverlay(){
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(42)

  function toggleLike(){
    setLiked(v => {
      const next = !v
      setCount(c => c + (next ? 1 : -1))
      return next
    })
  }

  return (
    <div className="footer-overlay">
      <div className="footer-inner">
        <div style={{display:'flex',flexDirection:'column',gap:6,alignItems:'flex-end'}}>
          <div style={{color:'#fff',fontSize:14}}>Make your team and participate</div>
          <div style={{fontSize:12,color:'#ddd'}}>{count} likes</div>
        </div>
        <div style={{display:'flex',gap:12}}>
          <button className="btn primary">Enrollment Closed</button>
          <button className="btn accent">Interesting, next.</button>
          <button className="btn" onClick={toggleLike} aria-pressed={liked}>
            {liked ? '♥ Liked' : '♡ Like'}
          </button>
        </div>
      </div>
    </div>
  )
}
