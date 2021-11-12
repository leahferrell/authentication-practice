import React, { useEffect, useRef } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import * as OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

import config from '../../config/config';

const Login = () => {
	const { oktaAuth } = useOktaAuth();
	const widgetRef = useRef();

	useEffect(() => {
		if (!widgetRef.current) {
			return false;
		}

		const { issuer, clientId, redirectUri, scopes } = config.okta;
		const widget = new OktaSignIn({
			baseUrl: issuer.split('/oauth2')[0],
			clientId,
			redirectUri,
			logo: `${process.env.PUBLIC_URL}/logo192.png`,
			i18n: {
				en: {
					'primaryauth.title': 'Sign in to React & Company',
				},
			},
			authParams: {
				issuer,
				scopes,
			},
			useInteractionCodeFlow: false,
			features: {
				registration: true
			}
		});

		widget.renderEl(
			{ el: widgetRef.current },
			(res) => {
				oktaAuth.handleLoginRedirect(res.tokens);
			},
			(err) => {
				throw err;
			},
		);

		return () => widget.remove();
	}, [oktaAuth]);

	return (
		<div>
			<div ref={widgetRef} />
		</div>
	);
};

export default Login;
