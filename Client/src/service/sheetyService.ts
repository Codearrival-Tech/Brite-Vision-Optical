import axios from "axios";
import { API } from "../api/axios";

export const createContact = async (data: any) => {
  const res = await axios.post(API.CONTACT, {
    contact: data,
  });
  return res.data;
};

export const createEyeTest = async (data: any) => {
  const res = await axios.post(API.EYE_TEST, {
    eyeTest: data,
  });
  return res.data;
};

export const createBooking = async (data: any) => {
  const res = await axios.post(API.BOOK_FRAME, {
    bookFrame: data,
  });
  return res.data;
};

export const fetchTestimonials = async () => {
  const res = await axios.get(API.FEEDBACK);
  return res.data;
};