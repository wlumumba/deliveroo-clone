import { View, Text, SafeAreaView } from "react-native"
import React, { useEffect } from "react"
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from "@react-navigation/native"

const PreparingOrderScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 3000)
    }, [])

	return (
		<SafeAreaView className="flex-1 bg-[#00CCBB] justify-center items-center">
			<Animatable.Image
				source={require("../assets/deliveroo-gif.gif")}
				animation="slideInUp"
				iterationCount={1}
				className="h-96 w-96"
			/>

			<Animatable.Text
				animation="slideInUp"
				iterationCount={1}
				className="text-white text-lg font-bold my-10 text-center"
			>
				Waiting on Restaurant to accept your order!
			</Animatable.Text>

            <Animatable.Text
				animation="slideInUp"
				iterationCount={2}
			>
            <Progress.Circle size={60} indeterminate={true} color="white"/>
			</Animatable.Text>
		</SafeAreaView>
	)
}

export default PreparingOrderScreen
