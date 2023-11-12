import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { SpinnerLoading } from '../layouts/Utils/SpinnerLoading';
import { oktaConfig } from '../lib/oktaConfig';
import OkstaSignInWidget from './OktaSignInWidget';

const loginWidget = ({config}) => {
    const { oktaAuth, authState } = useOktaAuth();
    const onSuccess = (tokens) => {
        oktaAuth.handleLoginRedirect(tokens);
    };

    const onError = (err) => {
        console.log('Sign in error: ', err);
    }

    if (!authState) {
        return(
            <SpinnerLoading/>
        );

    }

    return authState.isAuthenticated ?
    <Redirect to={{pathname: '/'}}/>
    :
    <OkstaSignInWidget config={oktaConfig} onSuccess={onSuccess} onError={onError}/>
};

export default loginWidget;