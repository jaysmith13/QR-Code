const googleAPIURL = 'https://chart.googleapis.com/chart?cht=qr';

module.exports = {
    generateQR(data, height, width, color){
        if(!data) {
            throw new Error('Please provide a valid URL');
        }
        return `${googleAPIURL}&chl="${data}"${height && width ? "&chs=" + height + "x" + width :"&chs=200x200"}${color?"&chco=" + color :""}`;
    } 
}