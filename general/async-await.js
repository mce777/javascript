// Promise used with async/await
// nice and concise
function async test() {
    const pr = new Promise(/* ... */);
    const value = await pr();

    return await value();
}

try {
    const result = await test();
} catch (e) {
    console.error(e);
}

// below, without async/await
// heading toward xmas tree of doom
function test(callback) {
    const pr = new Promise(/* ... */);

    return pr
        .then((value) => {
            value
                .catch((e) => {
                    console.error(e);
                });
        })
        .catch((e) => {
            console.error(e);
        });
}

test().then((result) => {
    // ...
});
