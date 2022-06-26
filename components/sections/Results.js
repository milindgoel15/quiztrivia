import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

let Results = ({ name, score, setQuiz }) => {
  let { width, height } = useWindowSize();

  return (
    <>
      <section className="flex flex-col items-center gap-10 bg-white dark:bg-secondary dark:text-white rounded-lg shadow-lg mx-10 md:mx-20 justify-center text-center my-24 py-16 ">
        {name ? (
          <h2 className="text-3xl md:text-4xl">
            <span className="font-semibold">{name}'s</span> result card
          </h2>
        ) : (
          <h2 className="text-3xl md:text-4xl">Your result card</h2>
        )}

        <p>Obtained score {score} out of 10</p>

        <button
          onClick={() => setQuiz(false)}
          className="rounded-md text-white text-base bg-blue-500 transition-all hover:bg-blue-700 my-4 w-fit py-3 px-5"
        >
          End Quiz
        </button>
      </section>

      {score > 1 && <Confetti width={width / 1.2} height={height} recycle={true} numberOfPieces={80} style={{overflowX: "hidden"}} />}
    </>
  );
};

export default Results;
