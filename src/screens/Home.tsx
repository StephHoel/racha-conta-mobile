import { CheckboxGroup, Divider, VStack } from '@gluestack-ui/themed'
import * as Contacts from 'expo-contacts'

import { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { AccountTotal } from '../components/AccountTotal'
import { Person } from '../components/Person'

export function Home() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([])
  const [selected, setSelected] = useState<string[]>([])

  async function fetchContacts() {
    try {
      const { status } = await Contacts.requestPermissionsAsync()
      if (status === Contacts.PermissionStatus.GRANTED) {
        const { data } = await Contacts.getContactsAsync()

        data.sort((a, b) => {
          if (a.name < b.name) return -1
          if (a.name > b.name) return 1
          return 0
        })

        setContacts(data)
      }
    } catch (error) {
      //
    }
  }

  function onCheckboxChange(keys: string[]) {
    console.log(keys)
    setSelected(keys)
  }

  useEffect(() => {
    fetchContacts()
  }, [])

  return (
    <VStack bg="$black" flex={1}>
      <AccountTotal />

      <CheckboxGroup value={selected} flex={1} onChange={onCheckboxChange}>
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id || ''}
          renderItem={({ item }) => <Person data={item} />}
          ItemSeparatorComponent={() => (
            <Divider my="$4" bgColor="$secondary700" />
          )}
          contentContainerStyle={{ padding: 24, paddingBottom: 100 }}
        />
      </CheckboxGroup>
    </VStack>
  )
}
