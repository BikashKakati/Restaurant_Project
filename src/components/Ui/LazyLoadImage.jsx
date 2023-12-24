import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export function LazyLoadImg ({src, alt, className}){
    return(
        <LazyLoadImage
        className={className || ""}
        alt={alt}
        effect='blur'
        src = {src}
        />
    )
}