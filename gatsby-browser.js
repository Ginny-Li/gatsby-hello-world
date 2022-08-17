const React = require("react");
const Layout = require("./src/components/layout").default;
const Seo = require("./src/components/seo").default;

//Service Worker 更新時顯示消息
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}

//需要gatsby-plugin-offline不支持的內容，您可以添加自定義服務人員: 調用sw.js的static文件
export const registerServiceWorker = () => true


export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>
    <Seo/>
    {element}
    </Layout>
}