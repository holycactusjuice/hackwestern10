import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = ["ASL (American)", "HSL (Hindi)", "CSL (Chinese)"];

const ConvertDropdown = () => {
  return (
    <div className="grid grid-cols-2 m-8">
      <p className="">Convert to: </p>
      <Dropdown className="rounded-lg shadow-md text-sm"  options={options} value={options[0]} placeholder="Select an option" />
    </div>
  )
}

export default ConvertDropdown