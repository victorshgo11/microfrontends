import React from "react";

/* Styles */
import * as Styled from "./styles";

export function Links({ children, ...args }: { children: React.ReactNode }) {
  return <Styled.Links {...args}>{children}</Styled.Links>;
}
