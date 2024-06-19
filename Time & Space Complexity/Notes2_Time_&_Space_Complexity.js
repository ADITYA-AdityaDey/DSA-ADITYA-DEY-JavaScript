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



// ***** Nested Loops ------->  1. Dependency [Trace & Find]  2. No Dependency [Multiply Time Complexity  of each block]



/* 
Example 3:

    for (let i = n, let j = 0; i <= i / 2; j = j + 1)
    {
        ----
        ----
    }

//so here, i = n           n > 0            j = 0
           i = n / 2       n / 2 > 0        j = 1
           i = n / 4       n / 4 > 0        j = 2
           i = n / 8       n / 8 > 0        j = 4
           
           so, eerytime n value reduced by 1/2
            n / 2*k >= 0
            n = 2*k
            k = log2n (log base2 n)

            so, Time Complexity => O(log2n)

*/



// *** Always focuson Conditions for example (i > 0) not others like j=j+1  (----> this is from Example 3)
// because conditions (i > 0) is the reason for itterartion



/*
Example 4:

    for (let i = 0; let j = n; j > 0; i = i / 2; j = j + 1){
        ------
        ------
    }


// so here, i=0             n>0         j=n
            i=i/2           n+1>0       j=n+1
            i=i/4           n+2>0       j=n+2
                            n+3>0       j=n+3
                            it's go for infinite times
                            so it's a Infine Loop


                    ----> Time Complexity (of Infinite Loop is always Undetermined) => Undetermined

*/



/*
Example 5:

    for (let i = 1; i <= n; i = i *  2){     -------------------> Time Complexity = log2n
        for (let j = 1; j <= n; j = j + 2){  --------------------> Time Complexity = n (from n / 2 remove the constants 2 so it's become n)
            --------
            --------
        }
    }

            // Time Complexity = O(nlog2n) [Multiplication for indepedent itteration]

*/



/*
Example 6:

    let i = 1;
    let k = 1;

    while(k <= n){
        i = i + 1;
        k = k + 1;
    }


    // so here, is  dependency

        i=1         
        k=1         1<=n ----------> 1


        i=2         
        k=3         3<=n ----------> 2+1


        i=3         
        k=6        6<=n ------------> 3+2+1


        i=4
        k=10       10<=n ------------> 4+3+2+1

        and so on........


        so here, i(i+1)/2 <= n (some of n natural numbers)(removethe constant that is /2)
                 i*2 + i <= n

                 i*2 = n (consider the highest grade that is i*2 from i*2 + i)
                 i= (root n)


            so, Time Complexity is O(root n)

*/