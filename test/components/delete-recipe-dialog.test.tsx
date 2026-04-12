/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DeleteRecipeDialog } from "../../components/delete-recipe-dialog";
import { useDeleteRecipeFromDynamo } from "../../core/dynamo/hooks/use_dynamo_delete";
import { IRecipe } from "../../core/types/recipes";

// Mock the delete hook — we only care that mutateAsync is called
jest.mock("../../core/dynamo/hooks/use_dynamo_delete");

// Mock the Radix-based Dialog to plain HTML so jsdom doesn't need browser APIs
jest.mock("@/components/ui/dialog", () => {
  const React = require("react");
  return {
    Dialog: ({ children, open }: { children: React.ReactNode; open: boolean }) =>
      open ? React.createElement("div", { "data-testid": "dialog" }, children) : null,
    DialogContent: ({ children }: { children: React.ReactNode }) =>
      React.createElement("div", null, children),
    DialogHeader: ({ children }: { children: React.ReactNode }) =>
      React.createElement("div", null, children),
    DialogTitle: ({ children }: { children: React.ReactNode }) =>
      React.createElement("div", null, children),
    DialogDescription: ({ children }: { children: React.ReactNode }) =>
      React.createElement("div", null, children),
    DialogFooter: ({ children }: { children: React.ReactNode }) =>
      React.createElement("div", null, children),
  };
});

const mockMutateAsync = jest.fn();

const recipe: IRecipe = {
  uuid: "test-uuid-123",
  name: "Pasta Bolognese",
  description: "",
  images: [],
  components: [],
};

beforeEach(() => {
  jest.clearAllMocks();
  (useDeleteRecipeFromDynamo as jest.Mock).mockReturnValue({
    mutateAsync: mockMutateAsync,
    isLoading: false,
  });
  mockMutateAsync.mockResolvedValue({});
});

describe("DeleteRecipeDialog", () => {
  it("calls mutateAsync with the recipe uuid when Delete is clicked", async () => {
    render(
      <DeleteRecipeDialog
        recipe={recipe}
        open={true}
        onOpenChange={jest.fn()}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /^delete$/i }));

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalledWith("test-uuid-123");
    });
  });

  it("does not call mutateAsync when Cancel is clicked", () => {
    render(
      <DeleteRecipeDialog
        recipe={recipe}
        open={true}
        onOpenChange={jest.fn()}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));

    expect(mockMutateAsync).not.toHaveBeenCalled();
  });

  it("does not render when open is false", () => {
    render(
      <DeleteRecipeDialog
        recipe={recipe}
        open={false}
        onOpenChange={jest.fn()}
      />
    );

    expect(screen.queryByTestId("dialog")).toBeNull();
  });

  it("calls onDeleted callback after successful deletion", async () => {
    const onDeleted = jest.fn();

    render(
      <DeleteRecipeDialog
        recipe={recipe}
        open={true}
        onOpenChange={jest.fn()}
        onDeleted={onDeleted}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /^delete$/i }));

    await waitFor(() => {
      expect(onDeleted).toHaveBeenCalled();
    });
  });
});
