"use client";

import { useState } from "react";
import { PlusCircle } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormAddCar } from "./FormAddCar";

export const ButtonCardAdd = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <>
      <Dialog open={openDialog}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setOpenDialog(true)}>
            Add new card
            <PlusCircle className="h-5 w-5 ml-2" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <FormAddCar setOpenDialog={setOpenDialog} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};
