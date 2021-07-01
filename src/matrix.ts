/**
 * EXAMEN JULIO DSI, EJERCICIO 1
 * Andrea Calero Caro alu0101202952
 */

/**
 * @Class Matrix, define una matrix, cogiendo por filas y columnas
 * y rellenando la misma
 */
export class Matrix{
  private matrix : Array<Array<number>> =  new Array<Array<number>>();
  private rows :number;
  private columns :number;

  /**
   * Contructor de la matrix, inicializa los valores de filas, columnas y el valor 
   * que irá en dichas coordenadas
   * @param rows 
   * @param columns 
   * @param value 
   */
  public constructor(rows:number,columns:number,value:number){
    this.rows = rows;
    this.columns = columns;
    this.initRows(rows);
    this.initColumns(columns,value);
  }

  /**
   * Inicialización de filas,
   * @param rows filas que asignar
   * @returns 
   */
  private initRows(rows:number):void{
    if(rows < 1) {
      return;
    }
    for(let i = 0 ; i < rows ; i ++){
      this.matrix.push(new Array<number>());
    }
  }

  /**
   * Inicialización de columnas,
   * @param columns columnas que asignar
   * @param value que se introduce ya sabiendo el tamaño
   * @returns 
   */
  private initColumns(columns:number,value:number):void{
    if(columns < 1){
      return;
    }
    for(let i = 0 ; i < this.matrix.length ; i ++){
      for(let j = 0 ; j < columns ; j ++){
        this.matrix[i].push(value);
      }
    }
  }

  public getRows(matrix: Matrix){
    return this.rows;
  }
  public getCols(matrix: Matrix){
    return this.columns;
  }

  /**
   * Getter, coge el valor de la fila y columna dnde estoy y devuelve el valor
   * @param rows recibe la fila donde se indica el valor a devolver
   * @param columns recibe la columna donde se indica el valor a devolver
   * @returns el valor correspondiente a esa posición a devolver
   */
  public getValue(rows:number,columns:number):number{
    // Fuera de rango
    if(rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns){
      return 0;
    }
    // Construyo la matrix
    return this.matrix[rows][columns];
  }

  /**
   * Setter, coge el valor de la fila y columna donde estoy e introduce el valor
   * @param rows recibe la fila se indica el valor a introducir
   * @param columns recibe la columna donde se indica el valor a introducir
   * @param value el valor correspondiente a esa posición a introducir
   */
  public setValue(rows:number,columns:number,value:number):void{
    // En caso de fuera de rango no introduce nada
    if(rows < 0 || columns < 0 || rows >= this.rows || columns >= this.columns){
      return ;
    }
    // Se crea la matriz donde se indicó asignándole un valor a esa coordenada
    this.matrix[rows][columns] = value;
  }

  /**
   * Getter, devuelve la matrix ya contruída
   * @returns la matrix
   */
  public getArray():Array<Array<number>>{
    return this.matrix;
  }

}//Fin clase matrix