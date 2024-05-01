import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function FlagPopup(props) {
 
  return (
    <>
      <Dialog
        open={props.flag}
        handler={props.handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        initialFocus={props.cancelButtonRef} 
        onClose={props.setFlag}
      >
        <DialogHeader>Oops...</DialogHeader>
        <DialogBody>
            We couldn't process your request. Please check your entries and try submitting the form again.
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="gray" onClick={props.handleOpen}>
            <span>Try Again</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}