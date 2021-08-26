import { mount, shallow } from "enzyme";
import RenderPages, { CurrentPlan } from "../../pages/currentPlan";

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

describe("Unit testing current plan page", () => {
  beforeEach(() => {
    jest.spyOn(_context, "usePlan").mockImplementation(() => usePlanMock);
  });
  it("should display current page", () => {
    const wrapper = shallow(<CurrentPlan />);
    expect(wrapper.find("#currentPlan").length).toBe(1);
  });

  it("should display heading of the page", () => {
    const wrapper = shallow(<CurrentPlan />);
    expect(wrapper.find("ZenH2").length).toBe(1);
  });

  it("should display the card", () => {
    const wrapper = shallow(<CurrentPlan />);
    expect(wrapper.find("ZenButton").length).toBe(1);
  });

  it("should display update button", () => {
    const wrapper = shallow(<CurrentPlan />);
    expect(wrapper.find("ZenButton").length).toBe(1);
  });

  it("should disable the button if cost is same as previouse plan", () => {
    const wrapper = shallow(<CurrentPlan />);
    expect(wrapper.find("ZenButton").props().disabled).toEqual(true);
  });
});

// // describe("Unit testing update plan", () => {
// //   beforeEach(() => {
// //     jest.spyOn(_context, "usePlan").mockImplementation(() => updatedPlanMock);
// //   });

// //   it("should enable the button if cost is different to the previouse plan", () => {
// //     const wrapper = mount(<CurrentPlan />);
// //     console.log(wrapper.debug());
// //     expect(wrapper.find("ZenButton").props().disabled).toEqual(true);
// //   });
// // });

describe("Unit testing RenderPages", () => {
  it("should render current page if renderCurrentPage is true ", () => {
    const wrapper = shallow(<RenderPages />);
    expect(wrapper.find("CurrentPlan").length).toBe(1);
  });

  it("should render current page if PreviewPage is false ", () => {
    const wrapper = shallow(<RenderPages />);
    //expect(wrapper.find("PreviewPage").length).toBe(1);
  });
});
