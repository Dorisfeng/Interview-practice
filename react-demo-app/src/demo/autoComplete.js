import { useEffect, useState } from "react";
var sites = [
  "Google",
  "Taobao",
  "Runoob",
  "Wiki",
  "Zhihu",
  "Baidu",
  "Sina",
  "Tmall",
  "JD",
  "Alibaba",
  "QQ",
  "Weixin",
];
const Demo = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    let inputDom = document.getElementById("inputId");
    let listDom = document.getElementById("listId");
    inputDom.addEventListener("input", (e) => {
      listDom.style.display = "block";
      const value = e.target.value;
      setValue(value);
    });
  });
  return (
    <div style={{ position: "relative" }}>
      <input id="inputId" />
      <div id="listId" style={{ position: "absolute", display: "none" }}>
        <ul>
          {sites
            .filter((item) => item.indexOf(value) > -1)
            .map((item) => (
              <li key={item}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default Demo;
