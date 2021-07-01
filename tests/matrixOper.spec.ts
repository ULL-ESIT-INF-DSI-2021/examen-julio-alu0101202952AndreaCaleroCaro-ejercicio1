import 'mocha';
import { expect } from 'chai';
import {addMatrix} from '../src/matrixOper';
import {Matrix} from '../src/matrix'

// Matrix 2*2
let matrix1 = new Matrix(2,2,4);
let matrix2 = new Matrix(2,2,1);

describe('Test Matrix operaciones', () => {
  it('matrix1.addMatrix() introduce value en la fila y columna', () => {
    return expect(matrix1.setValue(2,2,4)).to.be.equal(undefined);
  })
});