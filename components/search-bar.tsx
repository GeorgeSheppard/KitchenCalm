import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { SearchableAttributes } from "../core/recipes/hooks/use_recipe_search";

interface SearchBarProps {
  searchString: string;
  onSearchChange: (value: string) => void;
  keys?: Set<SearchableAttributes>;
  onKeysChange?: (keys: Set<SearchableAttributes>) => void;
}

const FILTER_OPTIONS: { key: SearchableAttributes; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "description", label: "Description" },
  { key: "ingredients", label: "Ingredients" },
];

export function SearchBar({
  searchString,
  onSearchChange,
  keys,
  onKeysChange,
}: SearchBarProps) {
  const toggleKey = (key: SearchableAttributes) => {
    if (!keys || !onKeysChange) return;
    const next = new Set(keys);
    if (next.has(key)) {
      // Don't allow removing the last key
      if (next.size > 1) {
        next.delete(key);
      }
    } else {
      next.add(key);
    }
    onKeysChange(next);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search recipes..."
          value={searchString}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      {keys && onKeysChange && (
        <div className="flex gap-2">
          {FILTER_OPTIONS.map(({ key, label }) => (
            <Badge
              key={key}
              variant={keys.has(key) ? "default" : "secondary"}
              className="cursor-pointer select-none"
              onClick={() => toggleKey(key)}
            >
              {label}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
