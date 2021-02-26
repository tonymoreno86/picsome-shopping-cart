import React, {useContext} from "react"
import Image from '../components/Image'
import {getClass} from '../utils/index'
import {Context} from "../Context"

function Photos() {
    const {allPhotos} = useContext(Context)
    
    const allImages = allPhotos.map((img,i) => {
        return (
            <Image key={img.id} img={img} className={getClass(i)} />
        )
    })
    return (
        <main className="photos">
            {allImages}
        </main>
    )
}

export default Photos