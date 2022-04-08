class SyntheticEvent {
  constructor(e) {
    this.nativeEvent = e;
  }
  stopPropagation() {
    this._stopPropagation = true;
    if (this.nativeEvent.stopPropagation) {
      this.nativeEvent.stopPropagation();
    }
  }
}

export default SyntheticEvent;
