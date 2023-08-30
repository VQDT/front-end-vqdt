interface TagProps {
  text: string;
  color: string;
}

function Tag(props: TagProps) {
  return (
    <span className={`py-2 px-4 text-white rounded bg-red-500`} >
      {props.text}
    </span>
  );
}

export default Tag;
