import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ZenRow } from "./ZenRow";

Enzyme.configure({ adapter: new Adapter() });

describe("Unit testing Column", () => {
  it("should display ZenRow", () => {
    const props = {
      _id: "ZenRow",
    };
    const wrapper = shallow(<ZenRow {...props} />);
    expect(wrapper.find(".ZenRow").length).toBe(1);
  });

  it("should display rows for the zenColumn", () => {
    const props = {
      _id: "ZenRow",
    };
    const wrapper = shallow(<ZenRow {...props} />);
    expect(wrapper.find("#row").length).toBe(1);
  });

  it("should display label and value span elements", () => {
    const props = {
      _id: "ZenRow",
    };
    const wrapper = shallow(<ZenRow {...props} />);
    expect(wrapper.find("#label").length).toBe(1);
    expect(wrapper.find("#value").length).toBe(1);
  });
});
