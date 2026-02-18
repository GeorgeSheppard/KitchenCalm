import { useState } from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  IRecipe,
  IRecipeIngredient,
  IInstruction,
  IRecipeComponent,
} from "../../../../../core/types/recipes";
import { Quantities } from "../../../../../core/recipes/units";

// ----- Sub-components -----

const ServingsBadge = ({ servings }: { servings: number }) => (
  <Tooltip title={`Serves ${servings}`}>
    <span className="inline-flex items-center gap-0.5 rounded-full bg-[#e8f5e9] px-2 py-0.5 text-xs font-medium text-[#2e7d32]">
      <PersonIcon sx={{ fontSize: 14 }} />
      {servings}
    </span>
  </Tooltip>
);

const StoreableBadge = ({ storeable }: { storeable?: boolean }) => (
  <Tooltip title={storeable ? "Can be stored" : "Can't be stored"}>
    <span
      className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-medium ${
        storeable
          ? "bg-[#fff3e0] text-[#e65100]"
          : "bg-[#f5f5f5] text-[#9e9e9e]"
      }`}
    >
      <InventoryIcon sx={{ fontSize: 14 }} />
      {storeable ? "Storeable" : "Fresh"}
    </span>
  </Tooltip>
);

const IngredientsListV2 = ({
  ingredients,
}: {
  ingredients: IRecipeIngredient[];
}) => (
  <div>
    <p className="text-xs font-semibold uppercase tracking-wider text-[#207d39] mb-2">
      Ingredients
    </p>
    <ul className="space-y-1.5">
      {ingredients.map(({ name, quantity }) => (
        <li key={name} className="flex items-start gap-2 text-sm text-[#424242]">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#207d39] opacity-60" />
          <span>{Quantities.toStringWithIngredient(name, quantity)}</span>
        </li>
      ))}
    </ul>
  </div>
);

const InstructionsListV2 = ({
  instructions,
}: {
  instructions: IInstruction[];
}) => {
  if (instructions.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-[#207d39] mb-2">
        Instructions
      </p>
      <ol className="space-y-2">
        {instructions.map(({ text, optional }, index) => (
          <li key={text} className="flex items-start gap-3 text-sm text-[#424242]">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8f5e9] text-xs font-semibold text-[#207d39]">
              {index + 1}
            </span>
            <span>
              {optional && (
                <span className="mr-1 text-xs font-medium text-[#9e9e9e]">
                  (Optional)
                </span>
              )}
              {text}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

const ComponentSection = ({
  component,
  isPreview,
  defaultExpanded = false,
}: {
  component: IRecipeComponent;
  isPreview: boolean;
  defaultExpanded?: boolean;
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <div className="rounded-lg border border-[#e0e0e0] bg-[#fafafa] overflow-hidden">
      <button
        onClick={(e) => {
          e.stopPropagation();
          if (!isPreview) setExpanded(!expanded);
        }}
        className={`flex w-full items-center justify-between px-4 py-3 text-left ${
          !isPreview ? "hover:bg-[#f0f0f0] cursor-pointer" : ""
        } transition-colors`}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-[#333333]">
            {component.name}
          </span>
          <div className="flex items-center gap-1.5">
            {component.servings && (
              <ServingsBadge servings={component.servings} />
            )}
            <StoreableBadge storeable={component.storeable} />
          </div>
        </div>
        {!isPreview && (
          <span className="text-[#9e9e9e] ml-2">
            {expanded ? (
              <ExpandLessIcon fontSize="small" />
            ) : (
              <ExpandMoreIcon fontSize="small" />
            )}
          </span>
        )}
      </button>

      {!isPreview && expanded && (
        <div className="px-4 pb-4 space-y-4 border-t border-[#e0e0e0]">
          <div className="pt-3" />
          <IngredientsListV2 ingredients={component.ingredients} />
          {component.instructions.length > 0 && (
            <InstructionsListV2 instructions={component.instructions} />
          )}
        </div>
      )}
    </div>
  );
};

// ----- Main Card -----

export interface IRecipeCardV2Props {
  recipe: IRecipe;
  isPreview: boolean;
  imageSrc?: string;
  onClick?: () => void;
}

export const RecipeCardV2 = ({
  recipe,
  isPreview,
  imageSrc,
  onClick,
}: IRecipeCardV2Props) => {
  return (
    <div
      onClick={onClick}
      className={`group overflow-hidden rounded-xl bg-white shadow-sm border border-[#e8e8e8] transition-all duration-300 ${
        isPreview
          ? "hover:shadow-lg hover:border-[#207d39]/30 hover:-translate-y-0.5 cursor-pointer"
          : "shadow-md"
      }`}
    >
      {/* Image */}
      {imageSrc && (
        <div className="relative overflow-hidden">
          <img
            src={imageSrc}
            alt={recipe.name}
            className={`w-full object-cover ${
              isPreview ? "h-40" : "h-56"
            } transition-transform duration-500 group-hover:scale-105`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <h3
            className={`font-semibold text-[#1a1a1a] leading-tight text-balance ${
              isPreview ? "text-base" : "text-lg"
            }`}
          >
            {recipe.name}
          </h3>
        </div>

        {/* Description */}
        {recipe.description?.length > 0 && (
          <p
            className={`text-sm leading-relaxed text-[#666666] ${
              isPreview ? "line-clamp-2" : ""
            }`}
          >
            {recipe.description}
          </p>
        )}

        {/* Component sections */}
        <div className="space-y-2 pt-1">
          {recipe.components.map((component, index) => (
            <ComponentSection
              key={component.uuid}
              component={component}
              isPreview={isPreview}
              defaultExpanded={!isPreview && index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
