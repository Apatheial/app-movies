import axios from "axios";
import { error } from "console";

const KEY = "AIzaSyAVsyOfANCnYdBk0SlvHmlBgU7ljSUJpzw"

const youtubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 50,
        key: KEY
    },
    headers: {}
})

async function videosPlaylist(playlist: string) {
    const response = await youtubeApi.get('/playlistItems', {
        params: {
            playlistId: playlist,
        }
    })
   
    return response.data.items
}

export async function resolveVideos(playlist: string, bandCategory: string) {
    try {  
        const videosData = await videosPlaylist(playlist)
        const videos = videosData
                        .filter((video: any) => video.snippet.description != 'This video is unavailable.' && video.snippet.description != 'This video is private.')
                        .map((video: any) => {
                            return ({
                                id: video.snippet.resourceId.videoId,
                                title: video.snippet.title,
                                band: bandCategory
                            })
                        })
        return videos

    } catch (error) {
        console.error('Erro ao resolver vídeos:', error);
        return [];
    }
}

export default resolveVideos;
