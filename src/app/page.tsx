import { MakeofolioProvider } from "@/components/Context/Makeofolio";
import MainScreen from "@/layout/MainScreen";
import { TitleUpdate } from "@/utils/TitleUpdate";
import Banner from '../PageComponent/Banner';



const Home = () => {
  return (
    <MakeofolioProvider >
      <TitleUpdate />
      <MainScreen>
        <Banner />
      </MainScreen>
    </MakeofolioProvider>
  )
}

export default Home;