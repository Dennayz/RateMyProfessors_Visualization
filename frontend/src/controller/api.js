import axios from "axios";

export const saveProfessor = async (tid) => {
  try {
    const resp = await axios.post("/api/professors", {
      tid: tid,
    });
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllProfessors = async () => {
  try {
    const resp = await axios.get("/api/history");
    return resp.data;
  } catch (error) {
    console.log(erorr);
  }
};

export const getProfessorByTid = async (tid) => {
  try {
    const resp = await async.get(`/api/professors/${tid}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProfessorByTid = async (tid) => {
  try {
    const resp = await async.delete(`/api/professors/delete/${tid}`);
  } catch (erorr) {
    console.log(error);
  }
};
