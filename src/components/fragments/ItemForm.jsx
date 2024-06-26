import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createItem, updateItem } from "../../modules/fetch";
import { useParams } from "react-router-dom";

function FormDialogItem({ onClose, item = null }) {
  const [open, setOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [activityValue, setActivityValue] = useState(item ? item.title : "");

  useEffect(() => {
    if (item) {
      setActivityValue(item.title);
    }
  }, [item]);

  const handleClose = () => {
    setOpen(onClose);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          component: "form",
          onSubmit: async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const newItem = formJson.item;
            if (item) {
              setLoading(true)
              await updateItem(
                item.id,
                item.activity_id,
                newItem,
                item.isActive
                );
              setLoading(false)
            } else {
              setLoading(true)
              // Create new activity
              await createItem(id, newItem);
            setLoading(false)
              }
            handleClose();
          },
        }}
      >
        <DialogTitle>
          {item ? "Ubah Aktivitas" : "Tambah Data Aktivitas"}
        </DialogTitle>
        {loading ? (
          <div className="w-full flex justify-center p-7">
            <CircularProgress />
          </div>
        ) : (
          <>
            <DialogContent>
              <TextField
                autoFocus
                required
                margin="dense"
                id="item"
                name="item"
                label="Aktivitas"
                type="text"
                fullWidth
                variant="standard"
                value={activityValue}
                onChange={(e) => setActivityValue(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">{item ? "Ubah" : "Tambah"}</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </>
  );
}

export default FormDialogItem;
