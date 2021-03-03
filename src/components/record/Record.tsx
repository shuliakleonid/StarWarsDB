import React, {FunctionComponent} from 'react';

type RecordPropsType = {
  label: string
  field: string
}

const Record: FunctionComponent<RecordPropsType> = (props) => {
  return (
      <li className="list-group-item">
        <span className="term">{props.label}</span>
        <span>{props.field}</span>
      </li>
  );
};

export default Record;
