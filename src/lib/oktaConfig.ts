export const oktaConfig = {
    clientId: '0oadcc9kyez5ItUXq5d7',
    issuer: 'https://dev-93883450.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true, 
    disableHttpsCheck: true,
}