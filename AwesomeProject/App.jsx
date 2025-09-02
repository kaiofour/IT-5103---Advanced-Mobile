import { Text, View, Image, ScrollView, StyleSheet} from 'react-native'
import CustomText from './Components/CustomText'
import {Button} from 'react-native-paper'
import Loading from './Components/Loading'

function App() {
  return (
    <View style={styles.viewStyle}>
        <View>
            <Text style={styles.textStyle}>Demo of Components</Text>
        </View>

        <View>
            <Button 
                style={[styles.buttons, {backgroundColor: 'red'}]}
                textColor='white'
                labeStyle={{fontSize:20}}>        
                Show Loading
            </Button>

            <Button 
                style={[styles.buttons, {backgroundColor: 'blue'}]}
                textColor='white'
                labeStyle={{fontSize:20}}>        
                Show Form
            </Button>

            <Button 
                style={[styles.buttons, {backgroundColor: 'green'}]}
                textColor='white'
                labeStyle={{fontSize:20}}>        
                Show Flatlist     
            </Button>

            <Button 
                style={[styles.buttons, {backgroundColor: 'black'}]}
                textColor='white'
                labeStyle={{fontSize:20}}>        
                Show All
            </Button>
        </View>

        <View>
            <Loading/>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        marginTop: 10,
    },
    buttons: {
        width: '100%',
        borderRadius: 3,
        marginBottom: 10,
    }
})

export default App