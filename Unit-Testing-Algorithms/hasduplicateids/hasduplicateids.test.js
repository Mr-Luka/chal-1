const hasDuplicateIds = require('./hasduplicateids');

describe('DOM Tree Has Duplicate Ids', () => {
    let root;
    beforeEach(()=> { // hook, so we can run this before each test
        console.log('before each ran')
        root = document.createElement('div');
        const child1 = document.createElement('div'); 
        const child2 = document.createElement('div');

        root.appendChild(child1);
        root.appendChild(child2);
    });

    afterEach(()=> { // hook 
        console.log('after each ran')
        root = null; // reseting it after each test
    })
    it('should be a function', ()=> {
        expect(typeof hasDuplicateIds).toEqual('function')
    });

    it('should return a boolean', ()=> {
        expect(typeof hasDuplicateIds()).toEqual('boolean')
    });

    it('should return false if no root', ()=> {
        expect(hasDuplicateIds()).toBeFalsy();
    });

    it('should return true if there are duplicate IDs', ()=> {
        // Create mock elements
        // const root = document.createElement('div');
        // const child1 = document.createElement('div'); // they dont have to be divs
        // const child2 = document.createElement('div');

        // root.appendChild(child1);
        // root.appendChild(child2);

        // Add duplicate IDs
        root.id = 'root';
        root.children[0].id = 'child'; // since we are using hooks, its gonna be like this
// but before: child1.id = 'child';
        root.children[1].id = 'child';

        const result = hasDuplicateIds(root);

        expect(result).toEqual(true);
    });

        it('should return false if there are no duplicate IDs', ()=> {
        // Create mock elements
        // const root = document.createElement('div');
        // const child1 = document.createElement('div'); // they dont have to be divs
        // const child2 = document.createElement('div');

        // root.appendChild(child1);
        // root.appendChild(child2);

        // Add IDs
        root.id = 'root';
        root.children[0].id = 'child1';
        root.children[1].id = 'child2';

        const result = hasDuplicateIds(root);

        expect(result).toBeFalsy();
    });
})

/*
We repeat a lot ourselfs here, so to shorten the code and be cleaner, we can use hooks.
There is a hook called: before each.
*/