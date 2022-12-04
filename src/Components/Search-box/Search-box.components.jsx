import "./search-box.style.css";
const Searchbox = ({className,placeholder,changename}) => (
  <div>
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={changename}
    />
  </div>
);

export default Searchbox;
