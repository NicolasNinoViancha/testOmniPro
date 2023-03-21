import { StyleProp, ViewStyle } from "react-native";

type Error = {
    isError: boolean;
    error?: string;
}

export type PropsInput = {
    testID?: string;
    wrapper?: StyleProp<ViewStyle>;
    placeholder?: string;
    value?: string;
    error?: Error;
    onChange: (value: string) => void;
    onBlur: () => void;
}