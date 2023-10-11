interface LocalLinkProps {
  text: string;
  href: string;
}

function LocalLink({text, href}: LocalLinkProps) {
  return(
    <a className="text-base text-Darker" href={href}>{text}</a>
  );
}

export default LocalLink;