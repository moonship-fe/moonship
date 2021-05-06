class RenderService {
  constructor() {
    this.hooks = {
      renderElement: new AsyncHook([]),
      renderLeaf: new AsyncHook([]),
    };
  }
}

export default RenderService;
