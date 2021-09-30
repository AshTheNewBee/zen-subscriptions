import React, { useState, useEffect, useMemo } from "react";
import { ZenH2, ErrHeading, ZenCard, ZenButton } from "../view";
import { FetchData, UpdateData, Plan } from "../controller";
import { ToggleRenderProvider, usePlan, useRenderer } from "../utils";
import { CardContent, PreviewPage } from "../pageComponents";
import CurrencySelector from "../pageComponents/_currencySelector";
import styles from "../styles/CurrentPlan.module.scss";

const RenderPages = (): JSX.Element => {
  const [renderCurrentPage, setRenderPage] = useState(true);
  return (
    <ToggleRenderProvider value={{ setRenderPage }}>
      {renderCurrentPage ? <CurrentPlan /> : <PreviewPage />}
    </ToggleRenderProvider>
  );
};

export const CurrentPlan = (): JSX.Element => {
  const { setRenderPage } = useRenderer();
  const [error, setError] = useState("");
  const [disableUpdate, setDisableUpdate] = useState(true);
  const {
    subscription,
    setSubscription,
    prevSubscription,
    setPrevSubscription,
  } = usePlan();

  useEffect(() => {
    FetchData(`api/current`).then((response: any) => {
      if (response.data) {
        const currentPlan = response.data;
        const initialSubsciption = {
          plan: currentPlan.plan,
          seats: currentPlan.seats,
          price: currentPlan.price,
        };
        setPrevSubscription(initialSubsciption);
        setSubscription(initialSubsciption);
      } else {
        console.error(response.error);
      }
    });
  }, []);

  useEffect(() => {
    if (prevSubscription && subscription?.price) {
      const isCostChanged = subscription.price === prevSubscription?.price;
      setDisableUpdate(isCostChanged);
    }
  }, [subscription]);

  const _updateData = () => {
    const toUpdate = {
      plan: subscription.plan,
      seats: subscription.seats,
    };
    UpdateData(`api/current`, toUpdate).then((res) => {
      setSubscription(res?.data);
    });
    setRenderPage(false);
  };

  return (
    <div className={styles.currentPlan} id="currentPlan">
      <ZenH2 _id="currentPlanHeading" heading="Subscription" />
      {/* it should display currncy drop dwn
       Curruncy */}
      <CurrencySelector />

      {subscription && (
        <>
          <ZenCard
            _id="currentPlanCard"
            content={<CardContent setError={setError} />}
          />
          <div id={styles.buttonSection}>
            <ZenButton
              _id="updatePlan"
              title="Update Subscription"
              action={() => {
                _updateData();
              }}
              disabled={disableUpdate}
            />
          </div>
        </>
      )}

      {error && <ErrHeading _id="error" heading={error} />}
    </div>
  );
};
export default RenderPages;
