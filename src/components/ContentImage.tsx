function image({ src }: {src: string}) {
  return(
    <img src={src} alt="image" className="w-full max-w-[300px] m-auto"/>
  )
}

export default image;