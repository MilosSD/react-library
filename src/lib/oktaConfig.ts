export const oktaConfig = {
    clientId: '0oad8j0cp8d1NLpw75d7',
    issuer: 'https://dev-93883450.okta.com/oauth2/default',
    redirectUris: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true, 
    disableHttpsCheck: true
}