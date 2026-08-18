function Notfound() {
  return (
    <main className="flex h-[600px] items-center justify-center pd-[25px] ">
      <div
        className="w-[60%] h-[500px] flex flex-col items-center rounded-4xl justify-center bg-emerald-100   max-md:w-[95%]
          max-md:h-[400px]

          max-sm:w-[300px]
          max-sm:h-[350px]"
      >
        <h1 className="font-mono text-[200px] max-md:text-[140px] max-sm:text-[100px]">404</h1>
        <p className="font-thin text-center px-4 max-sm:text-sm">
          Desculpe, o caminho que Você Esta procurando não existe!
        </p>
      </div>
    </main>
  );
}
export default Notfound;
