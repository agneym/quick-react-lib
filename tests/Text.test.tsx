import React from 'react';
import {render, screen} from '@testing-library/react'

import { Text } from "../lib/components";

test("Text", () => {
  const content = "Hello World";
  render(<Text as='p'>{content}</Text>);
  expect(screen.getByText(content)).toBeInTheDocument();
})