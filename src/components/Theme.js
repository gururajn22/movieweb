import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
const Theme = () => {
  const [value, setValue] = useState(true);

  const click = () => {
    setValue(!value);
  };

  useEffect(() => {
    if (value === true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  },[value]);
  return (
    <div>
      <Button colorScheme="teal" size='xs' variant="outline" onClick={click}>
        Dark mode or Light mode
      </Button>
    </div>
  );
};

export default Theme;
