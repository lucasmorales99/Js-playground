export interface User {
    name: string
    email: string
}

class Person {
    name: string
    birthday: Date
}

function main(data: User | Person) {
    if (data instanceof User) {
        
    } else {
        
    }
}

function test(data: User & Person) {
    
}

function test2(str: string, { flag1 = false, flag2 = '' } = {}) {
    
}

test2('', { flag1: true, flag2: '' })

