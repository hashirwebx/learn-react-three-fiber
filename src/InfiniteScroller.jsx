import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import img1 from './texx.png'

gsap.registerPlugin(ScrollTrigger)

export default function InfiniteScroller() {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const items = Array.from(el.children)
    items.forEach(node => el.appendChild(node.cloneNode(true)))

    const tween = gsap.to(el, {
      xPercent: -50,
      ease: 'none',
      duration: 30,
      repeat: -1
    })

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: '+=200%',
      pin: true,
      anticipatePin: 1,
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach(st => st.kill())
    }
  }, [])
  const imgs = new Array(8).fill(img1)

  return (
    <section ref={containerRef} className="scroller">
      <div ref={trackRef} className="scroller-track">
        {imgs.map((src, i) => (
          <div className="scroller-item" key={i}>
            <img src={src} alt={`tile-${i}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
