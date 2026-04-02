'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Skeleton } from './skeleton'

interface ShuffleImage {
  id: number
  src: string
  alt: string
  author: string
  authorUrl: string
}

function fisherYates<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function ImageCell({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <Skeleton className="absolute inset-0" />
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={[
          'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
          loaded ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />
    </div>
  )
}

export function ShuffleGrid() {
  const [images, setImages] = useState<ShuffleImage[]>([])
  const [shuffled, setShuffled] = useState<ShuffleImage[]>([])
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    fetch('/shuffle-images.json')
      .then((r) => r.json())
      .then((data: ShuffleImage[]) => {
        setImages(data)
        setShuffled(fisherYates(data))
      })
  }, [])

  useEffect(() => {
    if (images.length === 0) return
    const doShuffle = () => {
      setShuffled(fisherYates(images))
      timerRef.current = setTimeout(doShuffle, 3000)
    }
    timerRef.current = setTimeout(doShuffle, 3000)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [images])

  // Render 16 skeletons before data loads
  if (shuffled.length === 0) {
    return (
      <div className="grid grid-cols-4 grid-rows-4 gap-1.5 h-[460px]">
        {Array.from({ length: 16 }).map((_, i) => (
          <Skeleton key={i} className="w-full h-full rounded-lg" />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-4 grid-rows-4 gap-1.5 h-[460px]">
      {shuffled.map((img) => (
        <motion.div
          key={img.id}
          layout
          transition={{ duration: 1.5, type: 'spring' }}
          className="w-full h-full"
        >
          <ImageCell src={img.src} alt={img.alt} />
        </motion.div>
      ))}
    </div>
  )
}
