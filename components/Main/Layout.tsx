import Intro from "./Main/Intro"
import Education from "./Main/Education"
import HoaLu from "./Main/HoaLu"
import News from "./Main/News"
import QuestionAsk from "./Main/QuestionAsk"

export default function Layout() {
    
    return (
        <>
            <section><img src="/img/bg-top.png" alt="bg-top" /></section>
            <section className="md:h-screen py-4"><Intro /></section>
            <section className="md:h-screen py-4"><Education /></section>
            <section className="md:h-screen"><HoaLu /></section>
            <section className="md:h-screen"><News /></section>
            <section className="md:h-screen bg-cover"><QuestionAsk /></section>
        </>
    )
}