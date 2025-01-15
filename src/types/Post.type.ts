
enum PostTopics {
    JavaScript,
    TypeScript,
    React,
    Astro
}

export type TPostFrontmatter = {
    layout: string
    title: string
    description: string
    pubDate: string
    heroImage: string
    topics: PostTopics[]
    draft?: boolean	
}

export type TPostFile = {
    url: string
    frontmatter: TPostFrontmatter
}

export type TPost = TPostFrontmatter & {
    url: string
} 