import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // ChatRoom screen
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {

  },
  chatItem: {
    alignSelf: 'flex-end',
    backgroundColor: '#75ff8a',
    padding: 8,
    maxWidth: '60%',
    borderRadius: 7,
    margin: 10,
  },
  chatItemOther: {
    alignSelf: 'flex-start',
    backgroundColor: '#7499ff',
    padding: 8,
    maxWidth: '60%',
    borderRadius: 7,
    margin: 10,
  },
  chatText: {
    fontSize: 13,
    textAlign: 'left',
  },
  chatTime: {
    textAlign: 'right',
    fontSize: 9,
    color: 'gray',
    marginTop: 4,
  },
  messageInputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'dddddd',
    marginBottom: 20,
  },
  messageInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  messageIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginHorizontal: 8,
  },
  sendButton: {
    backgroundColor: '#0066b2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  ordinaryText: {
    textAlign: 'center',
    color: 'white',
  },
  header: {
    paddingVertical: 50,
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-between",
    paddingBottom: 20,
    paddingTop: 60,
    backgroundColor: "#734DDE"
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
    marginLeft: 15
  },
  headerIcons: {
    marginRight: 10,
  },
  flexRowAlignCenterGapTen: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },

  // Option Styles
  paddingTen: {
    padding: 10,
  },
  storyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 20
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  optionText: {
    fontSize: 15,
  },

  // Chat List Styles
  chatList: {
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  },

  // ChatScreen Styles
  requestContainer: {
    marginVertical: 12,
  },
  mediumBoldText: {
    fontSize: 15,
    fontWeight: "500",
  },
  userChatImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  subText: {
    marginTop: 4,
    color: "gray",
  },
  acceptButton: {
    padding: 8,
    backgroundColor: "#005187",
    width: 75,
    borderRadius: 5,
  },
  acceptButtonText: {
    fontSize: 13,
    textAlign: "center",
    color: "white",
  },

  // Button Styles 
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  // GroupScreen screen
  channelContainer: {
    margin: 10,
    padding: 20,
    width: 350,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 15,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  channelInfo: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  smallImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  channelName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  channelText: {
    marginTop: 4,
    color: "gray",
  },

  // LoginScreen screen
  signContent: {
    padding: 10,
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  inputContainer: {
    marginTop: 50,
  },
  firstInputLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
    marginTop: 25
  },
  textInput: {
    width: 320,
    marginTop: 15,
    borderBottomColor: "#BEBEBE",
    borderBottomWidth: 1,
    paddingBottom: 10,
    fontFamily: "GeezaPro-Bold",
    fontSize: 15,
  },
  signButton: {
    width: 200,
    backgroundColor: "#4A55A2",
    padding: 15,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 6,
  },
  signButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  signOptionText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
    margin: 12,
  },
  imageContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 140,
    height: 170,
  },

  // PeopleScreen screen
  headerText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 12,
  },

  // ProfileScreen screen
  profileContainer: {
    margin: 20,
    padding: 20,
    width: 350,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    width: '100%',
    gap: 12,
  },
  line: {
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    marginVertical: 10,
    width: '100%'
  },
  profileIconContainer: {
    marginRight: 10,
  },
  icon: {
    fontSize: 30,
  },
  flexone: {
    flex: 1,
  },
  boldText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },


  // RegisterScreen screen
  subTitle: {
    marginTop: 10,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 12,
  },
  profileImageContainer: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageText: {
    textAlign: "center",
    marginTop: 4,
    color: "gray",
    fontSize: 12
  },
  textInputContainer: {
    marginTop: 30,
  },


  // RequestChatRoom screen
  chatHeaderTitle: {
    fontSize: 16,
  },
  chatIcon: {
    marginRight: 10,
  },

  // Chat component
  marVer15: {
    marginVertical: 15
  },
  mediumImage: {
    width: 50,
    height: 50,
    borderRadius: 30
  },

  // User component
  chatButton: {
    padding: 10,
    width: 80,
    backgroundColor: "#005187",
    borderRadius: 4
  },
  peopleChatContainer: {
    padding: 10,
    marginTop: 10
  },

  // UserProfile component
  userProfileContainer: {
    padding: 10,
    marginTop: 10,
    marginLeft: 20
  },
  userProfileName: {
    fontSize: 18, 
    fontWeight: "600", 
    color: "black"
  }
});


export default styles;


