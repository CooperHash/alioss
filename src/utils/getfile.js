const OSS = require('ali-oss')
const getfile = async (path) => {
  const client = new OSS({
    // yourregion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
    region: 'oss-cn-guangzhou',
    // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
    accessKeyId: 'LTAI5tKgeGydbmqsGYnroGUq',
    accessKeySecret: 'zTI7pG0SBSe6OlsODV9RYQqUK7ONbH',
    // 填写Bucket名称。
    bucket: 'rssguangzhou',
  });
  console.log('pathe',path);

  const data = await client.get(path)
  return data
}


export default getfile
