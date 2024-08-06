interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export default function ButtonEditorTipTap(props: Props) {
  const active = "bg-zinc-500 text-white ";
  const inactive = "bg-zinc-100 text-zinc-900 ";
  const defaultClass =
    "w-10 aspect-square border border-zinc-200 hover:bg-zinc-300 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-opacity-50 rounded-md ";
  const classButton =
    props.className || "" + defaultClass + (props.active ? active : inactive);
  return <button {...props} className={classButton} type="button" />;
}
