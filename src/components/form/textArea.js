const TextArea = (props) => {
  <div className="mb-3">
    <label htmlFor={props.name} className="form-label">
      {props.title}
    </label>
    <textarea
      className="form-control"
      id={props.name}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      rows={props.rows}
    ></textarea>
    <div className={props.errorDiv}>{props.errorMsg}</div>
  </div>;
};

export default TextArea;
