function ContentTitle({ children }: { children: React.ReactNode }) {
  return(
    <h3 className="w-full font-bold text-slate-900">{children}</h3>
  );
}

export default ContentTitle;