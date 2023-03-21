import React from "react";
import Contact from '@app/features/Contact/container';
import { PropsContact } from '@app/features/Contact/models';

const ContactScreen = (props: PropsContact) => (<Contact {...props} />);

export default ContactScreen;