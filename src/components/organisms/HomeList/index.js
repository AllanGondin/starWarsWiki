import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'
import { Text } from '../../atoms'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://cdn.ome.lt/qnK3hf0_08-cjuoRDb98LkEg3Do=/1200x630/smart/extras/conteudos/darth-vader-fortnite.jpg',
  },
  {
    id: 1,
    image_url:
      'https://lumiere-a.akamaihd.net/v1/images/obi-wan-quiz-new-swcom-slide-mobile_c0b5ad23.jpeg',
  },
  {
    id: 2,
    image_url:
      'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2020/02/desafio-jedi-de-mestre-yoda-consertar-as-frases-consegue-vocecc82.jpg?quality=100&strip=info',
  },
  {
    id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/pt/f/f4/HanSolo.jpg',
  },
  {
    id: 4,
    image_url:
      'https://static.wikia.nocookie.net/ptstarwars/images/7/7f/ChewbaccaTFAHS-Fathead.png/revision/latest?cb=20151218200951',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  )
}
