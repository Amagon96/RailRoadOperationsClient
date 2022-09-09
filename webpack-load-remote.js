function webpackLoadRemote(app, localhostPort) {
  const remote = `http://localhost:${localhostPort}/IL-${app}-remote.js`;

  return `promise new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = "${remote}";
        script.onload = () => {
          const proxy = {
            get: (request) => window.${app}.get(request),
            init: (arg) => {
              try {
                return window.${app}.init(arg);
              } catch (e) {
                console.log("${app} remote container already initialized");
              }
            },
          };
    
          resolve(proxy);
        };
    
        document.head.appendChild(script);
      });`.replace(/\s\s+/g, " ");
}

module.exports = { webpackLoadRemote };
