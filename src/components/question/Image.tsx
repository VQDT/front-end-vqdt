function Image({ src }: { src: string }) {

  console.log(src);

  return(
    <div className="w-full h-[250px] object-contain">
      <img src={src} className="max-w-full max-h-full m-auto object-contain"/>
    </div>
  )
}

export default Image;