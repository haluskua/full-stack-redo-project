import request from "superagent";

export function getInfo() {
  return request.get("/api/information").then(res => res.body);
}
