// import tensorflow and register it as the backend
import * as tf from '@tensorflow/tfjs'
import { LinearRegression, setBackend } from 'scikitjs'
setBackend(tf)

// Perform a linear regression
let X = [
  [2, 3],
  [1, 4],
  [5, 7]
]

export const main = async () => {
    let y = [10, 14, 20]

    let lr = new LinearRegression()
    await lr.fit(X, y)
    console.log(lr.coef)
}
