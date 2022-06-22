function avatarGenerator(name){
    const arr = name.split('')
    const logoSym = arr[0];
    // const backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
    const rndByte = () => Math.floor(Math.random() * 256);
    const backgroundColor = `${rndByte()},${rndByte()},${rndByte()}`;
    const logoColor = backgroundColor + ',.4';
    return {
        logoSym: logoSym,
        logoColor: logoColor,
        backgroundColor: backgroundColor
    }
}
export default avatarGenerator;


