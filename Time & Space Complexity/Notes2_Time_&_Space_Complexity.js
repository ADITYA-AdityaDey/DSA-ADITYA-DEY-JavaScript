////////////////////////////////// Time Complexity ////////////////////////////////

/*
Example 1:

    for (let i = 1; i <= n; i++){
        for (let j = i; j++){
            --------
            --------
        }
    }


// i = 1       | i = 2        | i = 3
   j = 1 time  | j = 2 times  | j = 3 times

so, 1time + 2times + 3 + 4 + ........ {so this is nothing but sum of n natural numbers}
    

    so, n(n + 1) / 2
       --> n*2 + n / 2
       --> n*2 {2 will be removed & highest order picked from (n*2 + n) that is n*2}

*/



/*
Example 2:

    for (let i = 1; i <= n / 2; i++){         ------------------> n / 2 times
        for (let j = 1; j <= n / 4){    ------------------------> n / 4 times
            ----
            ----
        }
    }


// so, there is no dependency that's why it would multiply between nested loops
                    O(n / 2 * n / 4)


*/