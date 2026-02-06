import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  // show alert thingy (message when the button is clicked, switch to android emulator or mobile for this)
  const showAlert = () => {
    Alert.alert("YOU PUSHED THE BUTTON", "Alert Button pressed");
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
      </View>

      {/* chat/friends list */}
      <View style={styles.chatList}>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <View key={i} style={styles.chatItem}>
            <Text style={styles.chatName}>Jim Jimmerson</Text>
          </View>
        ))}
      </View>

      {/* footer icons */}
      <View style={styles.footer}>
        {[
          require("../assets/images/footer_icon_1.png"),
          require("../assets/images/footer_icon_2.png"),
          require("../assets/images/footer_icon_3.png"),
          require("../assets/images/footer_icon_4.png"),
          require("../assets/images/footer_icon_5.png"),
        ].map((icon, i) => (
          <TouchableOpacity key={i} style={styles.footerSlot}>
            <Image source={icon} style={styles.footerIcon} />
          </TouchableOpacity>
        ))}
      </View>

      {/* puts the alert button below the footer, you can change this if needed */}
      <TouchableOpacity style={styles.alertButton} onPress={showAlert}>
        <Text style={styles.alertText}>Alert</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },

  /* header */
  header: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  headerText: { fontSize: 22, fontWeight: "bold" },

  /* chat/friends list or something idk how snapchat works */
  chatList: { flex: 1 },
  chatItem: {
    height: 70,
    justifyContent: "center",
    paddingLeft: 20,
    borderBottomWidth: 1,
    borderColor: "#E5E5E5",
  },
  chatName: { fontSize: 18 },

  /* footer style (Jakobs Section) */
  footer: {
    height: 60,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: "#E5E5E5",
    backgroundColor: "#FFFFFF",
  },
  footerSlot: { flex: 1, justifyContent: "center", alignItems: "center" },
  footerIcon: { width: 28, height: 28, resizeMode: "contain" },

  /* le alert button */
  alertButton: {
    backgroundColor: "#FFFC00",
    padding: 15,
    alignItems: "center",
  },
  alertText: { fontWeight: "bold", fontSize: 16 },
});
