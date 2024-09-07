import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Tonel from "../../assets/img/tonel.png";
import CardWidget from "../CartWidget/Cartwidget";
import FotoPerfil from "../../assets/img/perfil.jpg"
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Flex alignItems="center">
            Bodegas Araujo
            <Flex
              maxW="30px"
              mx="auto"
              ml={2}
              bg= "white"
              borderRadius= "full"
              objectFit='cover'
            >
             <img src={Tonel} alt="Logo de Bodegas Araujo" />
            </Flex>
          </Flex>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CardWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={FotoPerfil}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={FotoPerfil}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Diego</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Favoritos</MenuItem>
                  <MenuItem>Configuración</MenuItem>
                  <MenuItem>Salir</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
