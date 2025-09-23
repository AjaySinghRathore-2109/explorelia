import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Recommendations = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('/api/recommendations?userId=1').then(res => {
      console.log(res.data)
      setItems(res.data.items || [])
    }).finally(() => setLoading(false))
  }, [])

  return (
    <section className="max-w-[1180px] mx-auto px-4 mt-6">
      <h3 className="mb-3">Smart Recommendations for You</h3>
      <div className="grid grid-cols-12 gap-4.5">
        {loading && Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-4 shadow-[0_6px_20px_rgba(93,64,55,0.15)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)] col-span-4">
            <div className="h-30 bg-surface-light dark:bg-surface-dark rounded-lg" />
            <div className="h-3" />
            <div className="h-3 w-3/5 bg-surface-light dark:bg-surface-dark rounded-md" />
            <div className="h-2" />
            <div className="h-3 w-2/5 bg-surface-light dark:bg-surface-dark rounded-md" />
          </div>
        ))}
        {!loading && items.map((x) => (
          <div key={x.id} className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-4 shadow-[0_6px_20px_rgba(93,64,55,0.15)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)] col-span-4">
            <div className="h-35 rounded-lg bg-cover bg-center" style={{
              backgroundImage: `url(${x.image})`
            }} />
            <h4 className="my-2">{x.title}</h4>
            <p className="text-muted-light dark:text-muted-dark text-sm">{x.description}</p>
            <div className="flex justify-between items-center">
              <span>⭐ {x.rating.toFixed(1)}</span>
              <button className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark text-text-light dark:text-text-dark cursor-pointer shadow-[0_6px_20px_rgba(93,64,55,0.15)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.4)]">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Recommendations
