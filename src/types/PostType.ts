
enum PostTopics {
    JavaScript,
    TypeScript,
    React
}

export type PostType = {
    layout: string
    title: string
    description: string
    pubDate: string
    heroImage: string
    topics: PostTopics[]
    url: string
    draft?: boolean
}