import React, { createContext, useContext } from "react";
export interface Plan {
  subscription?: any;
  setSubscription?: any;
  prevSubscription?: any;
  setPrevSubscription?: any;
}

export interface RenderType {
  setRenderPage?: any;
  renderCurrentPage?: any;
}

export const PlanContext = createContext({});
export const PlanProvider = PlanContext.Provider;
export const usePlan = () => useContext<Plan>(PlanContext);

export const ToggleRenderContext = createContext({});
export const ToggleRenderProvider = ToggleRenderContext.Provider;
export const useRenderer = () => useContext<RenderType>(ToggleRenderContext);
