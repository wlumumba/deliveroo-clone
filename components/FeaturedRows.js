import { View, Text, ScrollView } from "react-native"
import React from "react"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from "./RestaurantCard"

const FeaturedRows = ({ title, description, featuredCategory }) => {
	return (
		<View>
			<View className="flex-row items-center justify-between px-4 mt-4">
				<Text className="font-bold text-lg">{title}</Text>
				<ArrowRightIcon color="#00CCBB" />
			</View>

			<Text className="text-xs text-gray-400 px-4">{description}</Text>

			<ScrollView
				horizontal
				contentContainerStyle={{ paddingHorizontal: 15 }}
				showsHorizontalScrollIndicator={false}
				className="pt-4"
			>
				{/* RestaurantCards... */}
				<RestaurantCard
					id={123}
					imgUrl="https://links.papareact.com/gn7"
					title="Yo Sushi"
					rating={4.5}
					genre="Japanese"
					address="123 Fake Street"
					short_description="Yo Sushi! Specialises in delivering sushi to customers using the Japanese style 'kaiten' conveyor belt method."
					dishes={[{ id: 1, name: "Sushi", description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar", price: 10, image: "https://links.papareact.com/gn7"}, { id: 2, name: "Dog", description: "variety of vegetable, egg, or raw seafood garnishes and served cold.", price: 10, image: "https://links.papareact.com/gn7"}, { id: 3, name: "Sushi", description: "sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar", price: 10, image: "https://links.papareact.com/gn7"}]}
					long={-77.0365}
					lat={38.8977}
				/>

				<RestaurantCard
					id={123}
					imgUrl="https://links.papareact.com/gn7"
					title="Yo Sushi"
					rating={4.5}
					genre="Japanese"
					address="123 Fake Street"
					short_description="Yo Sushi! Specialises in delivering sushi to customers using the Japanese style 'kaiten' conveyor belt method."
					dishes={[]}
					long={20}
					lat={0}
				/>

				<RestaurantCard
					id={123}
					imgUrl="https://links.papareact.com/gn7"
					title="Yo Sushi"
					rating={4.5}
					genre="Japanese"
					address="123 Fake Street"
					short_description="specialises in delivering sushi to customers using the Japanese style 'kaiten' conveyor belt method. In each restaurant various sushi dishes and other Japanese cooked foods are prepared in a theater style kitchen in plain view of customers and then set on the thin conveyor belt."
					dishes={[]}
					long={20}
					lat={0}
				/>
			</ScrollView>
		</View>
	)
}

export default FeaturedRows


