import { shallow } from "enzyme";
import { ZenButton } from "./ZenButton";

describe("Unit testing Button", () => {
  it("should display zenBtn with given title", () => {
    const props = {
      _id: "zenBtn",
      title: "test",
    };
    const wrapper = shallow(<ZenButton {...props} />);
    expect(wrapper.find("#zenBtn").length).toBe(1);
    expect(wrapper.find("#zenBtn").text()).toEqual("test");
  });

  it("should call the onClickFn in onClick event", () => {
    const mockCallBack = jest.fn().mockReturnValueOnce("hello");
    const props = {
      _id: "zenBtn",
      title: "test",
      action: mockCallBack,
    };
    const wrapper = shallow(<ZenButton {...props} />);
    wrapper.find("#zenBtn").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
