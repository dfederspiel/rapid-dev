export default new class Services {
    getAppState = () => {
        // Local storage for app state
        var appState = {
            sideNav: {
                expanded: true
            }
        };

        if (localStorage.alloya)
            appState = JSON.parse(localStorage.alloya);
        else
            localStorage.alloya = JSON.stringify(appState);

        return appState;
    }
}