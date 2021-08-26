import { shallow } from "enzyme";

import { ZenSelect } from "./ZenSelect";

describe("Unit testing Select", () => {
  const props = {
    _id: "wrapper",
    options: ["optionA", "optionB"],
    handleChange: jest.fn,
  };
  it("should display zenSelect", () => {
    const wrapper = shallow(<ZenSelect {...props} />);
    expect(wrapper.find("#wrapper").length).toBe(1);
    expect(wrapper.find(".select").length).toBe(1);
  });

  it("should display options for the select", () => {
    const wrapper = shallow(<ZenSelect {...props} />);
    expect(wrapper.find("#optionA").length).toBe(1);
    expect(wrapper.find("#optionB").length).toBe(1);
  });

  it("should display the label", () => {
    const wrapper = shallow(<ZenSelect {...props} />);
    expect(wrapper.find("#label").length).toBe(1);
  });
});
