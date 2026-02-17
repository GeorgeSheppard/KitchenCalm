import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tooltip from "@mui/material/Tooltip";
import { useIsMobileLayout } from "../../../../hooks/is_mobile_layout";

interface IShoppingListDialogProps {
  shoppingList: string;
  on: boolean;
  turnOff: () => void;
}

export const ShoppingListDialog = (props: IShoppingListDialogProps) => {
  const { shoppingList, on, turnOff } = props;

  const mobileLayout = useIsMobileLayout();

  return (
    <Dialog open={on} onClose={turnOff} fullScreen={mobileLayout}>
      <DialogTitle sx={{ minWidth: mobileLayout ? "0px" : "600px" }}>
        Shopping list
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{ whiteSpace: "pre-wrap", marginTop: "24px" }}>
          {shoppingList.length > 0
            ? shoppingList
            : "No shopping list available."}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={turnOff} color="error">
          Close
        </Button>
        <Tooltip
          title="Copied!"
          disableFocusListener
          disableHoverListener
          enterTouchDelay={500}
        >
          <Button onClick={() => navigator.clipboard.writeText(shoppingList)}>
            Copy to clipboard
          </Button>
        </Tooltip>
      </DialogActions>
    </Dialog>
  );
};
