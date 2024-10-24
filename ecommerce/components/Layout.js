import Head from 'next/head'
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'

const Layout = ({children}) => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <div>
      <Head>
        <title>E-commerce App</title>
      </Head>

      {/* BOX es como un div en CHAKRA-UI */}
      <Box>
        <Flex
        bg={useColorModeValue('white', 'gray.600')}
        minH={'60px'}
        py={{ base: 2 }} 
        px={{ base: 4 }}
        borderTop={1}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        >
          <Flex
          flex={{ base: 1 }}
          justify={{ base: 'center', md: 'start' }}
          >
            <Text
            fontFamily={'heading'}
            color={useColorModeValue('gray.800','white')}
            >E-commerce App</Text>
          </Flex>
          <Stack
          flex={{base: 1}}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
          >
            <Button onClick={toggleColorMode}>
              {colorMode=== "light" ? <MoonIcon/> : <SunIcon/>}
            </Button>
            <Button
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
            >Sign in
            </Button>
            <Button
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            variant={'link'}
            href={'#'}
            bg={'pink.400'}
            _hover={{bg: 'pink.300'}}
            >Sign out
            </Button>
          </Stack>
        </Flex>
      </Box>
      {children} {/* Aqui se renderiza el contenido anidado */}
    </div>
  )
}

export default Layout