import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const valueQuery = searchParams.get('query');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    if (valueQuery === form.elements.event.value) return;
    setSearchParams({ query: form.elements.event.value });
    onSubmit({ search });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" name="event" onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
