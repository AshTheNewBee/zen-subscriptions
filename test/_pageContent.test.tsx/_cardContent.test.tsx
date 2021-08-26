import { mount, shallow } from "enzyme";
import { CardContent } from "../../pageComponents/_cardContent";

const _context = require("../../utils/_context");

describe("Unit testing current plan card content", () => {
  let usePlanMock = {
    subscription: { plan: "Good", seats: 5, price: 50 },
    setSubscription: jest.fn(),
    prevSubscription: { plan: "Good", seats: 5, price: 50 },
    setPrevSubscription: jest.fn(),
  };
  beforeEach(() => {
    jest.spyOn(_context, "usePlan").mockImplementation(() => usePlanMock);
  });
  it("should display the drop down for plan", () => {
    const wrapper = shallow(<CardContent setError={jest.fn()} />);
    expect(wrapper.find("ZenSelect").length).toBe(1);
  });

  it("should display the input box for # of seats", () => {
    const wrapper = shallow(<CardContent setError={jest.fn()} />);
    expect(wrapper.find("ZenInput").length).toBe(1);
  });

  it("should call handleSeatChange when changing the seats", () => {
    const wrapper = shallow(<CardContent setError={jest.fn()} />);

    wrapper.find("ZenInput").simulate("change", {
      target: {
        value: 123,
      },
    });
  });
});
