const defaultOptions = {
  schemes: [
    'light',
    'dark',
  ],
}

export default {
  install(Vue, userOptions) {
    let options = { ...defaultOptions, ...userOptions }

    Vue.prototype.$colorscheme = {
      load: () => {
        if (!localStorage.hasOwnProperty('colorscheme'))
          options.scheme = options.schemes[0]
        else {
          const c = localStorage.getItem('colorscheme')
          options.scheme = c
          const pos = options.schemes.indexOf(c)
          if (~pos) {
            options.schemes.splice(pos, 1)
            options.schemes.push(c)
          }
        }
        localStorage.setItem('colorscheme', options.scheme)
        document.getElementById('app').className = options.scheme
      },
      next: () => {
        options.scheme = options.schemes.shift()
        options.schemes.push(options.scheme)
        localStorage.setItem('colorscheme', options.scheme)
        document.getElementById('app').className = options.scheme
        console.log(options.scheme)
      }
    }
  },
}
