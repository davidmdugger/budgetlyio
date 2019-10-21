interface Theme {
  fonts: {
    heading: string
    paragraph: string
  }
  colors: {
    primary: string
    secondary: string
    accent: string
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
    accent: "#FFE5E4"
  }
}

export default theme;