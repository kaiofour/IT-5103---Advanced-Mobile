import { Text, View } from 'react-native'

function CustomText(props) {
    return (
        <View>
            <Text style={{fontSize: 30, color:"white"}}>{props.title}</Text>
        </View>
    );
}
export default CustomText;