const soma = require("./soma")
const { expect } = require('chai');

describe('Soma', ()=>{
    it('adds 1 + 2 to equal 3', () => {
        expect(soma(1, 2)).to.be.equal(3);
    });
})