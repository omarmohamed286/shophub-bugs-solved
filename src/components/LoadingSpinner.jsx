const LoadingSpinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[500px] animate-fade-in">
      <div className="relative">
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-indigo-600"></div>
        <div
          className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-600 absolute top-0 left-0"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>
      <p className="mt-6 text-gray-600 font-semibold text-lg animate-pulse">
        Loading amazing products...
      </p>
    </div>
  );
};

export default LoadingSpinner;
