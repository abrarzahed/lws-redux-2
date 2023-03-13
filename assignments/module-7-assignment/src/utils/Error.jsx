export default function Error({ error }) {
  return (
    <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <p className="text-red-300">{error}</p>
      </main>
    </div>
  );
}
