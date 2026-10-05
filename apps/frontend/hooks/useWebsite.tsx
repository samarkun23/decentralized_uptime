'use client'
import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";

interface Website{
    id: String;
    url: String;
    tick: {
        id: string;
        createdAt: string;
        status: string;
        latency: string
    }[];
}

export function useWebsite() {
    const {getToken} = useAuth();
    const [websites , setWebsites] = useState<Website[]>([]);


    async function refreshWebsites() {
        try {
            const token = await getToken();

            const response  = await axios.get(`${BACKEND_URL}/api/v1/websites`,{
                headers: {
                    Authorization: token,
                }
            });

            setWebsites(response.data.websites);
            
        } catch (error) {
            console.error("failed to fetch a websites", error) 
        }


    }

    useEffect(() => {
        refreshWebsites()

        const interval = setInterval(() => {
            refreshWebsites()
        }, 1000 * 60 * 1);

        return () => clearInterval(interval);
    },[]) 

    return websites;

}