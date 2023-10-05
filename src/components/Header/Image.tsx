import style from "./styles.module.css";

interface ImageProps {
  alt?: string;
  src: string;
}

function Image({ alt, src}: ImageProps) {
  return(
    <div className={style.imageContainer}>
      <img src={src} alt={alt} className={style.image}/>
    </div>
  );
}

export default Image;