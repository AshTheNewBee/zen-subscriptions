import Enzyme, { shallow } from "enzyme";
import { ZenLabel } from "./ZenLabel";

describe("Unit testing Input", () => {
  it("should display ZenLabel with given value", () => {
    const props = {
      _id: "ZenLabel",
      label: "label",
    };
    const wrapper = shallow(<ZenLabel {...props} />);
    expect(wrapper.find("#ZenLabel").length).toBe(1);
    expect(wrapper.find("#ZenLabel").text()).toEqual("label");
  });
});
