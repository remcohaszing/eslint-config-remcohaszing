import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';

import { Button } from '../Button/index.js';
import { ErrorButton } from '../ErrorButton/index.js';
import { Input } from '../Input/index.js';

const propTypes = {
  /**
   * Called when the form is submitted
   */
  onSubmit: PropTypes.func.isRequired,
};

/**
 * A form for editing an item.
 */
export function ItemForm({ onSubmit }) {
  const [item, setItem] = useState({ text: '', link: '' });

  const handleChange = useCallback(
    ({ currentTarget }) => {
      setItem({
        ...item,
        [currentTarget.name]: currentTarget.value,
      });
    },
    [item],
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      onSubmit(item);
      setItem({ text: '', link: '' });
    },
    [item, onSubmit],
  );

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Input label="text" name="text" onChange={handleChange} value={item.text} />
      <Input label="link" name="link" onChange={handleChange} type="url" value={item.link} />
      <ErrorButton />
      <Button className="is-primary" type="submit">
        Add
      </Button>
    </form>
  );
}

ItemForm.propTypes = propTypes;
