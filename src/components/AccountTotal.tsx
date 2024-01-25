import { Input, InputField, Text, VStack } from '@gluestack-ui/themed'

export function AccountTotal() {
  return (
    <VStack
      w="$full"
      bg="$secondary800"
      pt="$16"
      pb="$10"
      px="$8"
      alignItems="center"
      justifyContent="center"
    >
      <Text size="sm" mb="$2" color="$secondary300">
        Valor Total
      </Text>

      <Input variant="outline" h="$16" borderWidth="$0">
        <InputField
          placeholder="0,00"
          fontSize="$6xl"
          color="$white"
          textAlign="center"
          fontWeight="$bold"
          keyboardType="numeric"
        />
      </Input>
    </VStack>
  )
}
