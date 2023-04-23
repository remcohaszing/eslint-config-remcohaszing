import { type JSX, type VNode } from 'preact'
import { useCallback, useState } from 'preact/hooks'

import { type Item } from '../../types.js'
import { Button } from '../Button/index.js'
import { ErrorButton } from '../ErrorButton/index.js'
import { Input } from '../Input/index.js'

interface ItemFormProps {
  /**
   * Called when the form is submitted
   */
  onSubmit: (item: Item) => void
}

/**
 * A form for editing an item.
 */
export function ItemForm({ onSubmit }: ItemFormProps): VNode {
  const [item, setItem] = useState<Item>({ text: '', link: '' })

  const handleChange = useCallback(
    ({ currentTarget }: JSX.TargetedEvent<HTMLInputElement>) => {
      setItem({
        ...item,
        [currentTarget.name]: currentTarget.value
      })
    },
    [item]
  )

  const handleSubmit = useCallback(
    (event: JSX.TargetedEvent<HTMLFormElement>) => {
      event.preventDefault()
      onSubmit(item)
      setItem({ text: '', link: '' })
    },
    [item, onSubmit]
  )

  return (
    <form noValidate onSubmit={handleSubmit}>
      <Input label="text" name="text" onChange={handleChange} value={item.text} />
      <Input label="link" name="link" onChange={handleChange} type="url" value={item.link} />
      <ErrorButton />
      <Button className="is-primary" type="submit">
        Add
      </Button>
    </form>
  )
}
