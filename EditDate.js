'use strict';
import React, {
 TextInput,
 View
} from 'react-native';

class EditDate extends Component {
 setParentState(args) {
   this.props.setParentState(args);
 }

 render() {
   // if date is null, create new date else update existing
   const { date } = this.props;
   var create = date === null;

   return (
     <View style={styles.container}>
      // view to hold and select image
       <TextInput
         style={styles.textInput}
         autoCapitalize='words'
         placeholder="Title of Date"
         placeholderTextColor="#727272"
         onChangeText={(text) => this.setState({text})}
         value={create ? '' : date.title}/>

       <TextInput
         style={styles.textInput}
         multiline=true
         placeholder="Description of Date"
         placeholderTextColor="#727272"
         onChangeText={(text) => this.setState({text})}
         value={create ? '' : date.subtitle}/>
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#880d4f'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});