import React from "react";

import SideBarLeft from "./sidebars/SideBarLeft";
import SideBarRight from "./sidebars/SideBarRight";
import Content from "./content/Content";
import Layout from "./ui/search/Layout";

function HomePage() {
  return (
    <Layout>
      <main className="main_container">
        <SideBarLeft />
        <Content />
        <SideBarRight />
      </main>
    </Layout>
  );
}

export default HomePage;
