import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

interface clientType {
    clientID: string,
    clientSecret: string
}

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ]
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST};
