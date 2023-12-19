import { Flex, Heading, Image } from "@chakra-ui/react"
import bgImage from '/bgImage.png'
import logo from '/logo_dovale2.png'
import ChavesForm from "./components/ChavesForm"

const App = () => {
  return (
    <Flex
      w='full'
      h='100vh'
      bgImage={bgImage}
      bgPosition="right"
      bgSize='cover'
      bgRepeat="no-repeat"
      // objectFit='cover'
      // filter='auto' 
      // brightness='90%'
      flexDirection='column'
      justify='center'
      align='center'
      p={[2, 4]}
    >

      <Flex
        bg='whiteAlpha.900'
        maxW='md'
        w='full'
        overflowY='auto'
        flexDirection='column'
        py={[4, 6]}
        px={[4, 6, 8]}
        gap={8}
      >

        <Flex gap={4} flexDirection='column' alignItems='center'>
          <Flex justify='center' w={'85%'}>
            <Image src={logo} alt='Logo Dovale' />
          </Flex>
          <Heading
            fontSize='x-large'
            textTransform='uppercase'
            textAlign='center'
            fontWeight='extrabold'
          >
            Conversão de Chaves
          </Heading>
        </Flex>

        <ChavesForm />
      </Flex>
    </Flex>
  )
}

export default App