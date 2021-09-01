import React from "react";
import { Paragraph } from "./styled";
import { default as NextLink } from "next/link";

export default function TesisParagraph({ text }) {
  return (
    <Paragraph>
        {text}
    </Paragraph>
  );
}
