import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ZenH2 } from "./ZenTypo";

Enzyme.configure({ adapter: new Adapter() });

describe("Unit testing Input", () => {
  it("should display ZenTypo with given value", () => {
    const props = {
      _id: "ZenTypo",
      heading: "hello",
    };
    const wrapper = shallow(<ZenH2 {...props} />);
    expect(wrapper.find("#ZenTypo").length).toBe(1);
    expect(wrapper.find("#ZenTypo").text()).toEqual("hello");
  });

  it("should display ZenTypo with given value", () => {
    const props = {
      _id: "ZenTypo",
      heading: "hello",
    };
    const wrapper = shallow(<ZenH2 {...props} />);
    expect(wrapper.find("#ZenTypo").length).toBe(1);
    expect(wrapper.find("#ZenTypo").text()).toEqual("hello");
  });
});
