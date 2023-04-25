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
					short_description="This is a dest"
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
					short_description="This is a dest"
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
					short_description="This is a dest"
					dishes={[]}
					long={20}
					lat={0}
				/>
			</ScrollView>
		</View>
	)
}

export default FeaturedRows
