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
      <div className="footer-card">
        <div className="footer-copy">
          <div className="footer-title">Join the conversation</div>
          <div className="footer-meta">{count} likes</div>
        </div>
        <div className="footer-actions">
          <button className="btn primary border">Enrollment Closed</button>
          <button className="btn accent">Interesting, next.</button>
          <button className="btn" onClick={toggleLike} aria-pressed={liked}>
            {liked ? '♥ Liked' : '♡ Like'}
          </button>
        </div>
      </div>
    </div>
  )
}
