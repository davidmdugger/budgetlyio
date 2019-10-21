interface Theme {
  fonts: {
    heading: string
    paragraph: string
  }
  colors: {
    primary: string
    secondary: string
    accent: string
    alert: string
    white: string
  }
}

const theme: Theme = {
  fonts: {
    heading: "Impact",
    paragraph: "Arial"
  },
  colors: {
    primary: "#2128BD",
    secondary: "#FECC58",
    accent: "#FFE5E4",
    alert: "#FF0000",
    white: "#F8F8F8"
  }
}

export default theme;