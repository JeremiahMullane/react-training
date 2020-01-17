import React from "react";
import { Heading, Banner, BannerItem } from "@athena/forge";

function Home() {
  return (
    <>
      <Heading text="Home"></Heading>
      <Banner>
        <BannerItem headerText="Welcome to your React CRUD App!">
          Use this App to manage a database of user info.
        </BannerItem>
      </Banner>
    </>
  );
}

export default Home;
