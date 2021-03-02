import axios from "axios";

export const processProfessor = async (tid) => {
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
    return resp.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getProfessorByTid = async (tid) => {
  try {
    const resp = await axios.get(`/api/professors/${tid}`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProfessorByTid = async (tid) => {
  try {
    await axios.delete(`/api/professors/delete/${tid}`);
  } catch (error) {
    console.log(error);
  }
};
