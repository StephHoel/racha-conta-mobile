import {
  Avatar,
  AvatarFallbackText,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  HStack,
  Text,
} from '@gluestack-ui/themed'

interface Props {
  data: {
    id?: string
    name: string
  }
}

export function Person({ data }: Props) {
  return (
    <HStack
      height="$12"
      w="$full"
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack alignItems="center" gap="$2">
        <Avatar bg="$secondary700">
          <AvatarFallbackText>{data.name}</AvatarFallbackText>
        </Avatar>

        <Text size="md" color="white">
          {data.name}
        </Text>
      </HStack>

      <Checkbox size="md" value={data.id || ''} aria-label={data.name}>
        <CheckboxIndicator mr="$2">
          <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
      </Checkbox>
    </HStack>
  )
}
