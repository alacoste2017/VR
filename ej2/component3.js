AFRAME.registerComponent('hello', {
    schema: {
        message: {type: 'string', default: 'Hello!'},
        msg2: {type: 'string', default: 'goodbye!'}
      },

    init: function () {
        console.log(this.data.message);
        console.log(this.data.msg2);
    }
  });