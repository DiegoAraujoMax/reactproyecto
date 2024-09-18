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
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CartWidget } from '../CartWidget';
import { Link } from 'react-router-dom';
import FotoPerfil from '../../assets/img/perfil.jpg';
import { useCategory } from '../../Hooks';

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const { category } = useCategory();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Link to="/">MultiStore</Link>
          </Box>
          <Menu>
            <MenuButton as={Link} cursor="pointer" style={{ marginLeft: 30 }}>
              Categorías
            </MenuButton>
            <MenuList height={"300px"} overflowY={"scroll"}>
              {category.map((option) => (
                <MenuItem key={option.slug}>
                  <Link to={`/category/${option.slug}`}>{option.name}</Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <CartWidget />
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
                  <Avatar size={"sm"} src={FotoPerfil} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={FotoPerfil} />
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
