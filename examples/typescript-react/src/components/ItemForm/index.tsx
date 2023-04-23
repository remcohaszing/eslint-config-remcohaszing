import { type ChangeEvent, type FormEvent, type ReactElement, useCallback, useState } from 'react';

import { type Item } from '../../types.js';
import { Button } from '../Button/index.js';
import { ErrorButton } from '../ErrorButton/index.js';
import { Input } from '../Input/index.js';

interface ItemFormProps {
  /**
   * Called when the form is submitted
   */
  onSubmit: (item: Item) => void;
}

/**
 * A form for editing an item.
 */
export function ItemForm({ onSubmit }: ItemFormProps): ReactElement {
  const [item, setItem] = useState<Item>({ text: '', link: '' });

  const handleChange = useCallback(
    ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
      setItem({
        ...item,
        [currentTarget.name]: currentTarget.value,
      });
    },
    [item],
  );

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
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
