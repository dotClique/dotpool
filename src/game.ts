const buildUrl = "https://barelars.no/dotPool/WebGLBuild"

const config = {
  dataUrl: buildUrl + "/Build/WebGLBuild.data",
  frameworkUrl: buildUrl + "/Build/WebGLBuild.framework.js",
  codeUrl: buildUrl + "/Build/WebGLBuild.wasm",
  streamingAssetsUrl: buildUrl + "/StreamingAssets",
  companyName: "dotClique",
  productName: "dotpool-unity",
  productVersion: "0.1",
  showBanner: false,
}

export function loadGame() {
  const loader = document.createElement("script")
  loader.src = buildUrl + "/Build/WebGLBuild.loader.js"
  loader.addEventListener("load", () => {
    window
      // @ts-ignore
      .createUnityInstance(
        document.getElementById("gamecontainer"),
        config,
        (progress: number) => {
          if (progress === 1) console.log("Loaded game")
        }
      )
      .then((unityInstance: any) => console.log("instance: " + unityInstance))
  })
  document.head.appendChild(loader)
}
