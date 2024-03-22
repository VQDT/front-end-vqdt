function Image({ src }: { src: string }) {
  return(
    <div className="w-full h-[250px] object-contain">
      <img src={`data:image/png;base64,${src}`} className="max-w-full max-h-full m-auto object-contain"/>
    </div>
  )
}

export default Image;