AFRAME.registerComponent('hello', {
    schema: {
        message: {type: 'string', default: 'Hello!'},
        event: {type: 'string', default: ''},
      },

    init: function () {
      var data = this.data;  // Component property values.
      var el = this.el;  // Reference to the component's element(entity).
                        // eso se hace porque en adeventlistener 'this' deja de valer lo que suele valer
                        // cada vez que usemos un manejador hay que hacer esas variables a parte
  
      if (data.event) {
        // This will log the `message` when the entity emits the `event`.
        el.addEventListener(data.event, function () {
          console.log(data.message);
        });
      } else {
        // `event` not specified, just log the message.
        console.log(data.message);
      };
    }
  });