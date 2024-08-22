import React from "react";
import { Dialog } from "../Ui/Dialog";
import Button from "../Ui/Button";

function FilterDialog({
  setIsFilterDialogOpen,
  children,
  handleApplySort,
  clearFilter,
}) {
  return (
    <Dialog
      headerData={"Filters"}
      footerData={
        <FooterBtns
        handleApplySort={handleApplySort}
          clearFilter={clearFilter}
        />
      }
      onCloseModel={() => {
        setIsFilterDialogOpen(false);
      }}
    >
      {children}
    </Dialog>
  );
}

export default FilterDialog;

function FooterBtns({ handleApplySort, clearFilter }) {
  return (
    <>
      <Button
        onClick={clearFilter}
        className="bg-white text-zinc-500 hover:bg-zinc-200 mr-3"
      >
        Clear All
      </Button>
      <Button onClick={handleApplySort}>Apply</Button>
    </>
  );
}
