let z = 1;

function Factorialize(n) {
    if (n < 0) {
        return "the negative doesn't have Factorize";
    } else
        for (let i = 1; i <= n; i++) {
            z = z * i;
        }
    return z;

}

console.log(Factorialize(1));

/*

n = 5 

i = 1 => z =  1 * 1  = 1
i = 2 => z =  1 * 2  = 2 
i = 3 => z =  2 * 3  = 6
i = 4 => z =  6 * 4  = 24 
i = 5 => z = 24 * 5 = 120

*/