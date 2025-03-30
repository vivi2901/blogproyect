export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500 border-opacity-75"></div>
        <p className="mt-4 text-lg text-gray-700">Cargando...</p>
      </div>
    </div>
  );
}
