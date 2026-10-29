import { useRef, useEffect, useState } from 'react'

export default function BlurText({ text = '', delay = 200, className = '' }) {
  const elements = text.split(' ')
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <p ref={ref} className={`blur-text ${className}`} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {elements.map((word, index) => (
        <span
          key={index}
          style={{
            filter: inView ? 'blur(0px)' : 'blur(10px)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translate3d(0,0,0)' : 'translate3d(0,10px,0)',
            transition: `all 0.8s ease ${index * (delay / 1000)}s`,
            display: 'inline-block',
            marginRight: '0.25em',
          }}
        >
          {word}
        </span>
      ))}
    </p>
  )
}