import { shallow } from "enzyme";
import { ZenCard } from "./ZenCard";

describe("Unit testing Card", () => {
  it("should display zenCard", () => {
    const props = {
      _id: "zenCard",
    };
    const wrapper = shallow(<ZenCard {...props} />);
    expect(wrapper.find("#zenCard").length).toBe(1);
  });

  it("should display zenCard content", () => {
    const props = {
      _id: "zenCard",
      content: <div id="_content" />,
    };
    const wrapper = shallow(<ZenCard {...props} />);
    expect(wrapper.find("#_content").length).toBe(1);
  });
});
