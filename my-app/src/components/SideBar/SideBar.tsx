import { Drawer } from "@mui/material";
import React from "react";

const SideBar = () => {
  return (
    <>
      <Drawer
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
      />
    </>
  );
};

export default SideBar;
