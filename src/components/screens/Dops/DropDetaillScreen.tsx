import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Progress,
  Text,
  Image,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FilledButton } from "components/atoms/Button/Button";
import { FilledTag } from "components/atoms/Tag/Tag";
import { AvatarNameId } from "components/molecules/AvatarName/AvatarNameId";
import { DropActionCard } from "components/organisms/Card/ActionCard/ActionCard";
import { Footer } from "components/organisms/Footer/Footer";
import { HeaderWithSearch } from "components/organisms/Header/GuestHeader";
import { SNSLinks } from "components/organisms/Links/SNSLinks/SNSLInks";
import { FC } from "react";

export const DropDetailScreen: FC = () => {
  return (
    <Box>
      <HeaderWithSearch />
      <Box px="80px" my="70px">
        <Box
          backgroundImage="/Bg2.png"
          w="full"
          rounded="lg"
          mb="40px"
          __css={{ aspectRatio: "4/1" }}
        >
          <Flex
            justify="center"
            alignItems="center"
            flexDir="column"
            h="full"
            color="white"
          >
            <FilledTag mb="20px">Live Now</FilledTag>
            <Heading as="h1" textStyle="h1" mb="8px">
              Invisible Friends
            </Heading>
            <Text as="h3" textStyle="h5">
              Ends in: 18h 54m 29s
            </Text>
          </Flex>
        </Box>

        <Flex>
          <Box mr="24px" flex="1">
            <Box mb="20px">
              <AvatarNameId href="/users/1" />
            </Box>

            <SNSLinks mb="10px" justify="flex-start" />

            <Box mb="25px">
              <HStack justify="space-between">
                <Text textStyle="text.14.regular">Total minted</Text>
                <HStack>
                  <Text textStyle="text.14.bold">50%</Text>
                  <Text textStyle="text.14.regular">(4500/9000)</Text>
                </HStack>
              </HStack>

              <Progress
                size="sm"
                colorScheme="purple"
                value={50}
                rounded="md"
              />
            </Box>

            <DropActionCard />

            <Text textStyle="text.14.regular" my="40px">
              As one of the most prestigious and recognizable brands in all of
              sports with a passionate fanbase, the Philadelphia 76ers and
              Crypto.com are proud to bring to life exclusive and authentic
              digital collectibles for fans to own, collect and share. The 76ers
              are one o
            </Text>

            <Center>
              <FilledButton>Subscribe</FilledButton>
            </Center>
          </Box>

          <Box w="50%">
            <Image src="/Bg.png" rounded="lg" __css={{ aspectRatio: "1/1" }} />
          </Box>
        </Flex>

        <Divider my="45px" />

        <Flex>
          <Box flex="1" mr="77px">
            <Heading as="h3" mb="18px">
              Details
            </Heading>
            <Text textStyle="text.14.regular" color="gray.primary">
              Tomorrowland Music Festival started in 2005 with 10,000 attendees,
              organized and still owned by two Belgian brothers. Now in its 16th
              year, Tomorrowland is one of the largest electronic music
              festivals in the world, with more than 400,000 attendees to its
              annual summer festival, topping 600,000 in 2022, and tickets
              always selling out in minutes. Tomorrowland has been voted the
              World's Best Music Event five times at the International Dance
              Music awards, and has been officially recognized by the UN as a
              symbol of global unity and community by Secretary General Ban
              Ki-Moon. The Tomorrowland Belgium 2022 collection, The Reflection
              of Love, offers holders unparalleled access to Tomorrowland for
              its biggest fans. Holders may participate in weekly exclusive
              giveaways of Tomorrowland fashion, events, experiences, backstage
              tours, and more, through holders-only community channels. These
              giveaways occur year-round. Holders attending Tomorrowland Belgium
              2022 may also access an exclusive holder’s only stage, with secret
              shows from massive artists. The Reflection of Love Collection is
              part of a series of three collections this year, along with a
              collection released at Tomorrowland Winter (A Letter from the
              Universe), and a collection dropping in the Fall. Own one NFT from
              each of these three collections to assemble the Medallion of
              Memoria; the ultimate Tomorrowland fan experience. The Medallion
              of Memoria grants perpetual access to exclusive giveaways and
              secret shows at Tomorrowland events. Furthermore, holders get
              guaranteed access to tickets for future Tomorrowland events,
              forever. Never worry about securing tickets, ever again. With
              events selling out in minutes, this utility has never been offered
              by Tomorrowland before. Finally, holders have the option to burn
              their Medallion in exchange for a full weekend ticket to the next
              Tomorrowland. A full breakdown of the NFT utility and art is
              available at nft.tomorrowland.com. From a completely custom made
              social media network made in 2015, to becoming the first cashless
              music festival, to developing online metaversal music festivals
              during covid with over one million concurrent viewers,
              Tomorrowland’s focus has always been on crafting the greatest fan
              experiences and communities through new technologies. The NFT
              collections and Medallion of Memoria are the ultimate expression
              of this commitment and the first steps on a journey into web3 by
              one of the world’s biggest music festivals. Gather the Collection.
              Assemble the Medallion. Unite Forever, at Tomorrowland.
            </Text>
          </Box>

          <Box w="50%">
            <Tabs colorScheme="blackAlpha">
              <TabList>
                <Tab>Roadmap</Tab>
                <Tab>Team</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Text textStyle="text.14.regular" color="gray.primary">
                    Spring (finished) ・Drop of the 1st Tomorrowland NFT
                    collection: A Letter from the Universe ・First secret shows
                    for holders only at Tomorrowland Winter ・Start of the
                    Tomorrowland holders community and exclusive giveaways
                    Summer ・Launch of NFT Ticketing Experiment for Tomorrowland
                    Belgium 2022 ・Start of NFT partnerships and collaborations
                    ・Drop of the 2nd Tomorrowland NFT collection: The
                    Reflection of Love ・New secret events & giveaways
                    ・Expanding the team to work on enhanced community
                    engagement Fall ・Drop of the 3rd Tomorrowland NFT
                    collection: Name TBD ・The Launch of the Medallion of
                    Memoria ・New verification flows for buyers to join
                    exclusive moments ・Tomorrowland 2023 ticket presale for
                    Medallion holders ・Launching brand partnerships in web 3
                    2023 ・Tomorrowland IP entering the metaverse ・Potential of
                    Digital shows ・Future of Music NFTs ・Potential of
                    tokenomics ・Potential of NFT ticketing ・Helping other
                    projects by leveraging the Tomorrowland Brand.
                  </Text>
                </TabPanel>
                <TabPanel>
                  <Text textStyle="text.14.regular" color="gray.primary">
                    Good team
                  </Text>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};
