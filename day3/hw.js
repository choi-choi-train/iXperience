let fibsequence=[0, 1];

function print(input) {
    console.log(fibsequence[input]);
}

for (let i=0;i<10;i++) {
    if (i<=1) {
        print(i)
    }
    else {
        fibsequence.push(fibsequence[i-2]+fibsequence[i-1]);
        print(i);
    }
}