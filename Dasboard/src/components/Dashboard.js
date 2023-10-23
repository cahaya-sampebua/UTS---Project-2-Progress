import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button, Modal } from "react-bootstrap";
import "./Dashboard.css";

const logout = () => {
  window.location.href = "/login";
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const staticData = [
        { no: 1, title: "Film 1", genre: "Action, Family, Adventure" },
        { no: 2, title: "Film 2", genre: "Drama, Comedy" },
        { no: 3, title: "Film 3", genre: "Horror" },
      ];
      setData(staticData);
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCreate = () => {
    // Mengosongkan nilai inputan
    setSearchTerm(""); // Mengosongkan nilai pencarian
  };

  const handleDelete = (no) => {
    setItemToDelete(data.find((item) => item.no === no));
    setShowDeleteConfirmationModal(true);
  };

  const handleDeleteConfirmation = () => {
    setData(data.filter((item) => item.no !== itemToDelete.no));
    setShowDeleteConfirmationModal(false);
  };

  const handleCloseDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(false);
  };

  const renderDeleteConfirmationModal = () => {
    return (
      <Modal
        show={showDeleteConfirmationModal}
        onHide={handleCloseDeleteConfirmationModal}
      >
        <Modal.Header closeButton>
          <Modal.Title>Konfirmasi Penghapusan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Apakah Anda yakin ingin menghapus item ini? Jika dihapus, maka tidak
          dapat di-undo.
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleCloseDeleteConfirmationModal}
          >
            Batal
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirmation}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <Container>
      <Navbar bg="white" variant="">
        <Container>
          <Navbar.Brand>Halo Admin</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="navbarNav">
            <Nav className="m-auto">
              {" "}
              {/* Use 'm-auto' class to center */}
              <Navbar.Brand>Dashboard</Navbar.Brand>
            </Nav>
            <Nav>
              <Nav.Link className="nav-link-logout" onClick={logout}>
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="dashboard">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Button onClick={handleCreate}>Create</Button>
        </div>
        <div className="table-container">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>No</th>
                <th>Judul Film</th>
                <th>Genre</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) =>
                  item.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => (
                  <tr key={item.no}>
                    <td>{item.no}</td>
                    <td>{item.title}</td>
                    <td>{item.genre}</td>
                    <td>
                      <Button variant="primary">Update</Button>
                      <Button
                        variant="danger"
                        onClick={() => handleDelete(item.no)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {renderDeleteConfirmationModal()}
    </Container>
  );
};

export default Dashboard;
