import React from "react";
import { render, screen } from "@testing-library/react-native";
import Text from "@/components/Text";
import { useTheme } from "@/hooks/useTheme";
import { DEFAULT_FONT_FAMILY } from "@/constants/fonts";

const TEST_ID = "text-component";

jest.mock("@/hooks/useTheme");

describe("Text component", () => {
  it("renders the text correctly", () => {
    render(<Text>Hello, world!</Text>);

    expect(screen.getByText("Hello, world!")).toBeTruthy();
  });

  it("applies the correct theme color", () => {
    useTheme.mockReturnValue("#ff0000");

    const { getByTestId } = render(<Text>Themed Text</Text>);
    const textElement = getByTestId(TEST_ID);

    expect(textElement.props.style).toEqual(
      expect.arrayContaining([{ color: "#ff0000" }])
    );
  });

  it("applies the default font family", () => {
    render(<Text>Styled Text</Text>);

    const textElement = screen.getByText("Styled Text");

    expect(textElement.props.style).toEqual(
      expect.arrayContaining([{ fontFamily: DEFAULT_FONT_FAMILY }])
    );
  });
});
