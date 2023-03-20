import React, { useState } from 'react';
import { View } from 'react-native';
//additional libraries
import FastImage from 'react-native-fast-image';
//additional components
import Icon from '../Icon';
//models
import { PropsImage } from './models';
//styles
import { styles } from './styles';
import { COLORS } from '@app/theme';
//Component
const Image = ({
    source = '',
    resizeMode = 'cover'
}: PropsImage) => {
    //states
    const [errorImage, setErrorImage] = useState<boolean>(false);
    //funtions
    //description : Image upload error detection
    const onError = () => setErrorImage(true);
    //main Component
    if (!source || errorImage)
        return (
            <View style={styles.container}>
                <Icon
                    testID='iconCrash'
                    name={''}
                    size={30}
                    color={COLORS.gray} />
            </View>
        );
    return (
        <FastImage
            testID={'componentFastImage'}
            onError={onError}
            style={styles.container}
            source={{
                uri: source,
                priority: FastImage.priority.normal,
            }}
            resizeMode={resizeMode} />
    );
};
export default Image;
