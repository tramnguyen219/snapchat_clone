import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Index = () => {
  return (
    <View style={styles.container}>
      {/* chat/friends list/ Tram section */}
      <View style={styles.chatList}>
        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic1.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>

            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Jason🍝</Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/newchat.png")}
                  style={styles.previewIcon}
                />
                <Text style={styles.chatPreview}>
                  <Text style={{ color: "#007AFF", fontWeight: "bold" }}>
                    3 New Chats
                  </Text>
                  <Text> · 1h</Text>
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic2.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Mickk</Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/delivered but not read.png")}
                  style={styles.previewIcon}
                />
                <Text style={styles.chatPreview}>Delivered · 2h · 4🔥</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic3.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>AJ</Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/delivered.png")}
                  style={styles.previewIcon}
                />
                <Text style={styles.chatPreview}>Delivered · 6h · 7🔥⌛</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic4.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Kevin</Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/delivered but not read.png")}
                  style={styles.previewIcon}
                />
                <Text style={styles.chatPreview}>Opened · 6h · 215🔥</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic5.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Serina</Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/delivered.png")}
                  style={styles.previewIcon}
                />

                <Text style={styles.chatPreview}>Delivered · 6h · 200🔥</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic6.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Tylor</Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/newfriend.png")}
                  style={styles.previewIcon}
                />
                <Text style={styles.chatPreview}>You are now friends 🎉</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/snap.png")}
              style={{
                width: 60,
                height: 30,
                marginRight: -12,
                marginHorizontal: 5,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic7.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Justin🥶 </Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/received.png")}
                  style={styles.previewIcon}
                />
                <Text style={styles.chatPreview}>Received · 2d</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic8.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Dana</Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/delivered2.png")}
                  style={styles.previewIcon}
                />
                <Text style={styles.chatPreview}>Opened · 3w</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/camera.png")}
              style={{ width: 24, height: 24 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.chatItem}>
          <View style={styles.chatLeft}>
            <View style={styles.avatar}>
              <Image
                source={require("../assets/images/pic9.jpg")}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Bobby</Text>
              <View style={styles.chatPreviewContainer}>
                <Image
                  source={require("../assets/images/delivered2.png")}
                  style={styles.previewIcon}
                />
                <Text style={styles.chatPreview}>Opened · 13w</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.chatIndicator}>
            <Image
              source={require("../assets/images/snap.png")}
              style={{
                width: 60,
                height: 30,
                marginRight: -12,
                marginHorizontal: 5,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },

  /* chat/friends list (Tram section)*/
  chatList: { flex: 1 },
  chatItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    height: 70,
  },
  chatLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 4,
  },
  chatPreview: {
    fontSize: 14,
    color: "#666",
  },
  chatIndicator: {
    marginLeft: 8,
  },
  unreadBadge: {
    fontSize: 18,
  },
  deliveredIcon: {
    fontSize: 18,
  },
  friendIcon: {
    fontSize: 18,
  },
  receivedIcon: {
    fontSize: 18,
  },
  previewIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  chatPreviewContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

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
});

export default Index;
