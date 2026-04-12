import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DeleteRecipeDialog } from "../../components/delete-recipe-dialog";
import { useDeleteRecipeFromDynamo } from "../../core/dynamo/hooks/use_dynamo_delete";
import { IRecipe } from "../../core/types/recipes";

jest.mock("../../core/dynamo/hooks/use_dynamo_delete");

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
  jest.mocked(useDeleteRecipeFromDynamo).mockReturnValue({
    mutateAsync: mockMutateAsync,
    isLoading: false,
  } as unknown as ReturnType<typeof useDeleteRecipeFromDynamo>);
  mockMutateAsync.mockResolvedValue({});
});

describe("DeleteRecipeDialog", () => {
  it("calls mutateAsync with the recipe uuid when Delete is clicked", async () => {
    render(
      <DeleteRecipeDialog recipe={recipe} open={true} onOpenChange={jest.fn()} />
    );

    fireEvent.click(screen.getByRole("button", { name: /^delete$/i }));

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalledWith("test-uuid-123");
    });
  });

  it("does not call mutateAsync when Cancel is clicked", () => {
    render(
      <DeleteRecipeDialog recipe={recipe} open={true} onOpenChange={jest.fn()} />
    );

    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));

    expect(mockMutateAsync).not.toHaveBeenCalled();
  });

  it("does not render content when open is false", () => {
    render(
      <DeleteRecipeDialog recipe={recipe} open={false} onOpenChange={jest.fn()} />
    );

    expect(screen.queryByRole("button", { name: /^delete$/i })).toBeNull();
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
