const ProductLoadingSkeleton = () => {
  return (
    <div>
      <section className="bg-white dark:bg-transparent">
        <div className=" px-6 py-10 mx-auto animate-pulse">
          <div className="grid grid-cols-1 gap-5 py-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="w-full animate-pulse">
              <div className="w-full h-64 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></p>
            </div>

            <div className="w-full animate-pulse">
              <div className="w-full h-64 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></p>
            </div>

            <div className="w-full animate-pulse">
              <div className="w-full h-64 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></div>

              <h1 className="w-56 h-2 mt-4 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></h1>
              <p className="w-24 h-2 mt-4 bg-gray-200 dark:bg-color-darkBaseColor rounded-lg "></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLoadingSkeleton;
