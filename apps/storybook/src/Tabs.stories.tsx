import React, { useState } from "react";
import type { StoryObj, StoryFn, Meta } from "@storybook/react";
import { Tabs } from "@rah/ui";

const TabBar = () => {
  const [location, setLocation] = useState("/");

  const isHome = location === "/";
  const isReadme = location === "/readme";

  const homeStyle = isHome ? "icon-home-black" : "icon-home";
  const readmeStyle = isReadme ? "icon-readme-black" : "icon-readme";

  return (
    <Tabs>
      <div
        className="w-80"
        onClick={() => setLocation("/")}
        onKeyDown={() => setLocation("/")}
      >
        <span className={homeStyle} />
        <span>Home</span>
      </div>
      <div
        onClick={() => setLocation("/readme")}
        onKeyDown={() => setLocation("/readme")}
      >
        <span className={readmeStyle} />
        <span>Readme</span>
      </div>
    </Tabs>
  );
};

export default {
  title: "UI/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export const Example: StoryObj = {
  render: function Render() {
    return <TabBar />;
  },
};
