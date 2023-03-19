export type PropsCustomTab = {
    state: any;
    descriptors: any;
    navigation: any;
}

export type Screens = {
    Home: string;
    Contact: string;
}

export type PropsButtonTap = {
    testID?: string;
    isFocused?: boolean;
    icon: string;
    options: any;
    onPress: () => void;
}