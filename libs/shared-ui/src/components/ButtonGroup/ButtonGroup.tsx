import { Button } from '../Button';

export type ButtonItem<T extends string> = {
  value: T;
  label: string;
};

export type ButtonGroupProps<T extends string> = {
  items: ButtonItem<T>[];
  current: T;
  onChange: (value: T) => void;
};

export const ButtonGroup = <T extends string>({ items, current, onChange }: ButtonGroupProps<T>) => (
  <nav>
    <ul className="list-none m-0 p-0">
      {items.map((item, index) => (
        <li key={index} className="inline-block mr-1.5">
          <Button active={item.value === current} onClick={() => onChange(item.value)}>
            {item.label}
          </Button>
        </li>
      ))}
    </ul>
  </nav>
);
