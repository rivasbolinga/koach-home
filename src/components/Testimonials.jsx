import { useState, useRef } from 'react'
import { reviewsData } from '../data'
import '../styles/testimonials.scss'

const Testimonials = () => {
  const { title, description, reviews } = reviewsData
  const testimonialsContainerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setDragStartX(e.clientX)
    setScrollLeft(testimonialsContainerRef.current.scrollLeft)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    const dragOffset = e.clientX - dragStartX
    testimonialsContainerRef.current.scrollLeft = scrollLeft - dragOffset
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  return (
    <section className="testimonials-section">
      <h3>{title}</h3>
      <p>{description}</p>
      <div
        className="testimonials-container"
        ref={testimonialsContainerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onScroll={(e) => e.preventDefault()}
      >
        {reviews.map((testimonial, index) => {
          const { img, job, name, review } = testimonial
          return (
            <div className="testimonial-container" key={`testimonial-${index}`}>
              <div className="testimony-details">
                <img className="testimonial-img" src={img} alt="mentor" />
                <div className='testimonee-details'>
                  <h5>{name}</h5>
                  <p><span>Mentor</span>, {job}</p>
                </div>
              </div>
              <p>{review}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials
