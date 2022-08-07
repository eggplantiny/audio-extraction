interface AppProps {
  width: number
  height: number
}

const defaultAppProps: AppProps = {
  width: 800,
  height: 800,
}

class App {
  private root: HTMLElement
  private canvas: HTMLCanvasElement
  private context: CanvasRenderingContext2D

  private readonly width: number
  private readonly height: number

  constructor(rootElementId: string, props: Partial<AppProps> = {}) {
    const { width, height } = { ...defaultAppProps, ...props }
    this.width = width
    this.height = height

    const el = document.getElementById(rootElementId)
    if (el === null)
      throw new Error(`Could not find element with id ${rootElementId}`)
    this.root = el

    const canvas = document.createElement('canvas')
    this.canvas = canvas
    this.canvas.width = width
    this.canvas.height = height

    const context = this.canvas.getContext('2d')
    if (context === null)
      throw new Error('Could not get context')
    this.context = context

    this.root.appendChild(canvas)

    this.setup()
  }

  private setup() {
    this.context.clearRect(0, 0, this.width, this.height)
  }

  public run() {
    console.log('Running App')
  }
}

export function createApp(rootElementId: string) {
  return new App(rootElementId)
}
