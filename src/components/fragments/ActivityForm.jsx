import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { createActivity, updateActivity } from "../../modules/fetch";

function FormDialog({ onClose, activity = null }) {
  const [open, setOpen] = useState(true);
  const [activityValue, setActivityValue] = useState(
    activity ? activity.title : ""
  );

  useEffect(() => {
    if (activity) {
      setActivityValue(activity.title);
    }
  }, [activity]);

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
            const newActivity = formJson.activity;
            if (activity) {
              // Update activity
              await updateActivity(activity.id, newActivity);
            } else {
              // Create new activity
              await createActivity(newActivity);
            }
            handleClose();
          },
        }}
      >
        <DialogTitle>{activity ? 'Ubah Aktivitas': 'Tambah Data Aktivitas'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="activity"
            name="activity"
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
          <Button type="submit">{activity ? 'Ubah' : 'Tambah'}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FormDialog;
