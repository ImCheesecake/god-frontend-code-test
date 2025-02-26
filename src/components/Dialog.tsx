import { useDialog } from "@volvo-cars/react-headless";
import { IconButton } from "@volvo-cars/react-icons";
import type { FC, ReactNode } from "react";

interface DialogProps {
  children: ReactNode;
}

const DIALOG_CLASSNAMES = {
  dialog: "dialog-small",
  closeButton: "Close purchase confirmation dialog",
  title: "font-20 font-medium pr-24",
  description: "sr-only",
  buttonGroup: "button-group my-m",
  button: "button-filled",
} as const;

const Dialog: FC<DialogProps> = ({ children }) => {
  const { dialogProps, showDialog, closeDialog } = useDialog();

  return (
    <>
      <div onClick={showDialog} role="button" tabIndex={0}>
        {children}
      </div>

      <dialog
        className={DIALOG_CLASSNAMES.dialog}
        {...dialogProps}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div slot="close">
          <IconButton
            aria-label={DIALOG_CLASSNAMES.closeButton}
            bleed
            icon="x"
            onClick={closeDialog}
            variant="clear"
          />
        </div>

        <article slot="main">
          <h2 className={DIALOG_CLASSNAMES.title} id="dialog-title">
            Thank you for your purchase!
          </h2>
          <p className={DIALOG_CLASSNAMES.description} id="dialog-description">
            Your purchase has been confirmed. Click continue to proceed.
          </p>

          <div className={DIALOG_CLASSNAMES.buttonGroup}>
            <button
              className={DIALOG_CLASSNAMES.button}
              onClick={closeDialog}
              type="submit"
              value="accept"
            >
              Continue
            </button>
          </div>
        </article>
      </dialog>
    </>
  );
};

export default Dialog;
