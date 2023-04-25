import {
	View,
	Text,
	SafeAreaView,
	Image,
	TextInput,
	ScrollView,
} from "react-native"
import React, { Component, useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import {
	UserIcon,
	MagnifyingGlassIcon,
	AdjustmentsVerticalIcon,
	ChevronDownIcon,
} from "react-native-heroicons/outline"
import Categories from "../components/Categories"
import FeaturedRows from "../components/FeaturedRows"

const HomeScreen = () => {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	}, [])

	return (
		<SafeAreaView className="bg-white pt-5">
			{/* Header */}
			<View className="flex-row pb-3 items-center mx-4 space-x-2">
				<Image
					source={{ uri: "https://links.papareact.com/wru" }}
					className="h-7 w-7 bg-gray-300 p-4 rounded-full"
				/>

				<View className="flex-1">
					<Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
					<Text className="font-bold text-xl">
						Current Location
						<ChevronDownIcon size={20} color="#00CCBB"></ChevronDownIcon>
					</Text>
				</View>

				<UserIcon size={35} color="#00CCBB"></UserIcon>
			</View>

			{/* Search */}
			<View className="flex-row items-center space-x-2 pb-2 mx-4">
				<View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
					<MagnifyingGlassIcon color="gray" size={22} />
					<TextInput
						placeholder="Restaurants and cuisines"
						keyboardType="default"
					/>
				</View>

				<AdjustmentsVerticalIcon color="#00CCBB" />
			</View>

			{/* Body */}
			<ScrollView
				className="bg-gray-100"
				contentContainerStyle={{ paddingBottom: 100 }}
			>
				{/* Categories */}
				<Categories />

				{/* Featured */}
				<FeaturedRows
					id="123"
					title="Featured"
					description="Paid placement from our partners"
					featuredCategory="featured"
				/>

				{/* Tasty Discounts */}
				<FeaturedRows
					id="1234"
					title="Tasty Discounts"
					description="Everyone loves a good deal!"
					featuredCategory="discounts"
				/>

				{/* Offers near you */}
				<FeaturedRows
					id="12345"
					title="Offers near you!"
					description="Why not try something new?"
					featuredCategory="offers"
				/>
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeScreen
