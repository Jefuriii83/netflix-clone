import { Text, View } from '../../../../src/components/Themed'
import React from 'react'
import MenuOptions from '../../../../src/components/MenuOptions'
import MenuButton from '../../../../src/components/MenuButton'
import MenuProfile from '../../../../src/components/MenuProfile'

const Menu = () => {
  return (
    <View className='bg-black'>
      <MenuProfile />
      <MenuButton name1='bell' name2='Notifications' name3='left' destination=''/>
      <MenuButton name1='check' name2='My List' name3="left" destination=''/>
      <MenuOptions />
     
    </View>
  )
}

export default Menu