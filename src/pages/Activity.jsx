import {
  Button,
  Checkbox,
  CircularProgress,
  IconButton,
  Typography,
} from "@mui/material";
import HeaderBar from "../components/Navbar";
import { useEffect, useState } from "react";
import {
  deleteItem,
  getActivityById,
  getAllItems,
  updateItem,
} from "../modules/fetch";
import { DeleteOutline, EditNote, ArrowBackIosNew } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import getToken from "../hooks/getToken";
import FormDialogItem from "../components/fragments/ItemForm";

const ActivityPage = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState(null);
  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [items, setItems] = useState([]);
  const [activity, setActivity] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormDialog = (item = null) => {
    setSelectedItem(item);
    setOpenFormDialog(!openFormDialog);
  };

  const handleCheckBox = async (itemId, activityId, title, isActive) => {
    try {
      setLoading(true)
      await updateItem(itemId, activityId, title, !isActive);
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, isActive: !isActive } : item
      )
      );
    setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const handelDeleteItem = async (itemId) => {
    try {
      setLoading(true)
      await deleteItem(itemId);
      getDataItems(id);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  const getDataItems = async (id) => {
    try {
      setLoading(true)
      const response = await getAllItems(id);
      setItems(response.result);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };
  const getActivity = async (id) => {
    try {
      const response = await getActivityById(id);
      setActivity(response.result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataItems(id);
  }, [openFormDialog]);

  useEffect(() => {
    if (id) {
      getActivity(id);
      const decodeToken = getToken();
      setUserId(decodeToken.id);
      if (userId) {
        getDataItems(id);
      }
    }
  }, []);
  return (
    <>
      <HeaderBar />

      <div className="flex justify-between mx-6 mb-7">
        <div className="flex items-center">
          <Link to="/home">
            <IconButton>
              <ArrowBackIosNew />
            </IconButton>
          </Link>
          {activity && (
            <h1 className="text-2xl font-semibold ">{activity.title}</h1>
          )}
        </div>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#42a5f5" }}
          onClick={() => handleFormDialog(false)}
        >
          <Typography fontWeight="bold">+ Tambah</Typography>
        </Button>
      </div>
      <div className="mx-auto w-[70%] p-0">
        {loading ? (
          <div className="min-h-screen flex w-full items-center justify-center">
            <CircularProgress />
          </div>
        ) : (
          items &&
          items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between w-full rounded-md shadow-md py-3 px-2 my-3"
            >
              <div className="flex items-center">
                <Checkbox
                  checked={item.isActive ? false : true}
                  onClick={() =>
                    handleCheckBox(
                      item.id,
                      item.activity_id,
                      item.title,
                      item.isActive
                    )
                  }
                />
                <h1
                  className={`text-xl font-semibold ${
                    item.isActive ? "" : "line-through"
                  }`}
                >
                  {item.title}
                </h1>
              </div>
              <div className="flex items-center">
                <IconButton
                  color="error"
                  onClick={() => handelDeleteItem(item.id)}
                  sx={{ ":hover": { backgroundColor: "lightsalmon" } }}
                >
                  <DeleteOutline />
                </IconButton>
                <IconButton
                  color="primary"
                  onClick={() => handleFormDialog(item)}
                  sx={{ ":hover": { backgroundColor: "lightblue" } }}
                >
                  <EditNote />
                </IconButton>
              </div>
            </div>
          ))
        )}
      </div>
      {openFormDialog && (
        <FormDialogItem onClose={handleFormDialog} item={selectedItem} />
      )}
    </>
  );
};

export default ActivityPage;
