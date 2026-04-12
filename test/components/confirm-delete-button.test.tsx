import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ConfirmDeleteButton } from "../../components/confirm-delete-button";

describe("ConfirmDeleteButton", () => {
  it("initially renders a Delete button", () => {
    render(<ConfirmDeleteButton onDelete={jest.fn()} />);
    expect(screen.getByRole("button", { name: /^delete$/i })).toBeTruthy();
  });

  it("shows 'Are you sure?' after clicking Delete", () => {
    render(<ConfirmDeleteButton onDelete={jest.fn()} />);
    fireEvent.click(screen.getByRole("button", { name: /^delete$/i }));
    expect(screen.getByRole("button", { name: /are you sure\?/i })).toBeTruthy();
  });

  it("calls onDelete when 'Are you sure?' is clicked", async () => {
    const onDelete = jest.fn().mockResolvedValue(undefined);
    render(<ConfirmDeleteButton onDelete={onDelete} />);

    fireEvent.click(screen.getByRole("button", { name: /^delete$/i }));
    fireEvent.click(screen.getByRole("button", { name: /are you sure\?/i }));

    await waitFor(() => {
      expect(onDelete).toHaveBeenCalledTimes(1);
    });
  });

  it("shows 'Deleting...' while onDelete is pending", async () => {
    let resolve: () => void;
    const onDelete = jest.fn().mockImplementation(
      () => new Promise<void>((res) => { resolve = res; })
    );

    render(<ConfirmDeleteButton onDelete={onDelete} />);

    fireEvent.click(screen.getByRole("button", { name: /^delete$/i }));
    fireEvent.click(screen.getByRole("button", { name: /are you sure\?/i }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /deleting\.\.\./i })).toBeTruthy();
    });

    resolve!();
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: /deleting\.\.\./i })).toBeNull();
    });
  });

  it("is disabled while deleting", async () => {
    let resolve: () => void;
    const onDelete = jest.fn().mockImplementation(
      () => new Promise<void>((res) => { resolve = res; })
    );

    render(<ConfirmDeleteButton onDelete={onDelete} />);

    fireEvent.click(screen.getByRole("button", { name: /^delete$/i }));
    fireEvent.click(screen.getByRole("button", { name: /are you sure\?/i }));

    await waitFor(() => {
      const button = screen.getByRole("button", { name: /deleting\.\.\./i }) as HTMLButtonElement;
      expect(button.disabled).toBe(true);
    });

    resolve!();
  });

  it("is disabled when disabled prop is true", () => {
    render(<ConfirmDeleteButton onDelete={jest.fn()} disabled />);
    const button = screen.getByRole("button", { name: /^delete$/i }) as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it("does not call onDelete without the confirmation click", () => {
    const onDelete = jest.fn();
    render(<ConfirmDeleteButton onDelete={onDelete} />);
    expect(onDelete).not.toHaveBeenCalled();
  });
});
