import React from "react";
import { render } from "@testing-library/react-native";
import View from "@/components/View";
import { useTheme } from "@/hooks/useTheme";

const TEST_ID = "view-component";

jest.mock("@/hooks/useTheme");

describe("View component", () => {
  it("renders correctly with the themed background color", () => {
    useTheme.mockReturnValue("#ffffff");

    const { getByTestId } = render(<View />);

    const viewElement = getByTestId(TEST_ID);

    expect(viewElement.props.style).toEqual(
      expect.arrayContaining([{ backgroundColor: "#ffffff" }])
    );
  });

  it("applies additional styles correctly", () => {
    useTheme.mockReturnValue("#000000");

    const { getByTestId } = render(<View style={{ borderRadius: 20 }} />);

    const viewElement = getByTestId(TEST_ID);

    expect(viewElement.props.style).toEqual(
      expect.arrayContaining([
        { backgroundColor: "#000000" },
        { borderRadius: 20 },
      ])
    );
  });
});
