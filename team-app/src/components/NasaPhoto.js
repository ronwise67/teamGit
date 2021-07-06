import React, { useEffect, useState } from "react"

export default function NasaPhoto(){
const [photoData, setPhotoDate] = useState(null)

useEffect(() => {
    fetchPhoto()
    async function fetchPhoto(){
    const res = await fetch(
        `https://api.nasa.gov/planetary/earth/imagery`
    )
    const data = await res.json()
    setPPhotoData(data)
}
}, [])

if (!photoData) return <div />

return (
    <div>
        <img
            src={photoData.url}
            alt={photoData.title}
            />
    </div>

)
}