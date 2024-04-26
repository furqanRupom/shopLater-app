import { baseApi } from "./baseApi";

const commentsApi = baseApi.injectEndpoints({
    endpoints:(builder) => ({
        getComments:builder.query({
            query:() => "/comments"
        })
    })
});

export const {useGetCommentsQuery} = commentsApi;