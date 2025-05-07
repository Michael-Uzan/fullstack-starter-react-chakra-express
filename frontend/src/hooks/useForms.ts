/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

type FieldValues = string | number | boolean;
type Fields = { [key: string]: FieldValues };

type useFormProps = {
  initialFields: Fields;
  cb: (fields: any) => null;
};

export const useForm = ({ initialFields, cb }: useFormProps) => {
  const [fields, setFields] = useState<Fields>(initialFields);

  useEffect(() => {
    cb(fields);
  }, [fields, cb]);

  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    const field: string = target.name;
    let value: FieldValues;

    switch (target.type) {
      case "number":
        value = +target.value;
        break;
      case "checkbox":
        value = target.checked;
        break;
      default:
        value = target.value;
        break;
    }
    setFields((prevFields: Fields) => ({ ...prevFields, [field]: value }));
  };

  return [fields, handleChange, setFields];
};
