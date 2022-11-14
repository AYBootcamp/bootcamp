import React from "react";

import { NumberInput, SectionTitle } from "../sharedComponents";

const BillSection = () => {
  return (
    <section>
      <SectionTitle title="Bill" />
      <NumberInput />
    </section>
  );
};

export default BillSection;
