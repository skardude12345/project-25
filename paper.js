class Paper extends BaseClass {
    constructor(x, y, radius, options) {
      super(x, y, radius, options);

      this.body = Bodies.circle(x, y, radius, options);
     
    }
  }

