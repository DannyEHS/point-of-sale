import { useState, ChangeEvent } from 'react';

type Category = {
  id: string;
  name: string;
};

type Props = {
  name: string;
  value?: string;
  data: Category[] | undefined;
  placeholder: string;
};

export default function SelectItemUpdate({ name, value, data }: Props) {
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  console.log("data dentro del componente select item: ", data)

  return (
    <div className="relative inline-block w-96 m-3">
      <select
        name={name}
        value={selectedValue}
        onChange={handleChange}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {data.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
