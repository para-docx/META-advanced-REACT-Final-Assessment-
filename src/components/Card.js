import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div className="card">

<VStack 
      color="black" 
      backgroundColor="white"
      cursor="pointer" 
      borderRadius="xl"
    >
        <Image src={imageSrc}></Image>
        <VStack spacing={3} alignItems="flex-start" p={5}>
          <Heading as="h5" size="md" noOfLines={1} color="black">
            {title}
          </Heading>
          <Text color="gray">{description}</Text>
          <HStack fontSize="md" fontWeight="medium">
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
     </VStack>
    </div>
  );
};

export default Card;
