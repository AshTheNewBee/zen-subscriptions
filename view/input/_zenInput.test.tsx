import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ZenInput } from "./ZenInput";

Enzyme.configure({ adapter: new Adapter() });

describe("Unit testing Input", () => {
  it("should display ZenInput with given value", () => {
    const props = {
      _id: "ZenInput",
      value: "hello",
    };
    const wrapper = shallow(<ZenInput {...props} />);
    expect(wrapper.find("#ZenInput").length).toBe(1);
    expect(wrapper.find("#ZenInput").props().value).toEqual("hello");
  });
});
