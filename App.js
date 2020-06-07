import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [state, setstate] = useState(
    "Open up App.js to start working on your app!"
  );

  const handleClinck = () => {
    setstate(
      state === "Text has been changed"
        ? "Open up App.js to start working on your app!"
        : "Text has been changed"
    );
  };

  return (
    <View style={styles.container}>
      <Text>{state}</Text>
      <Button
        title={state === "Text has been changed" ? "Restore" : "Change Text"}
        onPress={handleClinck}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
