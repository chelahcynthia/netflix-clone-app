const key = '43c12777bf8f3d6fd52526caa4987064'

const requests = {
    requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1',
    requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1',
    requestLatest: 'https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US',
    requestTrending: 'https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>',
    requestUpcoming: 'https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1'

};  

export default requests;