import React, { useState, useEffect, useMemo } from "react";
import { PlanProvider, usePlan, validateNumberInput } from "../utils";
import { ZenSelect, ZenInput, ZenLabel } from "../view";
import { PlanDetails, PLAN_NAMES } from "../controller";
import styles from "../styles/CurrentPlan.module.scss";

interface Card {
  setError: (value: string) => void;
}
export function CardContent({ setError }: Card): JSX.Element {
  const { setSubscription, subscription } = usePlan();
  const { seats, plan } = subscription;

  useEffect(() => {
    const cost = seats * PlanDetails[plan]?.price;
    setSubscription({
      ...subscription,
      price: cost,
    });
  }, [subscription?.seats, subscription?.plan]);

  const handleSeatChange = (value: any) => {
    const validInput = validateNumberInput(value);
    if (validInput) {
      setSubscription({
        ...subscription,
        seats: value,
      });
      setError("");
    } else {
      setError("Invalid value");
    }
  };

  return (
    <>
      <ZenSelect
        _id="editPlan"
        defaultVal={plan}
        options={Object.values(PLAN_NAMES)}
        label="Plan"
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSubscription({
            ...subscription,
            plan: e.target.value,
          });
        }}
      />
      <ZenInput
        _id="editSeats"
        inputId="editSeatsInput"
        label="Seats"
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleSeatChange(e.target.value);
        }}
        value={subscription.seats}
      />
      <div className={styles.cost}>
        <div id={styles.costValue}> {`$${subscription.price}`}</div>
        <ZenLabel _id="costLabel" label="Price" />
      </div>
    </>
  );
}
