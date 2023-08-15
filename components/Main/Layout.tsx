import Intro from "./Main/Intro";
import Education from "./Main/Education";
import HoaLu from "./Main/HoaLu";
import News from "./Main/News";
import QuestionAsk from "./Main/QuestionAsk";

export default function Layout() {
  return (
    <>
      <section>
        <img src="/img/bg-top.png" alt="bg-top" />
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <HoaLu />
      </section>
      <section>
        <News />
      </section>
      <section>
        <QuestionAsk />
      </section>
    </>
  );
}
