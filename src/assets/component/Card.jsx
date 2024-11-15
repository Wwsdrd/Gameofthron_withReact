export const Card = ({ title, firstName, lastName, url, family }) => {
  return (
    <div
      className="h-72 w-full cursor-pointer group"
      style={{
        perspective: "100%",
      }}
    >
      <div
        className="h-full w-full rounded-xl shadow-xl transition-all duration-500 group-hover:[transform:rotateY(180deg)]"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0">
          <img
            src={url}
            alt={`${firstName} ${lastName}`}
            className="w-full h-full rounded-xl object-cover shadow-lg shadow-wg"
          />
        </div>
        <div
          className="absolute h-full w-full insert-0 rounded-xl text-center bg-black opacity-80 p-3 text-slate-200 flex flex-col items-center justify-center "
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold">{firstName}</h2>
          <h2 className="text-2xl sm:text-3xl font-extrabold">{lastName}</h2>
          <h3 className="text-base sm:text-lg font-semibold my-2">
            Title: <span className="text-slate-100 font-medium">{title}</span>
          </h3>
          <h3 className="text-base sm:text-lg font-semibold my-2">
            Family: <span className="text-slate-100 font-medium">{family}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
