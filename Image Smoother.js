function imageSmoother(img) {
    let ans = []
    for (let i = 0; i < img.length; i++) {
        let row = []
        for (let j = 0; j < img[0].length; j++) {
            //center
            let total = img[i][j]
            let count = 1 //count is 1 since center is always included
            //top-left
            if (i > 0 && j > 0) {
                count++
                total += img[i - 1][j - 1]
            }
            //top
            if (i > 0) {
                count++
                total += img[i - 1][j]
            }
            //top-right
            if (j < img[0].length - 1 && i > 0) {
                count++
                total += img[i - 1][j + 1]
            }
            //left
            if (j > 0) {
                count++
                total += img[i][j - 1]
            }
            //right
            if (j < img[0].length - 1) {
                count++
                total += img[i][j + 1]
            }
            //btm-left
            if (j > 0 && i < img.length - 1) {
                count++
                total += img[i + 1][j - 1]
            }
            //btm
            if (i < img.length - 1) {
                count++
                total += img[i + 1][j]
            }
            //btm-right
            if (i < img.length - 1 && j < img[0].length - 1) {
                count++
                total += img[i + 1][j + 1]
            }
            row.push(Math.floor(total / count))
        }
        ans.push(row)
    }
    return ans
}

console.log(imageSmoother([1, 1, 1], [1, 0, 1], [1, 1, 1]));