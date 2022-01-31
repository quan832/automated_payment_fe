import { handleResponse, handleError } from "../apiUtils";
import { apiConfig, commonAPI } from "../common-api";

const rootURL = 'http://localhost:5000/v1'
// const rootURL = 'https://automation-payment-be.herokuapp.com/v1'
export function uploadAPI(form) {
    return commonAPI
        .post(
            `${rootURL}/uploadFile`,
            form,
            {
                headers: {
                    common: {
                        'Content-Type': 'multipart/form-data'
                    }
                },
            }
        )
        .then(handleResponse)
        .catch(handleError);
}