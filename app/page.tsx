import Background from "./components/Background";
import Navbar from "./components/Navbar";
import CustomGrid from "./components/CustomGrid";
import HomeButton from "./components/HomeButton";

export default function Home() {
  return (
    <>
      <Background></Background>
      <Navbar></Navbar>
      <CustomGrid></CustomGrid>
      <HomeButton></HomeButton>
    </>
  );
}
