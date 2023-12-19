import { Flex, Heading } from "@chakra-ui/react"
import bgImage from '/bgImage.png'

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
      py={[2, 4, 8]}
      gap={[2, 4, 6]}
      px={[2, 4]}
    >

      <Flex
        bg='whiteAlpha.900'
        maxW='xl'
        w='full'
        flexDirection='column'
        py={[4, 8]}
        px={[4, 6, 8]}
      >
        <Heading textTransform='uppercase' textAlign='center'>Tabela conversão de chaves</Heading>
      </Flex>
    </Flex>
  )
}

export default App