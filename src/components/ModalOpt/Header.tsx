interface HeaderProps {
  title: string;
  variant: string;
}

function Header({ title, variant }: HeaderProps) {
  return(
    <div className={`rounded-t-3xl h-16 font-medium  flex items-center justify-center flex-shrink-0 ${variant} hover:bg-Blue`}>
      <h3 className="text-2xl text-White">{ title }</h3>
    </div>
  );
}

export default Header;

