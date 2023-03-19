import React from "react";
import Home from '@app/features/Home/container';
import { PropsHome } from '@app/features/Home/models';

const HomeScreen = (props: PropsHome) => (<Home {...props} />);

export default HomeScreen;