'use client'

import { useRef, useState, useEffect } from 'react'

export default function BeforeAfterHero() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isDraggingRef = useRef(false)
    const [percentage, setPercentage] = useState(50)
    const [containerWidth, setContainerWidth] = useState(0)

    const updatePercentage = (clientX: number) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const x = clientX - rect.left
        const newPercentage = Math.max(5, Math.min(95, (x / rect.width) * 100))
        setPercentage(newPercentage)
    }

    const handleMouseDown = () => {
        isDraggingRef.current = true
    }

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDraggingRef.current) return
        updatePercentage(e.clientX)
    }

    const handleMouseUp = () => {
        isDraggingRef.current = false
    }

    const handleTouchStart = () => {
        isDraggingRef.current = true
    }

    const handleTouchMove = (e: TouchEvent) => {
        if (!isDraggingRef.current) return
        e.preventDefault()
        updatePercentage(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
        isDraggingRef.current = false
    }

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth)
            }
        }

        updateWidth()
        window.addEventListener('resize', updateWidth)

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('touchmove', handleTouchMove, { passive: false })
        document.addEventListener('touchend', handleTouchEnd)

        return () => {
            window.removeEventListener('resize', updateWidth)
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
            document.removeEventListener('touchmove', handleTouchMove)
            document.removeEventListener('touchend', handleTouchEnd)
        }
    }, [])

    return (
        <div className="w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div ref={containerRef} className="relative select-none">
                <img src="/image_uploadzone.jpg" alt="Before" className="w-full block" draggable={false} />
                <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${percentage}%` }}>
                    <img src="/image_uploadzone_removed.png" alt="After" className="w-full block" style={{ width: `${containerWidth}px` }} draggable={false} />
                </div>
                <div className="absolute top-0 h-full flex items-center" style={{ left: `${percentage}%`, transform: 'translateX(-50%)' }}>
                    <div className="w-1 h-full bg-white" style={{ opacity: 0.8 }}></div>
                    <div
                        className="absolute w-14 h-14 rounded-full bg-white flex items-center justify-center cursor-ew-resize shadow-xl"
                        style={{ border: '4px solid #3b82f6', left: '50%', transform: 'translateX(-50%)' }}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleTouchStart}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M15 19l-7-7 7-7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5l7 7-7 7" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
