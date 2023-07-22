import * as request from '~/utils/request';

export const search = async (q , type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data
        // setSearchResult(res.data);
        // setLoading(false);
    } catch (error) {
        console.log(error);
        // setLoading(false);
    }

    // .then((res) => {
    //     // console.log(res.data.data);
    //     setSearchResult(res.data);
    //     setLoading(false);
    // })
    // .catch(() => {
    //     setLoading(false);
    // });
};
// fetchApi();