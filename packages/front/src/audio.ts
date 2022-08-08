class Audio {
  private audioContext: AudioContext
  private analyser: AnalyserNode

  constructor() {
    this.audioContext = new AudioContext()
    this.analyser = this.audioContext.createAnalyser()
  }

  setup(file: File) {
    const source = this.audioContext.createMediaStreamSource()
  )
  }
}
