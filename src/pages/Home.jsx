import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, VStack } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <>
      <VStack>
        <Link href="/" isExternal>
          Home <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="/user/users" isExternal>
          User Profile Page <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="/user/business" isExternal>
          Business Page <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="/problems" isExternal>
          Problems Page <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="/jobs" isExternal>
          Jobs Page <ExternalLinkIcon mx="2px" />
        </Link>
        <Link href="/noti" isExternal>
          Notifications <ExternalLinkIcon mx="2px" />
        </Link>
      </VStack>
    </>
  );
};

export default Home;
