import React from "react";
import { render, screen } from "@testing-library/react-native";
import Header from "@/components/Header";
import { useWeather } from "@/hooks/useWeather";

jest.mock("@/hooks/useWeather");

describe("Header component", () => {
  it("renders current weather condition and temperature", () => {
    useWeather.mockReturnValue({
      currentCondition: "Sunny",
      currentTemperature: "25°C",
      isLoading: false,
    });

    render(<Header />);

    expect(screen.getByText("Sunny")).toBeTruthy();
    expect(screen.getByText("25°C")).toBeTruthy();
  });

  it("renders correctly with empty values", () => {
    useWeather.mockReturnValue({
      currentCondition: "Sunny",
      currentTemperature: "25°C",
      isLoading: true,
    });

    render(<Header />);

    expect(screen.queryByText("Sunny")).toBeNull();
  });
});
