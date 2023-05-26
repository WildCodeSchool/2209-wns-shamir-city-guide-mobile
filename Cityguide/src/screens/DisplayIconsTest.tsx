import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors, tagsIconsName, categoriesIconsName, typesIconsName } from "../utils/constants";
import { ITag } from '../types/tag';

import { GetAllTags } from '../services/tag';
import { GetAllCategories } from '../services/category';
import { GetAllTypes } from '../services/type';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { ICategory } from '../types/category';
import { IType } from '../types/type';


const DisplayIconsTest: React.FC = () => {
  // // TAGS EXAMPLES
  // const { allTags } = GetAllTags();
  // return (
  //   <View style={styles.container}>
  //     {allTags && allTags?.getAllTags.map((tag: ITag, index: number) => {
  //       const iconName = tagsIconsName[tag.icon];
        
  //       return (
  //         <View key={index}>
  //           <Text> {tag.name} </Text>
  //           <Icon name={iconName} size={60} color={Colors.PURPLE} />
  //         </View>
  //       )
  //     })

  //     }
  //   </View>
  // );

  // // CATEGORIES EXAMPLES
  // const { allCategories } = GetAllCategories();
  // return (
  //   <View style={styles.container}>
  //     {allCategories && allCategories?.getAllCategories.map((category: ICategory, index: number) => {
  //       const iconName = categoriesIconsName[category.icon];
        
  //       return (
  //         <View key={index}>
  //           <Text> {category.name} </Text>
  //           <Icon name={iconName} size={60} color={category.color} />
  //         </View>
  //       )
  //     })

  //     }
  //   </View>
  // );

  // TYPES EXAMPLES
  const { allTypes } = GetAllTypes();
  return (
    <View style={styles.container}>
      {allTypes && allTypes?.getAllTypes.map((type: IType, index: number) => {
        const iconName = typesIconsName[type.logo];
        
        return (
          <View key={index}>
            <Text> {type.name} </Text>
            <Icon name={iconName} size={60} color={type.color} />
          </View>
        )
      })

      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    flex: 2,
    color: Colors.BLUELIGHT,
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
  },
    text: {
    color: Colors.BLUEGREY,
    fontSize: 15,
    marginBottom: 50,
    padding: 5,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.BLUELIGHT,
    marginTop: 7,
    marginBottom: 5,
  },
});

export default DisplayIconsTest;
