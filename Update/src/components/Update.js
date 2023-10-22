import React, { useState } from 'react';
import { Form, Button, FormGroup, Label, Input } from 'reactstrap';
import './Update.css';

const Update = () => {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [director, setDirector] = useState('');
  const [rating, setRating] = useState('');
  const [cast, setCast] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [duration, setDuration] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [image, setImage] = useState(null);

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
    // Perbarui data di database menggunakan API
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">Kembali</a>
          <span className="navbar-text">Update</span>
          <a className="navbar-brand" href="/">Keluar</a>
        </div>
      </nav>

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Nama Film</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label>Genre</Label>
          <div>
            <Label check>
              <Input
                type="checkbox"
                value="Fantasy"
                checked={genre.includes('Fantasy')}
                onChange={handleGenreChange}
              />{' '}
              Fantasy
            </Label>
          </div>
          <div>
            <Label check>
              <Input
                type="checkbox"
                value="Adventure"
                checked={genre.includes('Adventure')}
                onChange={handleGenreChange}
              />{' '}
              Adventure
            </Label>
          </div>
          <div>
            <Label check>
              <Input
                type="checkbox"
                value="Family"
                checked={genre.includes('Family')}
                onChange={handleGenreChange}
              />{' '}
              Family
            </Label>
          </div>
          <div>
            <Label check>
              <Input
                type="checkbox"
                value="Horror"
                checked={genre.includes('Horror')}
                onChange={handleGenreChange}
              />{' '}
              Horror
            </Label>
          </div>
        </FormGroup>
        <FormGroup>
          <Label for="country">Negara</Label>
          <Input
            type="text"
            name="country"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="director">Sutradara</Label>
          <Input
            type="text"
            name="director"
            id="director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Rating</Label>
          <Input
            type="number"
            name="rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cast">Bintang Film</Label>
          <Input
            type="text"
            name="cast"
            id="cast"
            value={cast}
            onChange={(e) => setCast(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="releaseDate">Diterbitkan</Label>
          <Input
            type="date"
            name="releaseDate"
            id="releaseDate"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="duration">Durasi</Label>
          <Input
            type="text"
            name="duration"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="synopsis">Sinopsis</Label>
          <Input
            type="textarea"
            name="synopsis"
            id="synopsis"
            value={synopsis}
            onChange={(e) => setSynopsis(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Gambar</Label>
          <Input
            type="file"
            name="image"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </FormGroup>
        <Button type="submit">Update</Button>
      </Form>
    </div>
  );
};

export default Update;
