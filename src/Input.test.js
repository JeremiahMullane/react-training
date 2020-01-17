import React from "react";
import Input from "./Input";
import { render } from "@testing-library/react";

describe("Input", () => {
  it("should tie the label to the input via htmlFor", () => {
    //arrange

    //act
    const { getByLabelText } = render(
      <Input
        id="test"
        type="text"
        onChange={() => {}}
        value="test"
        text="test"
      />
    );

    // assert that the label has a value of test.
    // getByLabelText("test");
  });
});
