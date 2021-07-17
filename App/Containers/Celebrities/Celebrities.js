import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import { CelebrityCard, SectionHeader } from '../../Components'

import styles from './Celebrities.Styles'

function Celebrities({ data, onViewAllPress, onPress, ...props }) {
  const renderItem = ({ item, index }) => {
    return (
      <CelebrityCard
        {...item}
        containerStyle={
          index === 0 || index === data.length / 2
            ? styles.firstCardStyle
            : undefined
        }
        onPress={() => onPress(item)}
      />
    )
  }

  const renderHeader = () => {
    return <SectionHeader title="CELEBRITIES" onPress={onViewAllPress} />
  }

  return (
    <>
      {renderHeader()}
      <ScrollView horizontal pagingEnabled>
        <FlatList
          data={data}
          renderItem={renderItem}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          numColumns={data?.length / 2 || undefined}
          keyExtractor={(item) => item.id}
          // ListHeaderComponent={renderHeader()}
          {...props}
        />
      </ScrollView>
    </>
  )
}

Celebrities.propTypes = {
  data: PropTypes.array,
  onPress: PropTypes.func,
  onViewAllPress: PropTypes.func
}

export default Celebrities
