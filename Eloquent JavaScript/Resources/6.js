/* ------------------------- The iterator interface ------------------------- */

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        // Array to matrix conversion
        for(let y = 0; y < height; y++) {
            for(let x = 0; x < width; x++) {
                this.content[y * width + x] = element(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }

    static show(matrix) {
        let width = matrix.width
        let height = matrix.height

        for(let y = 0; y < height; y++) {
            let row = "";

            for(let x = 0; x < width; x++) row += matrix.get(x, y) + " ";
            console.log(row);
        }
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if(this.y == this.matrix.height) return {done: true}; // Reaches the size of the rows, which means the end of the matrix
        else {
            let value = {x: this.x, y: this.y, value: this.matrix.get(this.x, this.y)};

            this.x++;

            if(this.x == this.matrix.width) { // Reaches the columns size
                this.x = 0;
                this.y++;
            }
            return {value, done: false};
        }
    }
}

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
};

// Test---
// let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
// for(let {x, y, value} of matrix) {
//     console.log(x, y, value);
// }

/* ------------------------------- Inheritance ------------------------------ */

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if(x < y) return element(y, x); // Lower diagonal
            else return element(x, y); // Upper diagonal (and the diagonal)
        });
    }

    set(x, y, value) {
        super.set(x, y, value);

        if(x != y) { // This conditional makes sure that the matrix stays symmetric
            super.set(y, x, value);
        }
    }
}

let size = 3
let symmetricMatrix = new SymmetricMatrix(size, (x, y) => `(${x}, ${y})`);
Matrix.show(symmetricMatrix)


function symmetryChecker(matrix) {
    let symmetric = true;

    for(let y = 0; y < size; y++) {
        for(let x = 0; x < size; x++) {
            if(!matrix.get(x, y) == matrix.get(y, x)) symmetric = false;
        }
    }
    return symmetric
}

// Test---
// console.log(symmetryChecker(symmetricMatrix))