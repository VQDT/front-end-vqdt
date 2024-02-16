function image({ src }: {src: string}) {
  console.log(src)
  return(
    <img src={src} alt="image" className="w-full max-w-[300px] m-auto"/>
  )
}

export default image;