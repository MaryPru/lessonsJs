    function mySplice(arr, start, delCount,insertVal) {
       let result = [];
       let removed = [];

        for (let i = 0; i < start; i++) {
            result[i] = arr[i];
        }

        for (let i = 3; i < arguments.length; i++) {
            result.push(arguments[i]);
        }

        for (let i = start; i < start + delCount; i++) {
            removed.push(arr[i]);
        }

        for (let i = start + (delCount || 0); i < arr.length; i++) {
            result.push(arr[i]);
        }

        arr.length = 0;
        i = result.length;
        while (i--) {
            arr[i] = result[i];
        }

        return removed;
    }

    const arr=[1,2,3,4,5,6,7,8,9]

    console.log(mySplice( arr, 3, 2 ,7) );
    console.log( arr );