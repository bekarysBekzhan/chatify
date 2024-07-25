import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions, ActivityIndicator, Pressable, Modal, Text } from 'react-native';
import FastImage from 'react-native-fast-image';

const { width } = Dimensions.get('window');
const numColumns = 3;
const imageSize = width / numColumns;

const PhotosScreen = () => {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        fetchPhotos();
    }, [page]);

    const fetchPhotos = async () => {
        if (loading) return;
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=30`);
            const data = await response.json();
            setPhotos(prevPhotos => [...prevPhotos, ...data]);
        } catch (error) {
            console.error('Error fetching photos:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePhotoPress = (photo) => {
        setSelectedPhoto(photo);
        setModalVisible(true);
    }

    const renderItem = ({ item }) => (
        <Pressable onPress={() => handlePhotoPress(item)}>

            <View style={styles.item}>
                <FastImage
                    source={{ uri: item.thumbnailUrl }}
                    style={styles.image}
                    resizeMode={FastImage.resizeMode.cover}
                    defaultSource={{ uri: 'https://placehold.co/150x150?text=Hello+World' }} // Ensure you have a placeholder image
                />
            </View>
        </Pressable>
    );

    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <View>

            <FlatList
                data={photos}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={numColumns}
                contentContainerStyle={styles.container}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
            />

            {selectedPhoto && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <FastImage
                                style={styles.modalImage}
                                source={{ uri: selectedPhoto.url }}
                                //defaultSource={{ uri: 'https://example.com/default-image.png' }}
                                resizeMode={FastImage.resizeMode.contain}
                            />
                            <Text style={styles.description}>{selectedPhoto.title}</Text>
                            <Pressable
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            )}
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 5,
    },
    item: {
        flex: 1,
        margin: 5,
    },
    image: {
        width: imageSize - 10,
        height: imageSize - 10,
        borderRadius: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
    },
    modalImage: {
        width: 250,
        height: 250,
    },
    description: {
        marginVertical: 10,
        textAlign: "center",
    },
    closeButton: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "#005187",
        borderRadius: 5,
    },
    closeButtonText: {
        color: "#fff",
    },
});

export default PhotosScreen;
