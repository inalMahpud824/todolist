import { Button, IconButton, Typography } from "@mui/material";
import { DeleteOutline, EditNote } from "@mui/icons-material";
import HeaderBar from "../components/Navbar";
import { useEffect, useState } from "react";
import FormDialog from "../components/fragments/ActivityForm";
import { deleteActivity, getAllActivity } from "../modules/fetch";
import getToken from "../hooks/getToken";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [userId, setUserId] = useState(null);
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const handleFormDialog = (activity = null) => {
    setSelectedActivity(activity);
    setOpenFormDialog(!openFormDialog);
  };
  const handleDeleteActivity = async (id) => {
    try {
      await deleteActivity(id);
      getDataActivities();
    } catch (err) {
      console.log(err);
    }
  };
  const getDataActivities = async () => {
    try {
      const response = await getAllActivity(userId);
      setActivities(response.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataActivities();
  }, [openFormDialog]);

  useEffect(() => {
    const decodeToken = getToken();
    setUserId(decodeToken.id);
    if (userId) {
      getDataActivities();
    }
  }, []);
  return (
    <>
      <HeaderBar />

      <div className="flex justify-between mx-6 mb-7">
        <h1 className="text-2xl font-semibold ">Aktivity</h1>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#42a5f5" }}
          onClick={() => handleFormDialog(false)}
        >
          <Typography fontWeight="bold">+ Tambah</Typography>
        </Button>
      </div>
      <div className="flex items-center flex-wrap gap-4 px-4">
        {activities &&
          activities.map((activity) => (
            <div key={activity.id} className="w-full p-4 rounded-md shadow-md hover:bg-slate-200 cursor-pointer active:bg-slate-100 transition-colors duration-300 ease-in-out lg:w-[18.5rem] ">
                <Link to={`/home/activity/${activity.id}`}>
                <h1 className="text-xl font-semibold hover:text-blue-700 hover:underline hover:text-2xl">{activity.title}</h1>
                </Link>
                <div className="flex justify-end">
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteActivity(activity.id)}
                    sx={{ ":hover": { backgroundColor: "lightsalmon" } }}
                  >
                    <DeleteOutline />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleFormDialog(activity)}
                    sx={{ ":hover": { backgroundColor: "lightblue" } }}
                  >
                    <EditNote />
                  </IconButton>
                </div>
              </div>
          ))}
      </div>
      {openFormDialog && (
        <FormDialog onClose={handleFormDialog} activity={selectedActivity} />
      )}
    </>
  );
};

export default HomePage;
