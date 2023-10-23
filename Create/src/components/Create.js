import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";
import FormCheck from "react-bootstrap/FormCheck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [director, setDirector] = useState("");
  const [rating, setRating] = useState("");
  const [cast, setCast] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [duration, setDuration] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState([]);

  const handleGenreChange = (e) => {
    const { value } = e.target;
    if (genre.includes(value)) {
      setGenre(genre.filter((g) => g !== value));
    } else {
      setGenre([...genre, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                <a id="back-button" className="navbar-brand" href="/">
                  Kembali
                </a>
                <span className="navbar-text">Create</span>
                <a id="exit-button" className="navbar-brand" href="/">
                  Keluar
                </a>
              </div>
            </nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3">
                <FormLabel for="name">Nama Film</FormLabel>
                <FormControl
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel>Genre</FormLabel>
                <div>
                  <FormCheck>
                    <FormCheck.Input
                      type="checkbox"
                      value="Fantasy"
                      checked={genre.includes("Fantasy")}
                      onChange={handleGenreChange}
                    />
                    <FormCheck.Label>Fantasy</FormCheck.Label>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck>
                    <FormCheck.Input
                      type="checkbox"
                      value="Adventure"
                      checked={genre.includes("Adventure")}
                      onChange={handleGenreChange}
                    />
                    <FormCheck.Label>Adventure</FormCheck.Label>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck>
                    <FormCheck.Input
                      type="checkbox"
                      value="Family"
                      checked={genre.includes("Family")}
                      onChange={handleGenreChange}
                    />
                    <FormCheck.Label>Family</FormCheck.Label>
                  </FormCheck>
                </div>
                <div>
                  <FormCheck>
                    <FormCheck.Input
                      type="checkbox"
                      value="Horror"
                      checked={genre.includes("Horror")}
                      onChange={handleGenreChange}
                    />
                    <FormCheck.Label>Horror</FormCheck.Label>
                  </FormCheck>
                </div>
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel for="country">Negara</FormLabel>
                <FormControl
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel for="director">Sutradara</FormLabel>
                <FormControl
                  type="text"
                  id="director"
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel for="rating">Rating</FormLabel>
                <FormControl
                  type="number"
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel for="cast">Bintang Film</FormLabel>
                <FormControl
                  type="text"
                  id="cast"
                  value={cast}
                  onChange={(e) => setCast(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel for="releaseDate">Diterbitkan</FormLabel>
                <FormControl
                  type="date"
                  id="releaseDate"
                  value={releaseDate}
                  onChange={(e) => setReleaseDate(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel for="duration">Durasi</FormLabel>
                <FormControl
                  type="text"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel for="synopsis">Sinopsis</FormLabel>
                <FormControl
                  as="textarea"
                  id="synopsis"
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel for="image">Gambar</FormLabel>
                <FormControl
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </FormGroup>
              <Button type="submit" className="mt-3">
                Create
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Create;
