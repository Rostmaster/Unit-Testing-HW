const validate_choice = (user1Choice, user2Choice) => {
    if (!user1Choice ||!user2Choice){
        throw new TypeError('TypeError');
    }
    if (user1Choice !== 'rock' && user1Choice !== 'scissors' && user1Choice !== 'paper') {
        throw new TypeError('SyntaxError');
    }
    if (user2Choice !== 'rock' && user2Choice !== 'scissors' && user2Choice !== 'paper') {
        throw new TypeError('SyntaxError');
    }
}

const get_result = (user1Choice = null, user2Choice = null) => {

    validate_choice(user1Choice, user2Choice)

    switch (user1Choice) {
        case 'rock':
            switch (user2Choice) {
                case 'rock':
                    return 'draw';
                case 'scissors':
                    return 'user 1';
                case 'paper':
                    return 'user 2';
            }
            break;
        case 'scissors':
            switch (user2Choice) {
                case 'rock':
                    return 'user 2';
                case 'scissors':
                    return 'draw';
                case 'paper':
                    return 'user 1';
            }
            break;
        case 'paper':
            switch (user2Choice) {
                case 'rock':
                    return 'user 1';
                case 'scissors':
                    return 'user 2';
                case 'paper':
                    return 'draw';
            }
            break;
    }
}

module.exports = {get_result};
