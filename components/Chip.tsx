export default function Chip({ text }: { text: string }) {
  return (
    <div className="bg-emerald-400/10 py-1 px-3 rounded-full ">
      <p className="text-xs font-medium leading-5 text-emerald-300/90 cursor-pointer ">
        {text}
      </p>
    </div>
  );
}
