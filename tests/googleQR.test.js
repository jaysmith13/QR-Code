const googleQR = require('./../externalAPIs/googleQR');
const assert = require('assert').strict;

describe('generateQR()', () => {
    beforeEach(function (){
        this.url = "www.google.com";
        this.color = "11111";
        this.height = "300";
        this.width = "300";
    });

    afterEach(function (){
        
    });

    it('throws error when url is missing', function () {
        const expectedError = new Error('Please enter a valid url');

        assert.throws(() => {
            googleQR.generateQR();
        }, expectedError);
    });

    it('generates the correct url when all arguments are provided', function () {
        const expectedQRUrl = `https://chart.googleapis.com/chart?cht=qr&chl="${this.url}"&chs=${this.height}x${this.width}&chco=${this.color}`;
        const qrUrl = googleQR.generateQR(this.url, this.height, this.width, this.color);

        assert.strictEqual(qrUrl, expectedQRUrl);
    });

    it('generates the correct url when color parameter is missing', function (){
        const expectedQRUrl = `https://chart.googleapis.com/chart?cht=qr&chl="${this.url}"&chs=${this.height}x${this.width}`;
        const qrUrl = googleQR.generateQR(this.url, this.height, this.width);

        assert.strictEqual(qrUrl, expectedQRUrl);
    });

    it('generates the correct url when height and width parameters are missing', function (){
        const expectedQRUrl = `https://chart.googleapis.com/chart?cht=qr&chl="${this.url}"&chs=200x200`;
        const qrUrl = googleQR.generateQR(this.url);

        assert.strictEqual(qrUrl, expectedQRUrl);
    });
});