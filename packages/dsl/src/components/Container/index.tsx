import React from "react";

/* Styles */
import * as Styled from "./styles";

export function Container({ children }: { children: React.ReactNode[] }) {
  return <Styled.Container>{children}</Styled.Container>;
}
