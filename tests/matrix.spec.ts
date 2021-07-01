import 'mocha';
import { expect } from 'chai';
import {Matrix} from '../src/matrix';

// Matrix 2*2
let matrix1 = new Matrix(2,2,4);

describe('Test Matrix', () => {
  it('matrix1.setValue() introduce value en la fila y columna', () => {
    return expect(matrix1.setValue(2,2,4)).to.be.equal(undefined);
  })
  it('matrix1.getValue() returns value en la fila y columna', () => {
    return expect(matrix1.getValue(2,2)).to.be.equal(0);
  })
  it('matrix1.getArray() returns array', () => {
    return expect(matrix1.getArray()).to.be.equal([ [ 4, 4 ], [ 4, 4 ] ]);
  })
});

