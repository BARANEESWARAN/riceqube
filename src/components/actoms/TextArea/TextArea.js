import {Input} from "antd";

const TextArea = ({ onChange, rows, showCount, maxLength, readOnly }) => {
  const { TextArea } = Input;

  return (
    <TextArea
      onChange={onChange}
      rows={rows}
      maxLength={maxLength}
      readOnly={readOnly}
      showCount={showCount}
    />
  );
};
export default TextArea;
