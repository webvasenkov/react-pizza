import React from "react"
import ContentLoader from "react-content-loader"

const PreloaderPizzas = (props) => (
    <ContentLoader
        className='pizza-block--preloader'
        speed={2}
        width={280}
        height={455}
        viewBox="0 0 280 455"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="140" cy="120" r="120" />
        <rect x="0" y="260" rx="0" ry="0" width="280" height="24" />
        <rect x="0" y="304" rx="10" ry="10" width="280" height="84" />
        <rect x="150" y="408" rx="30" ry="30" width="130" height="42" />
        <rect x="0" y="416" rx="0" ry="0" width="92" height="27" />
    </ContentLoader>
)

export default PreloaderPizzas