const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true){
    this.direct = direct;
  }
  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let res = '';
    message = message.toLowerCase();
    key = key.toLowerCase();
    for (let i = 0; i < message.length; i) {
      for (let j = 0; j < key.length; j) {
        let delta = key.charCodeAt(j) - 97 //'a'.charCodeAt(0)
        let targetChar = message.charCodeAt(i) + delta;
        targetChar > 122 ? targetChar -= 26 : targetChar;
        if(message.charCodeAt(i) < 97 || message.charCodeAt(i) > 122) {
          res += message[i];
          j--
        } else {
          res += String.fromCharCode(targetChar)
        }
        console.log('i', i, 'j', j, 'res', res, 'targetChar', targetChar)
        i++;
        j++;
        if (i === message.length) {
          j = key.length
        }
      }
    }
    if (!this.direct) {return res.toUpperCase().split('').reverse().join('')}
    return res.toUpperCase()
  }
  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }
    let res = '';
    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.toLowerCase();
    for (let i = 0; i < encryptedMessage.length; i) {
      for (let j = 0; j < key.length; j) {
        let delta =  key.charCodeAt(j) - 97; //'a'.charCodeAt(0)
        let targetChar = encryptedMessage.charCodeAt(i) - delta;
        targetChar < 97 ? targetChar += 26 : targetChar;
        if(encryptedMessage.charCodeAt(i) < 97 || encryptedMessage.charCodeAt(i) > 122) {
          res += encryptedMessage[i];
          j--
        } else {
          res += String.fromCharCode(targetChar)
        }
        console.log('i', i, 'j', j, 'res', res, 'targetChar', targetChar)
        i++;
        j++;
        if (i === encryptedMessage.length) {
          j = key.length
        }
      }
    }
    if (!this.direct) {return res.toUpperCase().split('').reverse().join('')}
    return res.toUpperCase()
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
