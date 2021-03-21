import React, {FunctionComponent} from 'react';

type RecordPropsType = {
  label: string
  field: string
  item?: any
}

const Record: FunctionComponent<RecordPropsType> = ({item, field, label}) => {
  return (
      <li className="list-group-item">
        <span className="term">{label}</span>
        <span>{item[field]}</span>
      </li>
  );
};

export default Record;
