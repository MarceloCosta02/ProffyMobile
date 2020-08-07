import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles'

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}> 
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/MarceloCosta02.png'  }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Marcelo de Lucca</Text>
                    <Text style={styles.subject}>Programação</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Analista de Sistemas com experiência na plataforma .Net da Microsoft, e também nas Linguagens Java, C, Html, CSS, Javascript, JQuery, React Native e Bancos SQL/NoSQL. 
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[ styles.favoriteButton, styles.favorited ]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unFavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}

export default TeacherItem;