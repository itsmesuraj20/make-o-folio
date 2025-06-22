import { MakeofolioProvider } from "@/components/Makeofolio";
import MainScreen from "@/layout/MainScreen";
import { TitleUpdate } from "@/utils/TitleUpdate";



const Home = () => {
  return (
   <MakeofolioProvider >
      <TitleUpdate />
      <MainScreen>
        <p>Hello World</p>
      </MainScreen>
    </MakeofolioProvider>
  )
}

export default Home;