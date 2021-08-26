import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ZenColumn, ZenRow } from "../../view";

Enzyme.configure({ adapter: new Adapter() });

describe("Unit testing Column", () => {
  it("should display zenColumn", () => {
    const props = {
      _id: "zenColumn",
    };
    const wrapper = shallow(<ZenColumn {...props} />);
    expect(wrapper.find("#zenColumn").length).toBe(1);
  });

  it("should display zenColumn with given heading", () => {
    const props = {
      _id: "zenColumn",
      heading: "heading",
    };
    const wrapper = shallow(<ZenColumn {...props} />);
    expect(wrapper.find("#zenColumn").text()).toEqual("heading");
  });

  it("should display all the rows", () => {
    const rows = <ZenRow _id="row" label="label" value="value" key="1" />;
    const props = {
      _id: "zenColumn",
      heading: "heading",
      rows,
    };
    const wrapper = shallow(<ZenColumn {...props} />);
    expect(wrapper.find("#row").length).toBe(1);
  });
});
