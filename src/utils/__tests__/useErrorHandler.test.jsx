import { renderHook, act } from "@testing-library/react";
import { useErrorHandler } from "../CustomHooks";

describe("useErrorHandler hook", () => {
  it("should start with no error", () => {
    const { result } = renderHook(() => useErrorHandler());
    expect(result.current.error).toBe(null);
  });

  it("should set error when handleError is called", () => {
    const { result } = renderHook(() => useErrorHandler());

    act(() => {
      result.current.handleError(new Error("Test error"));
    });

    expect(result.current.error).toEqual(new Error("Test error"));
  });

  it("should reset error when resetError is called", () => {
    const { result } = renderHook(() => useErrorHandler());

    act(() => {
      result.current.handleError(new Error("Some error"));
      result.current.resetError();
    });

    expect(result.current.error).toBe(null);
  });
});
