interface ImageProps {
  alt?: string;
  src: string;
}

function Image({ alt, src}: ImageProps) {
  return( 
    <div className="w-80 h-full p-2 bg-White rounded-tr-3xl object-cover">
      <img src={src} alt={alt} className="h-full object-contain"/>
    </div>
  );
}

export default Image;