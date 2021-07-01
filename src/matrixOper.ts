/**
 * EXAMEN JULIO DSI, EJERCICIO 1
 * Andrea Calero Caro alu0101202952
 */

import { Matrix } from "./matrix";

/**
 * Función de suma de matrices
 * @param arr1 matriz 1
 * @param arr2 matriz 2
 */
export function addMatrix(arr1 = [], arr2= []){
  let resultMatrix = [];
  for (let i=0; i<arr1.length;i++){
    resultMatrix[i] = arr1[i]+arr2[i];
  }
  return resultMatrix;
}

/**
 * Función de resta de matrices
 * @param arr1 
 * @param arr2 
 */
export function subMatrix(arr1 = [], arr2= []){
  let resultMatrix = [];
  for (let i=0; i<arr1.length;i++){
    resultMatrix[i] = arr1[i]-arr2[i];
  }
  return resultMatrix;
}

/**
 * Función de producto escalar por un operator
 * @param arr1 
 * @param operator 
 */
export function pescMatrix(arr1 = [], operator: number){
  let resultMatrix = [];
  for (let i=0; i<arr1.length;i++){
    resultMatrix[i] = arr1[i]*operator;
  }
  return resultMatrix;
}

/**
 * Multiplicación matricial tradicional
 * @param arr1 
 * @param operator 
 * @returns 
 */
export function multiMatricialTrad(arr1 = [],  arr2= []){
  //let resultMatrix = [];
  // Primero tengo que comprobar que una sea por ejemplo 2*3 y otra 3*2
  for (let i=0; i < arr1.length; i++) {
    for (let j=0; j < arr1.length; j++) {                                
      for (let k=0; k<arr2.length; k++) {
        //resultMatrix = arr1 [i][j] + arr2[i][k]*arr2[k][j]; 
      }
    }
  }
  //return resultMatrix;
}

