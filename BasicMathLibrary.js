// YOU CAN ASSUME FOLLOWING ALWAYS GET AN INTEGER and return an INTEGER

class Dan {

    static add(num1, num2){
        return num1 + num2
    }

    // ---------------------------------------------------------------------
    static subtract(num1, num2){
        return num1 - num2
    }
    // ---------------------------------------------------------------------
    static multiply(num1, num2){
        return num1 * num2
    }
    // ---------------------------------------------------------------------
    static power(num, power){ 
        let xspot = 1

        if(power === 0 || power === -0){
            return 1
        } else if (power < 0){
            for (let counter = 0; counter < -power ; counter++ ){
            xspot = xspot * num
            }
        return 1 / xspot
        }
        else{
        for (let counter = 0; counter < power ; counter++ )
            xspot = xspot * num
        return xspot
        }
    }
    // ---------------------------------------------------------------------
    static abs(num) {
        if (num < 0){
                num = num * -1
                console.log(num)
                return num
            }
            else{
                console.log(num)
                return num
            }
        }
    // ---------------------------------------------------------------------
    static mod(num1, num2){
        if (num2 === 0 || num2 === -0){
            return undefined
        }
        let result = num1

        if (num2 < 0)
            num2 = -num2

        while (result >= num2) {
            result -= num2
        }

        if (num1 < 0){
            while (result < 0){
                result += num2
            }
        }
        return result
    }

    // ---------------------------------------------------------------------
    static fac(num1){
        let storedvalue = 1

        if (num1 < 0){
            return undefined
        }
        if (num1 === 0){
            return(1)
            } 
        else{
            for (let counter = 1; counter <= num1; counter++ ){
                storedvalue = storedvalue * counter
            } 
            return(storedvalue)
            } 
    }


    // ---------------------------------------------------------------------
    // YOU CAN ASSUME FOLLOWING ALWAYS GET A DECIMAL NUMBER and return an INTEGER

    static round(num1){
        let storedint = num1

        if (num1 < 0){
            num1 = num1 * -1
            storedint = storedint * -1
            while (num1 > 1){
                num1--
            }
            storedint = storedint - num1
            if (num1 >= .5){
            storedint = storedint * -1
            }
            else{
                storedint = storedint * -1  
            }
            }

        else if (num1 > 0){
            while (num1 > 1){
                num1--
            }
            storedint = storedint - num1
            if (num1 >= .5){
            storedint++
            }
            }
        if (storedint === -0){
            storedint = 0
            }
        return storedint
    }

    // ---------------------------------------------------------------------
    static ceil(num1){
        let storedint = num1

        if (num1 < 0){
            num1 = num1 * -1
            storedint = storedint * -1
            while (num1 > 1){
                num1--
            }
                storedint = storedint - num1
                // storedint--
                storedint = storedint * -1
            }
            
        else if (num1 > 0){
            while (num1 > 1){
                num1--
            }
                storedint = storedint - num1
                storedint++
            }
        if (storedint === -0){
            storedint = 0
            }
        return storedint
    }

    // ---------------------------------------------------------------------
    static floor(num1){
        let storedint = num1

        if (num1 < 0){
                num1 = num1 * -1
                storedint = storedint * -1
                while (num1 > 1){
                    num1--
            }
                storedint = storedint - num1
                storedint++
                storedint = storedint * -1
            }
            
        else if (num1 > 0){
            while (num1 > 1){
                num1--
            }
                storedint = storedint - num1
            }
            if (storedint === -0){
                storedint = 0
            }
        return storedint
}


}

module.exports = Dan