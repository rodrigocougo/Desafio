import React from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

const ConfirmModal = (props: {
  confirm: any;
  cancel: any;
  modal: any;
  setModal: any;
  title: string;
}) => {
  const { confirm, cancel, modal, setModal, title } = props;

  const toggleYes = () => {
    setModal(!modal);
    confirm();
  };
  const toggleNo = () => {
    setModal(!modal);
    cancel();
  };

  return (
    <React.Fragment>
      <Modal isOpen={modal} toggle={toggleNo} centered={true}>
        <ModalHeader toggle={toggleNo}>{title}</ModalHeader>
        <ModalFooter>
          <Button color="primary" onClick={toggleYes}>
            Sim
          </Button>{" "}
          <Button className="ml-2" color="secondary" onClick={toggleNo}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default ConfirmModal;
