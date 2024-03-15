export class HashTable {
    constructor(size=53) {
        this.keyMap = Array.from({ length: size }, () => []);
    }

    _hash(key) {
        let total = 0;
        let WIRED_PRIME_NUMBER = 31;
        const numberOfIterations = Math.min(100, key.length);
        const arrayLength = this.keyMap.length;
        for(let index = 0; index < numberOfIterations; index++) {
            const char = key[index];
            const value = char.charCodeAt(0) - 96;
            total = ((total * WIRED_PRIME_NUMBER) + value) % arrayLength;
        }
        return total;
    }

    set(key, value) {
        const hash = this._hash(key);
        const val = this.keyMap[hash];

        for(let index = 0; index < val.length; index++) {
            const item = val[index];
            if(item[0] === key) {
                item[1] = value;
                return;
            }
        }

        val.push([key, value]);
    }

    get(key) {
        const hash = this._hash(key);
        const val = this.keyMap[hash];
        for(let index = 0; index < val.length; index++) {
            const item = val[index];
            if(item[0] === key) {
                return item[1];
            }
        }

        return undefined;
    }

    keys() {
        return this.keyMap.flatMap(bucket => bucket.map(([key]) => key));
    }

    values() {
        return this.keyMap.flatMap(bucket => bucket.map(([, value]) => value))
    }
}