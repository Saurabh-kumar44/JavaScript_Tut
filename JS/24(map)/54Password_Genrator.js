class Password {
    constructor(level) {
      this.level = level;
      this.length = this.getPasswordLength(level);
      this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
      this.numbers = '0123456789';
      this.special = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }
  
    generatePassword() {
      let password = '';
      let charTypes = this.getPasswordCharTypes(this.level);
      let charSet = this.getPasswordCharSet(charTypes);
      for (let i = 0; i < this.length; i++) {
        let randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
      }
      return password;
    }
  
    getPasswordLength(level) {
      switch (level) {
        case 'simple':
          return 4;
        case 'tough':
          return 6;
        case 'super-hard':
          return 8;
        default:
          return 0;
      }
    }
  
    getPasswordCharTypes(level) {
      switch (level) {
        case 'simple':
          return ['lowercase', 'uppercase', 'numbers'];
        case 'tough':
          return ['lowercase', 'uppercase', 'numbers', 'special'];
        case 'super-hard':
          return ['lowercase', 'uppercase', 'numbers', 'special'];
        default:
          return [];
      }
    }
  
    getPasswordCharSet(charTypes) {
      let charSet = '';
      for (let type of charTypes) {
        switch (type) {
          case 'lowercase':
            charSet += this.alphabet;
            break;
          case 'uppercase':
            charSet += this.alphabet.toUpperCase();
            break;
          case 'numbers':
            charSet += this.numbers;
            break;
          case 'special':
            charSet += this.special;
            break;
          default:
            break;
        }
      }
      return charSet;
    }
  }
  
  const form = document.querySelector('form');
  const result = document.querySelector('.result');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const level = form.level.value;
    const password = new Password(level).generatePassword();
    result.innerHTML = `<p>Your ${level} password is:</p><h2>${password}</h2>`;
    form.reset();
  });
  