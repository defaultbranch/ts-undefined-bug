function example(data: { [key: string]: string }) {

    const value = data['A'] satisfies string;
    // ok for TypeScript 5.3.2;
    // but value could be undefined, so this should fail!

    console.log(typeof (value));
}

// execute it
example({ 'my-key': 'my-value' });
