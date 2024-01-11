interface SubjectCardProps {
  subject: string;
  done: string;
  total: string;
}

function SubjectCard({ subject, done, total }: SubjectCardProps) {
  return(
    <div className="w-full max-w-xs px-8 py-6 bg-White rounded-xl shadow-md"> 
      <p className="text-Concrete text-xl font-semibold flex gap-2 uppercase">
        <span className="mr-auto text-Blue">{ subject }</span>
        <span>{ done }</span> 
        de 
        <span>{ total }</span>
      </p>
    </div>
  );
}

export default SubjectCard;