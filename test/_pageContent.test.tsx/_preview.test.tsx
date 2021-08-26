import { mount, shallow } from "enzyme";
import { PreviewPage, Content } from "../../pageComponents";

const _context = require("../../utils/_context");

let usePlanMock = {
  subscription: { plan: "Good", seats: 5, price: 50 },
  setSubscription: jest.fn(),
  prevSubscription: { plan: "Good", seats: 5, price: 50 },
  setPrevSubscription: jest.fn(),
};

let updatedPlanMock = {
  subscription: { plan: "Good", seats: 5, price: 50 },
  prevSubscription: { plan: "better", seats: 15, price: 5000 },
  setSubscription: jest.fn(),
  setPrevSubscription: jest.fn(),
};
const plan = { plan: "Good", seats: 5, price: 50 };

describe("Unit testing preview page", () => {
  beforeEach(() => {
    jest.spyOn(_context, "usePlan").mockImplementation(() => usePlanMock);
  });
  it("should display the PreviewPage", () => {
    const wrapper = shallow(<PreviewPage />);
    expect(wrapper.find("#subscriptions").length).toBe(1);
  });

  it("should display the colums for previouse and current subscriptions", () => {
    const wrapper = shallow(<PreviewPage />);
    expect(wrapper.find("ZenColumn").length).toBe(2);
  });

  it("should display Back button", () => {
    const wrapper = shallow(<PreviewPage />);
    expect(wrapper.find("ZenButton").length).toBe(1);
  });
});

describe("Unit testing preview page content", () => {
  const plan = { plan: "Good", seats: 5, price: 50 };
  it("should display previouse and current row contents", () => {
    const wrapper = shallow(<Content plan={usePlanMock} update={false} />);

    expect(wrapper.find("#subscription").length).toBe(1);
    expect(wrapper.find("#prevSubscription").length).toBe(1);
  });

  it("should display the titles", () => {
    const wrapper = shallow(<Content plan={plan} update={false} />);
    expect(wrapper.find("#plan").text()).toEqual("plan");
    expect(wrapper.find("#seats").text()).toEqual("seats");
    expect(wrapper.find("#price").text()).toEqual("price");
  });

  it("should display the the values for the titles", () => {
    const plan = { plan: "Good", seats: 5, price: 50 };
    const wrapper = shallow(<Content plan={plan} update={false} />);

    expect(wrapper.find("#value_plan").text()).toEqual("Good");
    expect(wrapper.find("#value_seats").text()).toEqual("5");
    expect(wrapper.find("#value_price").text()).toEqual("50");
  });
});
