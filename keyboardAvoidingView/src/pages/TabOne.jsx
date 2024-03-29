import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MessageBox from '../components/MessageBox'

const TabOne = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Text style={styles.title}>Chat GPT</Text>
                <FlatList 
                    data={conversation}
                    renderItem={(data)=>{
                        return(
                            <MessageBox 
                                item={data?.item}
                            />
                        )
                    }}
                    contentContainerStyle={styles.list}
                    automaticallyAdjustKeyboardInsets
                />

                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "position" : undefined}
                    keyboardVerticalOffset={60}
                >
                    <TextInput 
                        placeholder="write a message"
                        placeholderTextColor={"black"}
                        style={{
                          borderWidth: 1,
                          borderColor: "gray",
                          borderRadius: 10,
                          padding: 15,
                          color: "black",
                        }}
                    />
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    )
}

export default TabOne

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10
    },
    title:{
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20
    },
    list:{
        gap:10,
        paddingBottom: 100
    }
})

const conversation = [
    { author: "bot", message: "Sure, what's your location?" },
    { author: "user", message: "I'm in downtown San Francisco." },
    {
      author: "bot",
      message: "Great! What type of cuisine are you in the mood for?",
    },
    { author: "user", message: "I'm in the mood for sushi." },
    {
      author: "bot",
      message:
        "There's a great sushi restaurant called Akiko's nearby. Would you like me to book a table for you?",
    },
    { author: "user", message: "Yes please, for two people at 7 pm tonight." },
    {
      author: "bot",
      message:
        "Alright, I've made a reservation at Akiko's for two people at 7 pm tonight. Enjoy your meal!",
    },
    {
      author: "user",
      message: "Thanks! Can you recommend any good bars in the area?",
    },
    {
      author: "bot",
      message:
        "Sure, there's a great rooftop bar called Charmaine's nearby. Would you like me to give you directions?",
    },
    { author: "user", message: "Yes please." },
    {
      author: "bot",
      message:
        "To get to Charmaine's, head east on Market Street and turn left on Cyril Magnin Street. The bar will be on your right. Enjoy your drinks!",
    },
    {
      author: "user",
      message:
        "Thanks! Do you have any recommendations for things to do in San Francisco?",
    },
    {
      author: "bot",
      message:
        "There are plenty of great things to do in San Francisco. Some popular attractions include the Golden Gate Bridge, Alcatraz Island, and Fisherman's Wharf.",
    },
    {
      author: "user",
      message: "That sounds great. How do I get to the Golden Gate Bridge?",
    },
    {
      author: "bot",
      message:
        "You can take a bus or drive to the Golden Gate Bridge. It's located at the northern end of the city, and there are several parking areas nearby.",
    },
    {
      author: "user",
      message: "Thanks! Can you recommend any good hotels in the area?",
    },
    {
      author: "bot",
      message:
        "Sure, there are many great hotels in San Francisco. The Palace Hotel and the St. Regis San Francisco are both highly rated.",
    },
    {
      author: "user",
      message:
        "Thanks for the recommendations! What's the weather like in San Francisco today?",
    },
    {
      author: "bot",
      message:
        "The current temperature in San Francisco is 63°F (17°C), with mostly cloudy skies.",
    },
    {
      author: "user",
      message:
        "Thanks for letting me know. Do you have any suggestions for indoor activities in case it starts raining?",
    },
    {
      author: "bot",
      message:
        "Sure, some popular indoor attractions in San Francisco include the California Academy of Sciences, the San Francisco Museum of Modern Art, and the Exploratorium.",
    },
    {
      author: "user",
      message:
        "That sounds great. Can you give me directions to the California Academy of Sciences?",
    },
    {
      author: "bot",
      message:
        "To get to the California Academy of Sciences, take the Muni Metro K or M line to the Castro Station. From there, transfer to the 43 bus and get off at the Music Concourse stop. The academy will be just a short walk away. Enjoy your visit!",
    },
    {
      author: "user",
      message:
        "Thanks! Do you have any recommendations for vegetarian restaurants in the area?",
    },
    { author: "bot", message: "bye" },
  ];