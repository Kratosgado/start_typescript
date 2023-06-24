let w: unknown = 1;
w = "string";
w = {
    runANonExistentMethod: () => console.log("I think therefor I am")
} as { runANonExistentMethod: () => void }

if (typeof w === 'object' && w !== null) {
    (w as {
        runANonExistentMethod: Function
    }).runANonExistentMethod();
}