import {
  Flex,
  Button,
  Input,
  Box,
  InputRightElement,
  InputGroup,
  Heading,
  Text,
  Divider,
  Select,
  InputRightAddon,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { useState, useEffect, useRef } from "react";

import { Acasa } from "../components/Acasa/Acasa";
import { Portofel } from '../util/blockchain';

const Index: React.FC = () => {
  const [spitalBucuresti, setSpitalBucuresti] = useState<Portofel>(
    new Portofel("Spital nou Bucuresti", "cauza")
  );
  const [spitalCraiova, setSpitalCraiova] = useState<Portofel>(
    new Portofel("Spital nou Craiova", "cauza")
  );

  const [alex] = useState<Portofel>(new Portofel("Alex"));
  const [matei] = useState<Portofel>(new Portofel("Matei"));

  const [users, setUsers] = useState<Portofel[]>([alex, matei]);
  const [cauze, setCauze] = useState<Portofel[]>([
    spitalBucuresti,
    spitalCraiova,
  ]);

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState<Portofel>(new Portofel("User"));

  const [cauza, setCauza] = useState<Portofel>(
    new Portofel("Spital nou Undeva", "cauza")
  );

  function checkInDatabaseUser(): boolean {
    for (let x of users) {
      if (x.username === user.username && x.privateKey === user.privateKey) {
        return true;
      }
    }

    return false;
  }

  function addUser() {
    const newUser = new Portofel(user.username)
    if (!checkInDatabaseUser()) {
      setUsers([...users, newUser]);
      setUser(newUser);
      setLoggedIn(true);
    }
    else {
      window.alert('Utilizator existent');
    }
  }

  function loginUser() {
    console.log({users})
    if(!checkInDatabaseUser()){
      window.alert('Utilizator negasit in baza de date')
      return;
    } 

    setLoggedIn(true);
  }

  function logout() {
    setLoggedIn(false);
  }

  const cauzaAleasa = useRef(cauze[0].username);
  const sumaAleasa = useRef(0);

  function trimiteBani() {
    const sumaDonata = Number(sumaAleasa.current.value);
    const cauzaDonata = cauzaAleasa.current.value;

    if (!sumaDonata || sumaDonata > user.money) {
      window.alert(
        "Suma introdusa este 0 lei sau mai mare decat banii detinuti"
      );
      return;
    }

    if (!cauzaDonata) {
      window.alert("Va rugam alegeti o optiune pentru donare");
      return;
    }

    console.log({user})
    user.efectueazaDonatie(sumaDonata, 'ceva');
    
    // setUser({ ...user});
    // setCauza({ ...cauza, name: cauzaDonata });

    // console.log({ sumaDonata, cauzaDonata });

    // let copy = [...cauze];
    // for (let x in copy) {
    //   if (copy[x].name === cauzaDonata) {
    //     copy[x].amount += Number(sumaDonata);
    //   }
    // }

    // setCauze([...copy]);

    window.alert("Donatie inregistrata");
  }


  return (
    <>
      <Flex width={"100%"} direction="column" alignItems="center">
        <Box width={"70%"}>
          <Acasa />

          <Divider mt="20px"></Divider>

          <Heading as="h3" my="20px" textAlign="center" fontSize="4vw">
            Lista de cauze
          </Heading>
          <Flex
            direction={"column"}
            justifyContent="center"
            alignItems="center"
          >
            {cauze.map((cauza) => (
              <Flex
                key={cauza.privateKey}
                borderBottom="1px solid red"
                p="10px"
                direction={"column"}
              >
                <Text>{cauza.username}</Text>
                <Text>Suma stransa: {cauza.money} lei</Text>
              </Flex>
            ))}
          </Flex>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Divider my="20px"></Divider>
            {!loggedIn ? (
              <>
                <Heading fontSize="3vw">Înregistrare</Heading>
                <InputGroup
                  size="md"
                  width="20%"
                  mt="30px"
                  flexDirection="column"
                >
                  <Input
                    placeholder="Nume de utilizator"
                    mb="20px"
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
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
                  p="20px"
                  my={"30px"}
                >
                  Înregistrare gratuită
                </Button>
                <Heading fontSize="3vw">Autentificare</Heading>
                <InputGroup
                  size="md"
                  width="20%"
                  mt="30px"
                  flexDirection="column"
                >
                  <Input
                    placeholder="Nume de utilizator"
                    mb="20px"
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </InputGroup>
                <InputGroup
                  size="md"
                  width="20%"
                  mt="30px"
                  flexDirection="column"
                >
                  <Input
                    type={show ? "text" : "password"}
                    placeholder="Introdu cheia privata"
                    onChange={(e) =>
                      setUser({ ...user, privateKey: e.target.value })
                    }
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
                  onClick={() => loginUser()}
                  _hover={{
                    bg: "pink.300",
                  }}
                  p="20px"
                  my={"30px"}
                >
                  Accesează contul
                </Button>
              </>
            ) : (
              <>
                <Divider></Divider>
                <Heading> Bine ati (re)venit, {user.username}</Heading>
                <Text fontSize="20px" mt="20px">
                  Suma curenta: {user.money} lei
                </Text>
                <Text fontSize="4px" mt="20px">
                  Cheie publica: {user.publicKey}
                </Text>
                <Text fontSize="4px" mt="20px">
                  Cheie privata: {user.privateKey}
                </Text>
                <Flex flexDirection="row" my={"30px"}>
                  <Select placeholder="Selecteaza o optiune" ref={cauzaAleasa}>
                    {cauze.map((cauza) => (
                      <option key={cauza.privateKey} value={cauza.username}>{cauza.username}</option>
                    ))}
                  </Select>
                  <InputGroup>
                    <Input placeholder="10" ref={sumaAleasa} />
                    <InputRightAddon children="lei" />
                  </InputGroup>
                  <Button
                    fontWeight={600}
                    color={"white"}
                    bg={"pink.400"}
                    href={"#"}
                    leftIcon={<PlusSquareIcon />}
                    _hover={{
                      bg: "pink.300",
                    }}
                    flexGrow={4}
                    px="40px"
                    mx="10px"
                    onClick={() => trimiteBani()}
                  >
                    Donează
                  </Button>
                </Flex>

                <Button
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"red.400"}
                  onClick={() => logout()}
                  _hover={{
                    bg: "red.300",
                  }}
                  p="20px"
                  my={"30px"}
                >
                  Ieși din cont
                </Button>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Index;
