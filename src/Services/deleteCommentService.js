import http from "./httpService";

export function deleteComment(selectedId) {
  return http.delete(`/comments/${selectedId}`);
}
