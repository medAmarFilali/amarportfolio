export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="py-6  ">
      <h2 className="text-xl text-emerald-400 font-semibold ">{title}</h2>
    </div>
  );
}
