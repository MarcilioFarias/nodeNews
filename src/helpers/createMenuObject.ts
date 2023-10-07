//a opcao vazia serve para quando utilizar a searchbar
type MenuOptions = ''| 'home'|'aboutus'|'services'| 'external'

export const createMenuObject = (activeMenu: MenuOptions) => {
    
    let returnObject = {
        home: false,
        aboutus: false,
        services: false,
        external: false
    };

    if(activeMenu !== '') {
        returnObject[activeMenu] = true;
    }

    return returnObject;
}