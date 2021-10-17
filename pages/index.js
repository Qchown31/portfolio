import HomeHero from "../components/UI/HomeHero";
import ProjectTile from "../components/UI/ProjectTile";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <HomeHero />
      <ProjectTile />
    </Fragment>
  );
}

export default HomePage;
