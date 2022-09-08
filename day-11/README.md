# Time and Space complexity

### Asymptotic Notations

`Big O —> checks worst case scenario`

`Omega —> checks best case scenario`

`Theta —> checks average case scenario`

Always check code in worst case scenario.

## Analysis

- **Apostiary Analysis** —> depends on language of compiler and type of hardware.
- **Apriori Analysis —**> It is independent of compiler and hardware. it just focus on logic.
- Apriori Analysis
    
    Order of magnitude of a statement.
    

## Big-Oh O(n)
- x=y+z —> O(1) No loop at all.
- `for i in range(0,n-1):` only one for loop —> O(n)
- `for i in range(0,n-1):`
    
         `for j in range(0,m-1):`
    
                `x=y+z`
    
    O($n^2$) for the above code.
    
- `while(i<1):`
    
    `i=i-3`
    
    `print(”sucess”)`
    
    O($n/3$)
    

> Note: Time complexity is loop only so we need to write code with less loops.
> 
- `i=1`
    
    `while(i<m):`
    
    `i=2*i`
    
    `print(i)`
    

O($logn$) with base 2

- `i=n`
    
    `while(i>2):`
    
            $`i=i^1/2`$
    
    ![Screenshot 2022-08-27 at 4.46.12 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b4268e46-fe45-468c-a50e-9acb9dee1f12/Screenshot_2022-08-27_at_4.46.12_PM.png)
    

O($log(logn)$)

> Note to know big oh substitute a value to n such as 64 or 10.
>
