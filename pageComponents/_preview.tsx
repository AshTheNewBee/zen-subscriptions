import React, { useState, useEffect, useMemo } from "react";
import { usePlan, useRenderer } from "../utils";
import { FetchData } from "../controller";
import { ZenColumn, ZenButton } from "../view";

import styles from "../styles/Preview.module.scss";

export const PreviewPage = () => {
  const [subscription, setPrviewSubscription] = useState({});
  const { prevSubscription, setSubscription } = usePlan();
  const { setRenderPage } = useRenderer();

  useEffect(() => {
    FetchData(`api/preview`).then((response: any) => {
      setPrviewSubscription(response?.data);
    });
  }, []);
  return (
    <div id={`subscriptions`} className={styles.donePage}>
      {subscription && prevSubscription && (
        <>
          <ZenColumn
            _id="preview"
            heading="Previous Subscription"
            rows={<Content plan={prevSubscription} />}
          />
          <ZenColumn
            _id="preview"
            heading="Updated Subscription"
            rows={<Content plan={subscription} update={true} />}
          />
        </>
      )}

      <div id={styles.buttonSection}>
        <a href="/currentPlan">
          <ZenButton
            _id="updatePlan"
            title="Back"
            action={() => {
              //setRenderPage(true);
            }}
          />
        </a>
      </div>
    </div>
  );
};

interface Card {
  plan: any;
  className?: string;
  update?: boolean;
}

export const Content = ({ plan, update = false }: Card) => {
  const { prevSubscription } = usePlan();
  return (
    <>
      {Object.keys(plan).map((key) => {
        const updated = update && prevSubscription[key] !== plan[key];
        return (
          <div className={styles.row} key={key}>
            <span id={key} className={styles.label}>
              {key}
            </span>

            <span
              className={`${styles.value} ${styles[`updated_${updated}`]}`} //
              id={`value_${key}`}
            >
              {plan[key]}
            </span>
          </div>
        );
      })}
    </>
  );
};

export default PreviewPage;
