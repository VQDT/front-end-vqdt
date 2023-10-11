interface ImageProps {
  alt?: string;
  src: string;
}

function Image({ alt, src}: ImageProps) {
  return( 
    <div className="w-full max-w-[320px] h-[68px] py-2 px-9 bg-White rounded-tr-3xl object-cover">
      <img src={src} alt={alt} className="max-w-full h-full m-auto object-contain"/>
    </div>
  );
}

export default Image;