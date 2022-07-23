import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { OutlineRestingButton } from "components/atoms/Button/Button";
import { AssetNewTemplate } from "components/templates/AssetNewTemplate/AssetNewTemplate";
import { NextBackButtonGroup } from "components/templates/AssetNewTemplate/parts/NextBackButtonGroup";
import { FC } from "react";
import { useForm, useFieldArray } from "react-hook-form";

type FormData = {
  name: string;
  description: string;
  properties: {
    name: string;
    value: string;
  }[];
};

export const AssetNewDetailScreen: FC = () => {
  const { register, control } = useForm<FormData>({
    defaultValues: {
      properties: [{}],
    },
  });
  const propaties = useFieldArray({
    control,
    name: "properties",
  });

  return (
    <AssetNewTemplate
      title="Enter item details"
      description="They all serve the same purpose, but each one takes a different approach and makes different tradeoffs."
    >
      <Box>
        <form>
          <VStack spacing="24px">
            <FormControl>
              <FormLabel>Name your item</FormLabel>
              <Input
                placeholder="e.g. Redeemable  T-Shirt with Logo"
                rounded="full"
                size="lg"
              />
              <FormErrorMessage>{}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel>Enter short description</FormLabel>
              <Input
                placeholder="e.g. After purchase you will get a  T-Shirt"
                rounded="full"
                size="lg"
              />
              <FormErrorMessage>{}</FormErrorMessage>
            </FormControl>

            <Box w="full">
              <FormControl>
                <FormLabel>Add properties</FormLabel>

                <VStack w="full">
                  {propaties.fields.map((field, i) => (
                    <HStack key={field.name} w="full">
                      <Input
                        placeholder="Name"
                        {...register(`properties.${i}.name`)}
                      />
                      <InputGroup>
                        <Input
                          placeholder="Value"
                          {...register(`properties.${i}.value`)}
                        />
                        <InputRightElement>
                          <Box>
                            <IconButton
                              aria-label="close"
                              icon={<CloseIcon h="12px" w="12px" />}
                              onClick={() => propaties.remove(i)}
                            />
                          </Box>
                        </InputRightElement>
                      </InputGroup>
                    </HStack>
                  ))}
                </VStack>

                <FormErrorMessage>{}</FormErrorMessage>
              </FormControl>

              <Flex mt="12px" justify="flex-end">
                <OutlineRestingButton onClick={() => propaties.append({})}>
                  Add Property
                </OutlineRestingButton>
              </Flex>
            </Box>

            <HStack w="full">
              <FormControl>
                <FormLabel>Item price or starting bid</FormLabel>
                <Input placeholder="e.g. 0,01 Eth" rounded="full" size="lg" />
                <FormErrorMessage>{}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input placeholder="e.g. 1" rounded="full" size="lg" />
                <FormErrorMessage>{}</FormErrorMessage>
              </FormControl>
            </HStack>
          </VStack>
        </form>
      </Box>

      <NextBackButtonGroup
        backHref="/assets/new?step=asset"
        nextHref="/assets/new?step=collection"
      />
    </AssetNewTemplate>
  );
};
