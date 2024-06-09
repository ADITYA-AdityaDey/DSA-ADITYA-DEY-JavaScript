//////////////////////////////// Time Complexity///////////////////////////

/*
    * what are the steps we need to remember when calculating the time complexity.

    1. Identify the number of Blocks

        --> Declearation  // Time Complexity will Constatnt [O(1)]
        --> Initialization // Time Complexity will Constatnt [O(1)]
        
        --> Iteratoins // Multiplication for nested loops
        --> Conditional // Max(if, else)


    2. Avoid Constants // 2n (here delete or remove 2 from 2n), n+1 (so, here remove +1 from n+1) etc
    3. Add time complexity of all blocks
    4. time complexity will be "highest Order" in equation




    **Imp note: // Dependet Iteration: 
                // Independent Iteration: Multiplication for nested loops
*/



/*
Example1: 
    for(let i=0; i<=n; i++)    ---------------- n+1 times (so remove constants from n+1 so, it become n)
                                                Time Complexity = O(n)
                                                amd also all of the following time complexity correct
                                                    {
                                                        O(n*2)
                                                        O(nlogn)
                                                        O(n*3)
                                                    } // because O(n) is the upper bound or worst case scenario for all of this
    {
        /////
        /////
    }

    // this types of time complexity is called as linear



Example2: 
    for(let i=1; i<=n; i=i*2)
    {
        /////
        /////
    }

    ----------------------------> i=1       0<=n
                                2=i=2       2<=n
                                2*2=i=4       4<=n
                                2*3=i=8       8<=n
                                2*4=i=16      16<=n
                                "
                                "
                                so, 2*k<=n
                                now avoid the constant 2*k=n {remove <}
                                so, 2*k=n
                                   time complexitu: k=log2n (2 is base here)
                                   so, its O(logn)
                        
// this types of time complexity is called as logarithmic


// if there is i=i*3 (or 4 or whatever) then its become k=log3n (3 is base here)



Example3:
    for(let i<=0; i==)----------------> n times
    {
        for(let j=o; j<=n; j++) -----------> n times
        {
            for(let k=0; k<=n; k++)
            {

            }
        }
        
    }

    ------------------------------> 
    // there is no dependency because n and j's both value is same that is n
    // here we have to multiply both the loops time complexity because it's not dependent it's independent
        so, time complexity: O(n * n * n)
                            = O(n*3) 
    // if there is only two loops then it becomes O(n * n)
                                                = O(n*2)


Example4:
    if(condition)
    {
        for(let i=0; i<=; i++) ---------------> n times 
        {}
    }
    else
    {
        for(let j=0; j<=n; j=j*2) ---------------> logn times
        {}
    }

                    // here now we choose the maximum fron above to loops complexity or blocks complexity
                        so, Time Complexity= O(n) // because if blocks tme complexity is maximum that is n



Example5:
    for(let i=0; i<=n; i++) -------------------> n times
    {
        for(let j=0; j<=n; j=j*2) ---------------> logn times
        {

        }
    }


        // here we need to multiply for nested loops because they are the Itteration and also not dependent and also not conditionals
            time complexity= O(n * logn)
                           = O(nlogn)



Example6:
    void main()
    {
        int i; ---------------------> it's Block1---------> 1 time
        i=0; -----------------------> it's Block2----------> 1 time
        for(i=0; i<=n; i++)-------------> it's Block3------> n+1 times
        {
            printf("Time Complexity");
        }
    }

        // so now we need to add the complexities off all the blocks
            time complexity= 1 + 1 + n + 1
                           = n + 3
                           = n // here remove the constant +3 from (n + 3) then it becomes n
                           = O(n)
*/