import {bisect} from "./src/bisect";
import {nelderMead} from "./src/nelderMead";
import {conjugateGradient, conjugateGradientSolve} from "./src/conjugateGradient";
import {gradientDescent, gradientDescentLineSearch} from "./src/gradientDescent";
import {zeros, zerosM, norm2, weightedSum, scale} from "./src/blas1";

export default({
    bisect: bisect,
    nelderMead: nelderMead,
    conjugateGradient: conjugateGradient,
    conjugateGradientSolve: conjugateGradientSolve,
    gradientDescent: gradientDescent,
    gradientDescentLineSearch: gradientDescentLineSearch,
    zeros: zeros,
    zerosM: zerosM,
    norm2: norm2,
    weightedSum: weightedSum,
    scale: scale
});