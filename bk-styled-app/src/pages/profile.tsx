import {
  Flex,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  Heading,
} from "@chakra-ui/react";

import { useState } from "react";
import { User } from "../interfaces";

import jwt from "jsonwebtoken";

export const Profile = () => {
  const [show, setShow] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState<User>({
    id: 1,
    username: "John",
    password: "****",
    money: 1200,
  });
  const handleClick = () => setShow(!show);

  async function addUser() {
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(user),
    }).then((t) => t.json());

    const userReceived = res.user;
    const token = res.token;

    if (token) {
      const json = jwt.decode(token);
      console.log({ userReceived });

      setLoggedIn(true);
    }
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="50vh"
      flexDirection="column"
    >
      {!loggedIn ? (
        <>
          <Heading fontSize="5vw">Înregistrare/Autentificare</Heading>
          <InputGroup size="md" width="20%" mt="30px" flexDirection="column">
            <Input
              placeholder="Nume de utilizator"
              mb="20px"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </InputGroup>
          <InputGroup size="md" width="20%" mt="30px" flexDirection="column">
            <Input
              type={show ? "text" : "password"}
              placeholder="Introdu parola"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Ascunde" : "Arată"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            onClick={() => addUser()}
            _hover={{
              bg: "pink.300",
            }}
            my={"30px"}
          >
            Accesează contul
          </Button>
        </>
      ) : (
        <Heading> Sunteti logat</Heading>
      )}
    </Flex>
  );
};

export default Profile;
