import commonAPI from "./commonAPI";
import serverURL from "./serverURL";



export const AppointmentAPI = async (reqBody) => {
   return await commonAPI('POST', `${serverURL}/api/appointments`, reqBody)
}

export const GetAppointmentAPI = async () => {
   return await commonAPI('GET', `${serverURL}/api/appointments`)
}


export const ContactUsAPI = async (reqBody) => {
   return await commonAPI('POST', `${serverURL}/api/contacts`, reqBody)
}

export const GetContactUsAPI = async () => {
   return await commonAPI('GET', `${serverURL}/api/contacts`)
}

export const FeedbackAPI = async (reqBody) => {
   return await commonAPI('POST', `${serverURL}/api/feedback`, reqBody)
}


export const GetFeedbackAPI = async () => {
   return await commonAPI('GET', `${serverURL}/api/feedback`)
}

