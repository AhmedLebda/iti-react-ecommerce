import Dropdown from "react-bootstrap/Dropdown";
import { useLanguageContext } from "../contexts/language/useLanguageContext";

const LanguageDropdown = () => {
  const { handleLanguageChange } = useLanguageContext();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as="button" id="english" onClick={handleLanguageChange}>
          English
        </Dropdown.Item>
        <Dropdown.Item as="button" id="arabic" onClick={handleLanguageChange}>
          Arabic
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
