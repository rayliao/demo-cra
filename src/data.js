import tcb from "tcb-js-sdk";

export const getData = () => {
  const app = tcb.init({
    env: "demo-ffe40",
  });
  // 1. 获取数据库引用
  var db = app.database();
  // 2. 构造查询语句
  // collection() 方法获取一个集合的引用
  // where() 方法传入一个 query 对象，数据库返回集合中字段等于指定值的 JSON 文档。
  // get() 方法会触发网络请求，往数据库取数据
  db.collection("books")
    .where({
      publishInfo: {
        country: "United States",
      },
    })
    .get()
    .then(function(res) {
      console.log(res);
      // 输出 [{ "title": "The Catcher in the Rye", ... }]
    });
};
