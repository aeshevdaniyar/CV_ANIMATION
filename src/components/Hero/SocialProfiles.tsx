import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { connectionLinks } from "./connectionLinks";

const SocialProfiles = () => {
  return (
    <ButtonGroup>
      {connectionLinks.map((item) => (
        <IconButton
          key={item.name}
          as="a"
          href={item.link}
          target="_blank"
          fontSize="xl"
          aria-label={`Switch to ${item.name} mode`}
          variant="solid"
          colorScheme="gray"
          boxShadow="inner"
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={"black"}
          icon={item.icon}
        />
      ))}
    </ButtonGroup>
  );
};

export default SocialProfiles;
