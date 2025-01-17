import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { CCProviders } from "@components/atoms";
import { CreditCardTile } from ".";

const onEdit = action("onEdit called");
const onRemove = action("onRemove called");

const visa: CCProviders = "visa";

const DEFAULT_PROPS = {
  expirationDate: "05/2019",
  last4Digits: 9876,
  nameOnCard: "John Doe",
  onEdit,
  onRemove,
  provider: visa,
};

storiesOf(`@components/molecules/CreditCardTile`, module).add("default", () => (
  <CreditCardTile {...DEFAULT_PROPS} />
));
